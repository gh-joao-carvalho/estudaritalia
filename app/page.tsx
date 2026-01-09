// app/page.tsx
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/5511967529160";

const features = [
  { title: "Orientação passo a passo", desc: "Você sabe exatamente o que fazer em cada etapa." },
  { title: "Foco em custo/benefício real", desc: "Comparação objetiva (sem promessas exageradas)." },
  { title: "Checklist e cronograma", desc: "Prazos, documentos e prioridades num plano claro." },
];

const receiveItems = [
  "Mapeamento de opções (cidade, perfil, custo)",
  "Lista de documentos + prazos",
  "Estratégia de candidatura e acompanhamento",
  "Suporte para dúvidas críticas (sem enrolação)",
];

const steps = [
  {
    title: "1) Diagnóstico",
    desc: "Entendemos seu perfil, objetivos e restrições (prazo, orçamento, idioma, área).",
  },
  {
    title: "2) Plano de ação",
    desc: "Você recebe um roteiro claro com opções de universidades e requisitos por etapa.",
  },
  {
    title: "3) Documentos e prazos",
    desc: "Checklist do que preparar, quando enviar e como reduzir risco de erro.",
  },
  {
    title: "4) Acompanhamento",
    desc: "Ajustes e suporte conforme surgem dúvidas e mudanças no processo.",
  },
];

const faqs = [
  {
    q: "Vocês garantem aprovação?",
    a: "Não. A proposta é clareza e estratégia com base em requisitos e prazos, reduzindo erros e aumentando sua preparação.",
  },
  {
    q: "Serve só para Medicina?",
    a: "Medicina é um foco, mas o método funciona para outras áreas (dependendo da universidade e do tipo de curso).",
  },
  {
    q: "Quanto tempo leva?",
    a: "Depende do seu ponto de partida. Em geral, o plano deixa o caminho claro já no início e o acompanhamento segue conforme o cronograma.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8F7F3] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F8F7F3]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3 no-underline">
            {/* ✅ Coloque o logo em: public/images/logo.png */}
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
<Link href="/sobre" className="hover:text-slate-900">
  Sobre
</Link>

            <a href="#como-funciona" className="hover:text-slate-900">
              Como funciona
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
            <a
              href={WHATSAPP_LINK}
              className="rounded-xl bg-emerald-950 px-4 py-2 text-white shadow-sm hover:bg-emerald-900"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile CTA */}
          <a
            href={WHATSAPP_LINK}
            className="md:hidden rounded-xl bg-emerald-950 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-emerald-900"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-10 pt-10 md:pb-16 md:pt-14">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* Left */}
            <div>
              <div className="inline-flex items-center rounded-full bg-emerald-900/10 px-3 py-1 text-sm font-semibold text-emerald-950">
                Para famílias brasileiras
              </div>

              <h1 className="mt-4 text-balance text-[36px] font-extrabold leading-[1.05] tracking-tight text-slate-950 md:text-[54px]">
                Estude na Itália com clareza, segurança e um plano completo — do sonho à matrícula.
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-[16.5px] leading-7 text-slate-700 md:text-[18px]">
                Ajudamos você a comparar opções, entender requisitos, organizar documentos e escolher a
                universidade certa com base em dados e realidade (sem promessas exageradas).
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/universidades"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-950 px-6 py-4 text-base font-extrabold text-white shadow-sm hover:bg-emerald-900 sm:w-auto"
                >
                  Ver universidades →
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-6 py-4 text-base font-extrabold text-slate-900 shadow-sm hover:bg-slate-50 sm:w-auto"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-white">
                      ✓
                    </span>
                    <div>
                      <p className="font-extrabold text-slate-900">{f.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile quick links */}
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-slate-700 md:hidden">
                <a href="#como-funciona" className="underline underline-offset-4">
                  Como funciona
                </a>
                <a href="#faq" className="underline underline-offset-4">
                  FAQ
                </a>
              </div>
            </div>

            {/* Right card */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.10)]">
                {/* ✅ Já existe: public/images/hero.jpg */}
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/hero.jpg"
                    alt="Campus universitário na Itália"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>

                <div className="p-6 md:p-7">
                  <div className="inline-flex items-center rounded-full bg-emerald-900/10 px-3 py-1 text-sm font-bold text-emerald-950">
                    O que você recebe
                  </div>

                  <h2 className="mt-3 text-xl font-extrabold text-slate-950 md:text-2xl">
                    Plano de Acesso às Universidades
                  </h2>

                  <p className="mt-2 text-[15.5px] leading-6 text-slate-700">
                    Uma rota clara para aplicar com tranquilidade — com foco em Medicina e outras áreas.
                  </p>

                  <ul className="mt-4 space-y-3">
                    {receiveItems.map((it) => (
                      <li key={it} className="flex gap-3 text-[15px] leading-6 text-slate-800">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-emerald-950" />
                        <span className="font-semibold">{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href="#como-funciona"
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50 sm:w-auto"
                    >
                      Ver como funciona ↓
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-950 px-5 py-3 text-sm font-extrabold text-white hover:bg-emerald-900 sm:w-auto"
                    >
                      Tirar dúvidas no WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              {/* subtle background */}
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-b from-emerald-900/10 to-transparent blur-2xl" />
            </div>
          </div>
        </section>

        {/* Why Italy (optional section header like your screenshot) */}
        <section className="mx-auto max-w-7xl px-5 pb-8 md:pb-12">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
              Por que tanta gente considera a Itália?
            </h2>
            <p className="mt-3 max-w-3xl text-[16px] leading-7 text-slate-700">
              Qualidade acadêmica, custos mais previsíveis (quando comparado a alternativas), e processos
              que podem ser mais simples quando você entende os requisitos — sem “achismos”.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  t: "Transparência de requisitos",
                  d: "Você evita surpresas entendendo regras, documentos e prazos desde o começo.",
                },
                {
                  t: "Custo/benefício",
                  d: "Planejamento reduz erros caros e decisões apressadas.",
                },
                {
                  t: "Plano realista",
                  d: "Foco em passos concretos: opções, checklist, cronograma e acompanhamento.",
                },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <p className="font-extrabold text-slate-950">{c.t}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="mx-auto max-w-7xl px-5 pb-10 pt-2 md:pb-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
                Como funciona
              </h2>
              <p className="mt-2 max-w-2xl text-[16px] leading-7 text-slate-700">
  Um método simples, com etapas claras — pensado para famílias que querem segurança e previsibilidade.{" "}
  A metodologia do Estudar Itália faz parte do ecossistema educacional da{" "}
  <a
    href="https://www.totalprepbrasil.com.br"
    target="_blank"
    rel="noopener noreferrer"
    className="font-extrabold text-emerald-950 hover:underline hover:underline-offset-4"
  >
    TotalPrep Brasil
  </a>
  , com foco em decisões acadêmicas internacionais com clareza e dados (sem promessas irreais).
</p>

            </div>

            <a
              href={WHATSAPP_LINK}
              className="hidden rounded-2xl bg-emerald-950 px-5 py-3 text-sm font-extrabold text-white hover:bg-emerald-900 md:inline-flex"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {steps.map((s) => (
              <div key={s.title} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
                <p className="text-base font-extrabold text-slate-950">{s.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <a
              href={WHATSAPP_LINK}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-950 px-5 py-4 text-base font-extrabold text-white hover:bg-emerald-900"
            >
              Tirar dúvidas no WhatsApp →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-7xl px-5 pb-14 md:pb-20">
          <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
                  <p className="font-extrabold text-slate-950">{f.q}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/universidades"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-950 px-6 py-4 text-base font-extrabold text-white hover:bg-emerald-900 sm:w-auto"
              >
                Ver universidades →
              </Link>
              <a
                href={WHATSAPP_LINK}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-6 py-4 text-base font-extrabold text-slate-900 hover:bg-slate-50 sm:w-auto"
              >
                Falar com a equipe
              </a>
            </div>
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
              © {new Date().getFullYear()} Estudar Itália
            </span>
<span className="text-sm font-semibold text-slate-600">
  {" • "}Um projeto do{" "}
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
            <Link href="/universidades" className="hover:text-slate-900">
              Universidades
            </Link>
            <a href="#como-funciona" className="hover:text-slate-900">
              Como funciona
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
            <a href={WHATSAPP_LINK} className="hover:text-slate-900">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
