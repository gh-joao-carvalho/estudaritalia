"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import raw from "@/data/universidades.json";

type UniRaw = {
  id?: string | null;
  nome?: string | null;
  cidade?: string | null;
  regiao?: string | null;
  pais?: string | null;
  tipo?: string | null;
  rank_qs?: number | string | null;
  site?: string | null;
  cursos?: string[] | string | null;
  bolsas?: boolean | null;
};

type Uni = {
  id: string;
  nome: string;
  cidade: string;
  regiao: string;
  pais: string;
  tipo: "publica" | "privada" | "outro";
  rank_qs: number | null;
  site: string | null;
  cursos: string[];
  bolsas: boolean;
};

function safeStr(v: any): string {
  return (v ?? "").toString().trim();
}

function normalizeCursos(cursos: UniRaw["cursos"]): string[] {
  if (!cursos) return [];
  if (Array.isArray(cursos)) return cursos.map((s) => String(s).trim()).filter(Boolean);
  return String(cursos)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function normalizeTipo(tipo: UniRaw["tipo"]): Uni["tipo"] {
  const t = safeStr(tipo).toLowerCase();
  if (t === "publica" || t === "pública" || t === "public") return "publica";
  if (t === "privada" || t === "private") return "privada";
  return "outro";
}

function normalizeRank(v: UniRaw["rank_qs"]): number | null {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  const s = safeStr(v);
  if (!s) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

function fmtQS(rank: number | null) {
  if (rank === null || rank === undefined) return "QS: —";
  return `QS: ${rank}`;
}

export default function Page() {
  const router = useRouter();
  const data = raw as UniRaw[];

  const list: Uni[] = useMemo(() => {
    return (data ?? []).map((u, idx) => ({
      id: safeStr(u.id) || String(idx),
      nome: safeStr(u.nome) || "Universidade",
      cidade: safeStr(u.cidade),
      regiao: safeStr(u.regiao),
      pais: safeStr(u.pais) || "Itália",
      tipo: normalizeTipo(u.tipo),
      rank_qs: normalizeRank(u.rank_qs),
      site: safeStr(u.site) || null,
      cursos: normalizeCursos(u.cursos),
      bolsas: Boolean(u.bolsas),
    }));
  }, [data]);

  const [q, setQ] = useState("");
  const [tipo, setTipo] = useState<"todas" | Uni["tipo"]>("todas");
  const [cidade, setCidade] = useState<string>("todas");
  const [ordenacao, setOrdenacao] = useState<"rank_qs" | "nome">("rank_qs");
  const [somenteBolsas, setSomenteBolsas] = useState(false);

  const cidades = useMemo(() => {
    const s = new Set<string>();
    list.forEach((u) => u.cidade && s.add(u.cidade));
    return ["todas", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, [list]);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();

    let out = list.filter((u) => {
      if (tipo !== "todas" && u.tipo !== tipo) return false;
      if (cidade !== "todas" && u.cidade !== cidade) return false;
      if (somenteBolsas && !u.bolsas) return false;

      if (!qq) return true;

      const hay = [u.nome, u.cidade, u.regiao, u.pais, u.tipo, ...(u.cursos ?? [])]
        .join(" ")
        .toLowerCase();

      return hay.includes(qq);
    });

    out.sort((a, b) => {
      if (ordenacao === "nome") return a.nome.localeCompare(b.nome);
      const ar = a.rank_qs ?? 999999;
      const br = b.rank_qs ?? 999999;
      if (ar !== br) return ar - br;
      return a.nome.localeCompare(b.nome);
    });

    return out;
  }, [list, q, tipo, cidade, ordenacao, somenteBolsas]);

  const bg = "#F5F6F3";
  const card = "#FFFFFF";
  const border = "#E2E4DD";
  const text = "#2C3A33";
  const muted = "#5F6F66";
  const green = "#274E43";

  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <main style={{ background: bg, minHeight: "100vh" }}>
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "44px 20px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ margin: 0, color: text, fontSize: 34, letterSpacing: -0.4 }}>
              Universidades na Itália
            </h1>
            <p style={{ margin: "8px 0 0", color: muted, maxWidth: 720, lineHeight: 1.45 }}>
              Compare opções por <strong>cidade</strong>, <strong>tipo</strong>, <strong>QS rank</strong> e{" "}
              <strong>áreas de estudo</strong>.
            </p>
          </div>

          <Link
            href="/"
            style={{
              alignSelf: "center",
              textDecoration: "none",
              background: green,
              color: "white",
              padding: "10px 14px",
              borderRadius: 12,
              fontWeight: 900,
              fontSize: 13,
              boxShadow: "0 10px 24px rgba(39,78,67,0.18)",
              height: "fit-content",
            }}
          >
            ← Voltar para Home
          </Link>
        </div>

        <div
          style={{
            marginTop: 18,
            background: card,
            border: `1px solid ${border}`,
            borderRadius: 18,
            padding: 14,
            boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
            display: "grid",
            gap: 10,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 0.8fr 0.8fr", gap: 10 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                border: `1px solid ${border}`,
                borderRadius: 14,
                padding: "10px 12px",
                background: "#fff",
              }}
            >
              <span aria-hidden="true">🔎</span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar por nome, cidade, curso, região…"
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  fontSize: 14,
                  color: text,
                  background: "transparent",
                }}
              />
            </div>

            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value as any)}
              style={{
                border: `1px solid ${border}`,
                borderRadius: 14,
                padding: "10px 12px",
                background: "white",
                color: text,
                fontWeight: 800,
              }}
            >
              <option value="todas">Tipo: todas</option>
              <option value="publica">Pública</option>
              <option value="privada">Privada</option>
              <option value="outro">Outro</option>
            </select>

            <select
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              style={{
                border: `1px solid ${border}`,
                borderRadius: 14,
                padding: "10px 12px",
                background: "white",
                color: text,
                fontWeight: 800,
              }}
            >
              {cidades.map((c) => (
                <option key={c} value={c}>
                  {c === "todas" ? "Cidade: todas" : c}
                </option>
              ))}
            </select>

            <select
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value as any)}
              style={{
                border: `1px solid ${border}`,
                borderRadius: 14,
                padding: "10px 12px",
                background: "white",
                color: text,
                fontWeight: 800,
              }}
            >
              <option value="rank_qs">Ordenar: QS (melhor primeiro)</option>
              <option value="nome">Ordenar: nome</option>
            </select>
          </div>

          <label style={{ display: "flex", alignItems: "center", gap: 10, color: text, fontWeight: 800 }}>
            <input
              type="checkbox"
              checked={somenteBolsas}
              onChange={(e) => setSomenteBolsas(e.target.checked)}
            />
            Mostrar apenas com bolsas (se existir no dado)
          </label>

          <div style={{ color: muted, fontSize: 13 }}>
            Mostrando <strong>{filtered.length}</strong> de <strong>{list.length}</strong>
          </div>
        </div>

        <div
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 14,
          }}
        >
          {filtered.map((u) => {
            const detailHref = `/universidades/${u.id}`;
            const waHref = `https://wa.me/5511967529160?text=${encodeURIComponent(
              `Olá! Quero entender custos reais e o passo a passo para estudar na Itália. Tenho interesse em: ${u.nome} (${u.cidade}).`
            )}`;

            return (
              <div
                key={u.id}
                role="link"
                tabIndex={0}
                onClick={() => router.push(detailHref)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") router.push(detailHref);
                }}
                style={{
                  cursor: "pointer",
                  background: card,
                  border: `1px solid ${border}`,
                  borderRadius: 18,
                  padding: 14,
                  boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
                  display: "grid",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ fontWeight: 950, color: text, fontSize: 16, lineHeight: 1.25 }}>{u.nome}</div>

                  <div
                    style={{
                      background: "#E6E8E2",
                      color: green,
                      borderRadius: 999,
                      padding: "6px 10px",
                      fontSize: 12,
                      fontWeight: 900,
                      whiteSpace: "nowrap",
                      height: "fit-content",
                    }}
                  >
                    {fmtQS(u.rank_qs)}
                  </div>
                </div>

                <div style={{ color: muted, fontSize: 13, lineHeight: 1.4 }}>
                  <div>
                    📍 {u.cidade || "—"}
                    {u.regiao ? ` · ${u.regiao}` : ""} · {u.pais}
                  </div>

                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                    <span
                      style={{
                        background:
                          u.tipo === "publica" ? "#274E43" : u.tipo === "privada" ? "#7C9B8A" : "#121815",
                        color: "white",
                        padding: "6px 10px",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 900,
                      }}
                    >
                      {u.tipo === "publica" ? "Pública" : u.tipo === "privada" ? "Privada" : "Outro"}
                    </span>

                    {u.bolsas && (
                      <span
                        style={{
                          background: "#FFF3D6",
                          color: "#7A5B00",
                          padding: "6px 10px",
                          borderRadius: 999,
                          fontSize: 12,
                          fontWeight: 900,
                        }}
                      >
                        Bolsas
                      </span>
                    )}
                  </div>
                </div>

                {u.cursos?.length > 0 && (
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {u.cursos.slice(0, 6).map((c) => (
                      <span
                        key={c}
                        style={{
                          border: `1px solid ${border}`,
                          background: "#F8F9F6",
                          color: text,
                          borderRadius: 999,
                          padding: "6px 10px",
                          fontSize: 12,
                          fontWeight: 800,
                        }}
                      >
                        {c}
                      </span>
                    ))}
                    {u.cursos.length > 6 && (
                      <span style={{ color: muted, fontSize: 12, fontWeight: 800 }}>+{u.cursos.length - 6}</span>
                    )}
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                  {u.site ? (
                    <a
                      href={u.site}
                      target="_blank"
                      rel="noreferrer"
                      onClick={stop}
                      style={{ color: green, fontWeight: 950, textDecoration: "none" }}
                    >
                      Visitar site ↗
                    </a>
                  ) : (
                    <span style={{ color: muted, fontSize: 13 }}>Site não informado</span>
                  )}

                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <Link
                      href={detailHref}
                      onClick={(e) => stop(e as any)}
                      style={{ color: green, fontWeight: 950, textDecoration: "none", fontSize: 13 }}
                    >
                      Ver detalhes →
                    </Link>

                    <a
                      href={waHref}
                      target="_blank"
                      rel="noreferrer"
                      onClick={stop}
                      style={{
                        background: green,
                        color: "white",
                        padding: "10px 12px",
                        borderRadius: 12,
                        fontWeight: 900,
                        textDecoration: "none",
                        fontSize: 13,
                        boxShadow: "0 10px 24px rgba(39,78,67,0.18)",
                      }}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ height: 40 }} />
      </section>
    </main>
  );
}
