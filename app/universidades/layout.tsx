import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universidades na Itália | Estudar Itália",
  description:
    "Lista de universidades na Itália com filtros por cidade, tipo e QS rank. Compare cursos e fale no WhatsApp para receber o passo a passo.",
  alternates: { canonical: "/universidades" },
  openGraph: {
    title: "Universidades na Itália | Estudar Itália",
    description:
      "Compare universidades na Itália por cidade, tipo e QS rank. Veja cursos e fale no WhatsApp.",
    url: "/universidades",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
