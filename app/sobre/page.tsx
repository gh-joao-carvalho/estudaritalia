import Image from "next/image";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/5511967529160";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#F8F7F3] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F8F7F3]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/images/logo.png"
              alt="Estudar Itália"
              width={240}
              height={60}
              priority
              className="h-[34px] md:h-[48px] lg:h-[54px] w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-[15px] font-semibold text-slate-700 md:flex">
            <Link href="/universidades" className="hover:text-slate-900">
              Universidades
            </Link>
            <Link href="/#como-funciona" className="hover:text-slate-900">
              Como funciona
            </Link>
            <Link href="/sobre" className="text-slate-900">
              Sobre
            </Link>
            <a
              href={WHATSAPP_LINK}
              className="rounded-xl bg-emerald-950 px-4 py-2 text-white shadow-sm hover:bg-emerald-900"
            >
              WhatsApp
            </a>
          </nav>

          <a
            href={WHATSAPP_LINK}
            className="md:hidden rounded-xl bg-emerald-950 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-emerald-900"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-5 pb-16 pt-12 md:pb-24">
        <section className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-emerald-900/10 px-3 py-1 text-sm font-semibold text-emerald-950">
            Sobre o projeto
          </div>

          <h1 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
            Estudar Itália: clareza para decisões acadêmicas internacionais
          </h1>

          <p className="mt-4 text-[17px] leading-7 text-slate-700">
            O <strong>Estudar Itália</strong> nasceu para ajudar famílias brasileiras a entender,
            comparar e planejar o acesso ao ensino superior italiano de forma objetiva, segura e
            realista — sem promessas irreais ou atalhos duvidosos.
          </p>

          <p className="mt-4 text-[17px] leading-7 text-slate-700">
            O projeto faz parte do ecossistema educacional da{" "}
            <a
              href="https://www.totalprepbrasil.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-extrabold text-emerald-950 hover:underline hover:underline-offset-4"
            >
              TotalPrep Brasil
            </a>
            , consultoria educacional com ampla experiência em preparação acadêmica, admissões
            internacionais e orientação estratégica para estudantes e famílias.
          </p>

          <h2 className="mt-8 text-xl font-extrabold text-slate-950">
            Nossa metodologia
          </h2>

          <p className="mt-3 text-[16px] leading-7 text-slate-700">
            Aplicamos uma metodologia estruturada, baseada em dados, requisitos oficiais e
            cronogramas reais. O foco é reduzir incertezas, evitar erros comuns e permitir que cada
            família tome decisões conscientes, considerando custos, prazos e perfil acadêmico.
          </p>

          <ul className="mt-4 list-disc pl-5 text-[16px] leading-7 text-slate-700">
            <li>Mapeamento de universidades e cursos compatíveis com o perfil do aluno</li>
            <li>Clareza sobre processos seletivos, exames e documentos</li>
            <li>Planejamento de prazos e estratégias de candidatura</li>
            <li>Orientação contínua ao longo do processo</li>
          </ul>

          <h2 className="mt-8 text-xl font-extrabold text-slate-950">
            Por que Itália?
          </h2>

          <p className="mt-3 text-[16px] leading-7 text-slate-700">
            A Itália combina tradição acadêmica, universidades públicas de alto nível e custos mais
            previsíveis quando comparada a outros destinos internacionais. Quando bem compreendido,
            o sistema oferece oportunidades reais para estudantes brasileiros.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/universidades"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-950 px-6 py-4 text-base font-extrabold text-white hover:bg-emerald-900"
            >
              Ver universidades →
            </Link>
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-6 py-4 text-base font-extrabold text-slate-900 hover:bg-slate-50"
            >
              Falar com a equipe
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-[#F8F7F3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Estudar Itália"
              width={150}
              height={40}
              className="h-[28px] w-auto"
            />
            <span className="text-sm font-semibold text-slate-600">
              © {new Date().getFullYear()} Estudar Itália — um projeto do{" "}
              <a
                href="https://www.totalprepbrasil.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="font-extrabold text-emerald-950 hover:underline hover:underline-offset-4"
              >
                TotalPrep Brasil
              </a>
            </span>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-slate-900">
              Home
            </Link>
            <Link href="/universidades" className="hover:text-slate-900">
              Universidades
            </Link>
            <Link href="/sobre" className="hover:text-slate-900">
              Sobre
            </Link>
            <a href={WHATSAPP_LINK} className="hover:text-slate-900">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
