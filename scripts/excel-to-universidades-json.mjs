import fs from "node:fs";
import path from "node:path";
import xlsx from "xlsx";

const EXCEL_PATH = path.resolve("data", "Modelo_Estrutura_Universidades_Estudar_Italia.xlsx");
const OUT_PATH = path.resolve("data", "universidades.json");

const SHEET_UNIS = "Universidades";
const SHEET_CURSOS = "Cursos";

function cleanText(v) {
  return String(v ?? "")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toBool(v) {
  const t = cleanText(v).toLowerCase();
  return t === "true" || t === "sim" || t === "yes" || t === "1";
}

function toNumberOrNull(v) {
  const s = cleanText(v);
  if (!s) return null;

  // handle "1.234,56" or "1234,56" (pt-BR style)
  const normalized = s.replace(/\./g, "").replace(",", ".");
  const n = Number(normalized);
  return Number.isFinite(n) ? n : null;
}

function normalizeTipo(v) {
  const t = cleanText(v).toLowerCase();
  if (!t) return null;
  if (t === "publica" || t === "pública" || t === "public") return "publica";
  if (t === "privada" || t === "private") return "privada";
  return t;
}

function toList(v) {
  const s = cleanText(v);
  if (!s) return [];
  return s
    .split(";")
    .map((x) => cleanText(x))
    .filter(Boolean);
}

const wb = xlsx.readFile(EXCEL_PATH);

// Load sheets
const unisSheet = wb.Sheets[SHEET_UNIS];
const cursosSheet = wb.Sheets[SHEET_CURSOS];
if (!unisSheet) throw new Error(`Sheet not found: ${SHEET_UNIS}`);
if (!cursosSheet) throw new Error(`Sheet not found: ${SHEET_CURSOS}`);

const unisRows = xlsx.utils.sheet_to_json(unisSheet, { defval: "" });
const cursosRows = xlsx.utils.sheet_to_json(cursosSheet, { defval: "" });

// Group courses by uni_id (as rich objects)
const cursosById = new Map();
for (const r of cursosRows) {
  const uniId = cleanText(r.uni_id);
  const cursoNome = cleanText(r.curso_nome);
  if (!uniId || !cursoNome) continue;

  const curso = {
    nome: cursoNome,
    area: cleanText(r.area) || null,
    idioma: cleanText(r.idioma) || null,
    campus: cleanText(r.campus) || null,
    acesso: cleanText(r.acesso) || null,
    custo_ano_eur: toNumberOrNull(r.custo_ano_eur),
    nivel: cleanText(r.nivel) || null,
    link_programa: cleanText(r.link_programa) || null,
  };

  if (!cursosById.has(uniId)) cursosById.set(uniId, []);
  cursosById.get(uniId).push(curso);
}

// Build output
const out = [];

for (let idx = 0; idx < unisRows.length; idx++) {
  const u = unisRows[idx];

  const rawId = cleanText(u.id);
  const rawNome = cleanText(u.nome);

  // ✅ skip truly empty/ghost rows
  const hasAnyMeaningfulValue =
    rawId ||
    rawNome ||
    cleanText(u.cidade) ||
    cleanText(u.regiao) ||
    cleanText(u.tipo) ||
    cleanText(u.site_url) ||
    cleanText(u.descricao_curta) ||
    cleanText(u.descricao_longa);

  if (!hasAnyMeaningfulValue) continue;

  const id = rawId || String(idx);
  if (!id) continue;

  const cursos = cursosById.get(id) ?? [];

  // FAQs as structured list
  const faq = [
    { q: cleanText(u.faq_1_q), a: cleanText(u.faq_1_a) },
    { q: cleanText(u.faq_2_q), a: cleanText(u.faq_2_a) },
    { q: cleanText(u.faq_3_q), a: cleanText(u.faq_3_a) },
  ].filter((x) => x.q || x.a);

  out.push({
    // Core identifiers
    id,
    nome: cleanText(u.nome) || "Universidade",

    // Location/type
    cidades: toList(u.cidade),
    regiao: cleanText(u.regiao) || null,
    pais: "Itália",
    tipo: normalizeTipo(u.tipo),

    // Links/media
    site_url: cleanText(u.site_url) || null,
    imagem_capa: cleanText(u.imagem_capa) || null,

    // Content
    descricao_curta: cleanText(u.descricao_curta) || null,
    descricao_longa: cleanText(u.descricao_longa) || null,
    admissao_texto: cleanText(u.admissao_texto) || null,
    pontos_fortes: toList(u.pontos_fortes),
    idiomas: toList(u.idiomas),
    areas: toList(u.areas),
    acesso: cleanText(u.acesso) || null,

    // Costs
    custo_min_eur: toNumberOrNull(u.custo_min_eur),
    custo_max_eur: toNumberOrNull(u.custo_max_eur),

    // FAQ
    faq,

    // Status/meta
    status: cleanText(u.status) || null,
    updated_at: cleanText(u.updated_at) || null,

    // Courses tab
    cursos, // rich objects

    // Optional legacy fields (keep if your UI still expects them)
    cursos_nomes: Array.from(new Set(cursos.map((c) => c.nome))).slice(0),

    // Keep your old placeholders if still used elsewhere:
    rank_qs: null,
    bolsas: false,
  });
}

fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2), "utf8");
console.log(`✅ Wrote ${out.length} universities to ${OUT_PATH}`);

// Helpful warnings
const uniIds = new Set(out.map((u) => u.id));
const cursosUniIds = new Set([...cursosById.keys()]);

const missingCursos = out.filter((u) => (cursosById.get(u.id) ?? []).length === 0).map((u) => u.id);
const orphanCursos = [...cursosUniIds].filter((id) => !uniIds.has(id));

if (missingCursos.length) {
  console.log(`⚠️ Universities with no cursos in sheet "${SHEET_CURSOS}":`, missingCursos);
}
if (orphanCursos.length) {
  console.log(`⚠️ Cursos rows referencing unknown uni_id:`, orphanCursos);
}
