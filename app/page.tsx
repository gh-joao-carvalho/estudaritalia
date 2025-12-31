"use client";

export default function Page() {
  const WHATSAPP_LINK =
    "https://wa.me/5511967529160?text=Olá%2C%20vim%20do%20site%20Estudar%20Itália%20e%20gostaria%20de%20entender%20os%20custos%20reais%2C%20bolsas%20disponíveis%20e%20o%20passo%20a%20passo%20para%20estudar%20na%20Itália.";

  const trackWhatsAppClick = (location: string) => {
    if (typeof window !== "undefined") {
      console.log("WhatsApp click:", location);

      // Google Analytics (se existir gtag)
      if ((window as any).gtag) {
        (window as any).gtag("event", "whatsapp_click", {
          event_category: "engagement",
          event_label: location,
        });
      }

      // Meta Pixel (se existir fbq)
      if ((window as any).fbq) {
        (window as any).fbq("trackCustom", "WhatsAppClick", { location });
      }
    }
  };

  return (
    <main style={{ background: "#F5F6F3", minHeight: "100vh" }}>
      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px 28px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        {/* TEXTO */}
        <div>
          <h1 style={{ fontSize: "48px", lineHeight: "1.2", marginBottom: "24px", color: "#121815" }}>
            Estudar na Itália pode custar menos do que no Brasil.
          </h1>

          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#5F6F66", marginBottom: "28px" }}>
            Guia completo para famílias brasileiras: universidades públicas, mensalidades por faixa de renda (ISEE),
            bolsas, custo de vida e o passo a passo para aplicar com segurança.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#avaliar-perfil"
              style={{
                display: "inline-block",
                background: "#7C9B8A",
                color: "white",
                padding: "14px 28px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              Avaliar perfil
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("hero")}
              style={{
                display: "inline-block",
                background: "white",
                color: "#7C9B8A",
                padding: "14px 28px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 800,
                border: "2px solid #7C9B8A",
              }}
            >
              Falar no WhatsApp
            </a>
          </div>

          <p style={{ marginTop: "14px", fontSize: "14px", color: "#5F6F66" }}>
            Transparência e dados reais — sem promessas irreais.
          </p>
        </div>

        {/* IMAGEM */}
        <div
          style={{
            background: "#E6E8E2",
            borderRadius: "24px",
            height: "420px",
            overflow: "hidden",
          }}
        >
          <img
            src="/images/hero.jpg"
            alt="Estudantes internacionais em campus universitário na Itália"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* BLOCO 3 — DESCUBRA AS UNIVERSIDADES */}
      <section
        id="descubra-universidades"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 24px 70px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: 28, margin: "0 0 18px", color: "#2C3A33" }}>
          Descubra as Universidades
        </h2>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "white",
              border: "1px solid #E2E4DD",
              borderRadius: 14,
              padding: "10px 12px",
              minWidth: 320,
            }}
          >
            <span aria-hidden="true">🔎</span>
            <input
              type="text"
              placeholder="Buscar por cidade ou curso"
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: 14,
                color: "#2C3A33",
                background: "transparent",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: 8,
              background: "#F0F1EC",
              border: "1px solid #E2E4DD",
              borderRadius: 14,
              padding: 6,
            }}
          >
            {["Públicas", "Privadas", "Bolsas disponíveis"].map((t, i) => (
              <button
                key={t}
                type="button"
                style={{
                  border: "none",
                  cursor: "pointer",
                  padding: "10px 12px",
                  borderRadius: 12,
                  fontWeight: 800,
                  fontSize: 13,
                  background: i === 0 ? "#274E43" : "transparent",
                  color: i === 0 ? "white" : "#2C3A33",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 14,
            marginTop: 10,
          }}
        >
          {[
            { title: "Medicina", icon: "🩺" },
            { title: "Engenharia", icon: "⚙️" },
            { title: "Arquitetura", icon: "🏛️" },
            { title: "Economia & Negócios", icon: "📈" },
            { title: "Design", icon: "🎨" },
          ].map((c) => (
            <a
              key={c.title}
              href="#avaliar-perfil"
              style={{
                textDecoration: "none",
                background: "white",
                border: "1px solid #E2E4DD",
                borderRadius: 18,
                padding: "18px 14px",
                display: "grid",
                placeItems: "center",
                gap: 10,
                boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 18,
                  background: "#E6E8E2",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 24,
                }}
                aria-hidden="true"
              >
                {c.icon}
              </div>
              <div style={{ fontWeight: 900, color: "#2C3A33", textAlign: "center" }}>{c.title}</div>
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
          }}
        >
          {["Università A", "Università B", "Università C", "Università D"].map((u) => (
            <div
              key={u}
              style={{
                background: "white",
                border: "1px solid #E2E4DD",
                borderRadius: 16,
                padding: "12px 14px",
                color: "#5F6F66",
                fontWeight: 800,
                fontSize: 13,
                textAlign: "center",
              }}
            >
              {u}
            </div>
          ))}
        </div>

        <div style={{ display: "grid", placeItems: "center", marginTop: 18 }}>
          <a
            href="#todas-universidades"
            style={{
              display: "inline-flex",
              gap: 10,
              alignItems: "center",
              background: "#274E43",
              color: "white",
              padding: "14px 22px",
              borderRadius: 14,
              textDecoration: "none",
              fontWeight: 900,
            }}
          >
            Ver todas as universidades <span aria-hidden="true">›</span>
          </a>
        </div>
      </section>

      {/* BLOCO 4 — PASSO A PASSO */}
      <section
        id="passo-a-passo"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "28px", margin: "0 0 18px", color: "#2C3A33" }}>
          Passo a passo para estudar na Itália
        </h2>

        <div
          style={{
            background: "#FFFFFF",
            border: "1px solid #E2E4DD",
            borderRadius: "20px",
            padding: "18px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "14px",
              alignItems: "stretch",
            }}
          >
            {[
              { title: "Escolha seu curso", desc: "Objetivo, cidade e universidades compatíveis.", icon: "🔎" },
              { title: "Vestibular italiano", desc: "Calendário e plano de estudo (IMAT/entradas).", icon: "📝" },
              { title: "Bolsas & documentos", desc: "ISEE/DSU, traduções, CIMEA e checklist.", icon: "📄" },
              { title: "Visto & matrícula", desc: "Pré-inscrição, consulado e chegada com segurança.", icon: "🛂" },
            ].map((s, idx) => (
              <div
                key={s.title}
                style={{
                  position: "relative",
                  background: "#F8F9F6",
                  border: "1px solid #EEF0EA",
                  borderRadius: "18px",
                  padding: "16px 14px",
                  minHeight: "140px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "16px",
                    background: "#E6E8E2",
                    display: "grid",
                    placeItems: "center",
                    fontSize: "20px",
                    marginBottom: "10px",
                  }}
                  aria-hidden="true"
                >
                  {s.icon}
                </div>

                <div style={{ fontWeight: 900, color: "#2C3A33", marginBottom: "6px" }}>
                  {idx + 1}. {s.title}
                </div>
                <div style={{ color: "#5F6F66", fontSize: "14px", lineHeight: "1.5" }}>{s.desc}</div>

                {idx !== 3 && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      right: "-10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "20px",
                      height: "20px",
                      borderRadius: "999px",
                      background: "#274E43",
                      display: "grid",
                      placeItems: "center",
                      color: "white",
                      fontSize: "12px",
                      boxShadow: "0 6px 18px rgba(0,0,0,0.10)",
                    }}
                  >
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>

          <p style={{ margin: "14px 0 0", color: "#5F6F66", fontSize: "13px", textAlign: "center" }}>
            Você não precisa “adivinhar” o processo — a gente transforma tudo em checklist e datas.
          </p>
        </div>

        {/* CTA DO BLOCO 4 (continuação do ponto onde seu código cortou) */}
        <div
          style={{
            marginTop: "22px",
            background: "#274E43",
            color: "white",
            borderRadius: "22px",
            padding: "22px 18px",
            display: "grid",
            gap: "14px",
            justifyItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "18px", fontWeight: 900 }}>
            Seu filho pode estudar na Itália pagando menos. Quer descobrir como?
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href="#avaliar-perfil"
              style={{
                display: "inline-block",
                background: "white",
                color: "#274E43",
                padding: "14px 22px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              Avaliar perfil agora
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("cta_passo_a_passo")}
              style={{
                display: "inline-block",
                background: "transparent",
                color: "white",
                padding: "14px 22px",
                borderRadius: "14px",
                textDecoration: "none",
                fontWeight: 900,
                border: "2px solid rgba(255,255,255,0.65)",
              }}
            >
              Falar no WhatsApp
            </a>
          </div>

          <div style={{ fontSize: 13, opacity: 0.9 }}>
            Resposta humana, com orientação prática (custos, bolsas e checklist).
          </div>
        </div>
      </section>

      {/* BLOCO 5 — AVALIAR PERFIL */}
      <section
        id="avaliar-perfil"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 90px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "28px", margin: "0 0 18px", color: "#2C3A33" }}>
          Avaliar perfil em 2 minutos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            alignItems: "stretch",
          }}
        >
          {/* Card esquerda */}
          <div
            style={{
              background: "white",
              border: "1px solid #E2E4DD",
              borderRadius: 20,
              padding: 18,
              boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontWeight: 900, fontSize: 18, color: "#2C3A33", marginBottom: 10 }}>
              O que você vai receber
            </div>

            <ul style={{ margin: 0, paddingLeft: 18, color: "#5F6F66", lineHeight: 1.7, fontSize: 14 }}>
              <li>Estimativa realista de custos (mensalidade + vida).</li>
              <li>Mapa de bolsas (DSU/ISEE) e documentos necessários.</li>
              <li>Checklist com prazos do seu caso (curso/cidade).</li>
              <li>Próximos passos práticos — sem enrolação.</li>
            </ul>

            <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("avaliar_perfil_card")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "#7C9B8A",
                  color: "white",
                  padding: "12px 16px",
                  borderRadius: 14,
                  textDecoration: "none",
                  fontWeight: 900,
                }}
              >
                Falar no WhatsApp <span aria-hidden="true">→</span>
              </a>

              <a
                href="#faq"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "white",
                  color: "#274E43",
                  padding: "12px 16px",
                  borderRadius: 14,
                  textDecoration: "none",
                  fontWeight: 900,
                  border: "2px solid #274E43",
                }}
              >
                Ver dúvidas frequentes
              </a>
            </div>
          </div>

          {/* Card direita (form fake / placeholder) */}
          <div
            style={{
              background: "#F8F9F6",
              border: "1px solid #E2E4DD",
              borderRadius: 20,
              padding: 18,
            }}
          >
            <div style={{ fontWeight: 900, fontSize: 18, color: "#2C3A33", marginBottom: 10 }}>
              Simulação rápida (placeholder)
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {[
                { label: "Curso de interesse", placeholder: "Ex.: Medicina, Engenharia, Arquitetura..." },
                { label: "Cidade (preferência)", placeholder: "Ex.: Milão, Roma, Bolonha..." },
                { label: "Orçamento mensal (estimado)", placeholder: "Ex.: €700 / €900 / €1.200" },
              ].map((f) => (
                <label key={f.label} style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#2C3A33" }}>{f.label}</span>
                  <input
                    placeholder={f.placeholder}
                    style={{
                      border: "1px solid #E2E4DD",
                      borderRadius: 14,
                      padding: "12px 12px",
                      outline: "none",
                      background: "white",
                      fontSize: 14,
                      color: "#2C3A33",
                    }}
                  />
                </label>
              ))}

              <button
                type="button"
                onClick={() => trackWhatsAppClick("avaliar_perfil_btn_simular")}
                style={{
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 14,
                  padding: "12px 14px",
                  fontWeight: 900,
                  background: "#274E43",
                  color: "white",
                  marginTop: 4,
                }}
              >
                Quero uma avaliação no WhatsApp
              </button>

              <p style={{ margin: 0, fontSize: 12, color: "#5F6F66" }}>
                *Este bloco é um placeholder. Se você quiser, eu transformo isso num formulário real (com envio para
                WhatsApp / email / CRM).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 100px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "28px", margin: "0 0 18px", color: "#2C3A33" }}>
          Dúvidas frequentes
        </h2>

        <div
          style={{
            display: "grid",
            gap: 12,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {[
            {
              q: "Quanto custa estudar na Itália em universidade pública?",
              a: "Depende da faixa de renda (ISEE) e da região. Em muitos casos, a anuidade pode cair bastante com bolsas/isenções.",
            },
            {
              q: "Meu filho precisa falar italiano fluente?",
              a: "Depende do curso. Há cursos em italiano e alguns em inglês. Mesmo em cursos em inglês, italiano ajuda muito na vida prática.",
            },
            {
              q: "Bolsas DSU/ISEE funcionam para brasileiros?",
              a: "Em geral, sim — mas cada região tem regras e documentação específica. O ponto crítico é organizar os documentos e prazos.",
            },
            {
              q: "Qual é o maior erro no processo?",
              a: "Perder prazo e/ou iniciar documentação tarde. A gente foca em checklist e calendário para evitar retrabalho e atrasos.",
            },
          ].map((item) => (
            <details
              key={item.q}
              style={{
                background: "white",
                border: "1px solid #E2E4DD",
                borderRadius: 16,
                padding: "14px 14px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.03)",
              }}
            >
              <summary style={{ cursor: "pointer", fontWeight: 900, color: "#2C3A33" }}>{item.q}</summary>
              <p style={{ margin: "10px 0 0", color: "#5F6F66", lineHeight: 1.6, fontSize: 14 }}>{item.a}</p>
            </details>
          ))}

          <div style={{ display: "grid", placeItems: "center", marginTop: 12 }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("faq_cta")}
              style={{
                display: "inline-flex",
                gap: 10,
                alignItems: "center",
                background: "#7C9B8A",
                color: "white",
                padding: "14px 22px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              Tirar dúvida no WhatsApp <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #E2E4DD",
          background: "#F0F1EC",
          padding: "26px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 14,
            alignItems: "center",
          }}
        >
          <div style={{ color: "#5F6F66", fontSize: 13, lineHeight: 1.5 }}>
            <div style={{ fontWeight: 900, color: "#2C3A33" }}>Estudar Itália</div>
            <div>Conteúdo educativo + orientação prática para famílias brasileiras.</div>
            <div style={{ marginTop: 6 }}>© {new Date().getFullYear()} — Todos os direitos reservados.</div>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a
              href="#passo-a-passo"
              style={{
                textDecoration: "none",
                color: "#274E43",
                fontWeight: 900,
                fontSize: 13,
              }}
            >
              Passo a passo
            </a>
            <a
              href="#avaliar-perfil"
              style={{
                textDecoration: "none",
                color: "#274E43",
                fontWeight: 900,
                fontSize: 13,
              }}
            >
              Avaliar perfil
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("footer")}
              style={{
                textDecoration: "none",
                color: "#274E43",
                fontWeight: 900,
                fontSize: 13,
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* BOTÃO FIXO WHATSAPP */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating_button")}
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          width: 56,
          height: 56,
          borderRadius: 999,
          background: "#25D366",
          display: "grid",
          placeItems: "center",
          textDecoration: "none",
          boxShadow: "0 10px 22px rgba(0,0,0,0.18)",
          zIndex: 9999,
        }}
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        <span style={{ fontSize: 22, lineHeight: 1 }} aria-hidden="true">
          💬
        </span>
      </a>
    </main>
  );
}

