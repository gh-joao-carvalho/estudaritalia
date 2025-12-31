import type { Metadata } from "next";
import raw from "@/data/universidades.json";

type Uni = {
  id: string;
  nome?: string | null;
  cidade?: string | null;
  regiao?: string | null;
  rank_qs?: number | string | null;
};

const s = (v: any) => (v ?? "").toString().trim();

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;

  const data = raw as Uni[];
  const u = data.find((x) => s(x.id).toLowerCase() === s(id).toLowerCase());

  const nome = u ? s(u.nome) : "Universidade";
  const cidade = u ? s(u.cidade) : "";
  const regiao = u ? s(u.regiao) : "";
  const rank = u && Number.isFinite(Number(u.rank_qs)) ? Number(u.rank_qs) : null;

  const title = `${nome} | Universidades na Itália | Estudar Itália`;
  const description = `Informações sobre ${nome}${cidade ? ` em ${cidade}` : ""}${regiao ? ` (${regiao})` : ""}. ${
    rank ? `QS rank ${rank}. ` : ""
  }Veja cursos e fale no WhatsApp para receber o passo a passo.`;

  const url = `/universidades/${s(id)}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
