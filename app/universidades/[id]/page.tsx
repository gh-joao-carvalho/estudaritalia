import Link from "next/link";
import raw from "@/data/universidades.json";
import { notFound } from "next/navigation";

type Uni = {
  id: string;
  nome?: string | null;
  tipo?: string | null;
  cidade?: string | null;
  regiao?: string | null;
  pais?: string | null;
  rank_qs?: number | string | null;
  site?: string | null;
  cursos?: string[] | string | null;
  bolsas?: boolean | null;
};

function s(v: any) {
  return (v ?? "").toString().trim();
}

function normalizeRank(v: any): number | null {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function normalizeCursos(c: any): string[] {
  if (!c) return [];
  if (Array.isArray(c)) return c.map(String).map((x) => x.trim()).filter(Boolean);
  return String(c).split(",").map((x) => x.trim()).filter(Boolean);
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const data = raw as Uni[];
  const want = s(id).toLowerCase();
  const u = data.find((x) => s(x.id).toLowerCase() === want);

  if (!u) return notFound();

  const nome = s(u.nome) || "Universidade";
  const cidade = s(u.cidade);
  const regiao = s(u.regiao);
  const pais = s(u.pais) || "Itália";
  const rank = normalizeRank(u.rank_qs);
  const site = s(u.site) || null;
  const cursos = normalizeCursos(u.cursos);
  const bolsas = Boolean(u.bolsas);

  const green = "#274E43";
  const border = "#E2E4DD";
  const text = "#2C3A33";
  const muted = "#5F6F66";
  const bg = "#F5F6F3";

  const wa = `https://wa.me/5511967529160?text=${encodeURIComponent(
    `Olá! Quero entender custos reais e o passo a passo para estudar na Itália. Tenho interesse em: ${nome} (${cidade}).`
  )}`;

  return (
    <main style={{ background: bg, minHeight: "100vh" }}>
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "44px 20px 28px" }}>
        <Link href="/universidades" style={{ color: green, textDecoration: "none", fontWeight: 900 }}>
          ← Voltar para a lista
        </Link>

        <div
          style={{
            marginTop: 14,
            background: "white",
            border: `1px solid ${border}`,
            borderRadius: 18,
            padding: 18,
            boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <h1 style={{ margin: 0, color: text, fontSize: 30, letterSpacing: -0.3 }}>{nome}</h1>
            <div
              style={{
                background: "#E6E8E2",
                color: green,
                borderRadius: 999,
                padding: "6px 10px",
                fontSize: 12,
                fontWeight: 900,
                height: "fit-content",
              }}
            >
              {rank ? `QS: ${rank}` : "QS: —"}
            </div>
          </div>

          <p style={{ margin: "10px 0 0", color: muted, lineHeight: 1.5 }}>
            📍 {cidade || "—"}
            {regiao ? ` · ${regiao}` : ""} · {pais}
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            {bolsas && (
              <span
                style={{
                  background: "#FFF3D6",
                  color: "#7A5B00",
                  padding: "6px 10px",
                  borderRadius: 999,
                  fontWeight: 900,
                  fontSize: 12,
                }}
              >
                Bolsas
              </span>
            )}
            {site ? (
              <a
                href={site}
                target="_blank"
                rel="noreferrer"
                style={{ color: green, fontWeight: 950, textDecoration: "none" }}
              >
                Visitar site ↗
              </a>
            ) : (
              <span style={{ color: muted, fontSize: 13 }}>Site não informado</span>
            )}
          </div>

          {cursos.length > 0 && (
            <>
              <h2 style={{ margin: "18px 0 10px", color: text, fontSize: 16 }}>Cursos (principais)</h2>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {cursos.map((c) => (
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
              </div>
            </>
          )}

          <div style={{ marginTop: 18 }}>
            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              style={{
                background: green,
                color: "white",
                padding: "12px 14px",
                borderRadius: 12,
                fontWeight: 900,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 10px 24px rgba(39,78,67,0.18)",
              }}
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
