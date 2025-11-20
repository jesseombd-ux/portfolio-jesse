// app/page.tsx
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseCard from "@/components/CaseCard";

const cases = [
  {
    slug: "nps-predicao",
    title: "Algoritmo de Predição de NPS",
    subtitle: "+11pp NPS (1º ano)",
    thumbnail: "/assets/images/cases/Algoritmo de predição de NPS.png"
  },
  {
    slug: "preco-predicao",
    title: "Algoritmo de Predição de Preços",
    subtitle: "-35pp reclamações por repasse",
    thumbnail: "/assets/images/cases/Algoritmo de predição de Preços.png"
  },
  {
    slug: "causas-raiz",
    title: "BI de Causas Raiz",
    subtitle: "3 processos de melhoria contínua",
    thumbnail: "/assets/images/cases/BI de Causas Raízes - Customer Success.png"
  },
  {
    slug: "pm-entregas",
    title: "BI de Entregas como PM",
    subtitle: "Stakeholder 6→9",
    thumbnail: "/assets/images/cases/BI de entregas como PM.png"
  },
  {
    slug: "pnl-insights",
    title: "BI Insights PNL - NPS",
    subtitle: "NPS 35→61% (Jul–Set/2025)",
    thumbnail: "/assets/images/cases/BI Insights de PNL - NPS e Menções públicas - Customer Experience.png"
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#E6EEF7]">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Jessé Oliveira — Transformando dados em decisões que geram impacto</h1>
            <p className="mt-4 text-lg text-[#98A0AA]">
              Especialista em CX, Produto e Inteligência Relacional. Entrego produtos analíticos e modelos preditivos que geram ganhos mensuráveis em NPS, precificação e reputação pública.
            </p>

            <div className="mt-6 flex gap-3">
              <Link href="/entregas" className="inline-block bg-[#00B2FF] text-black px-4 py-2 rounded-md font-medium">
                Ver entregas
              </Link>
              <a href="https://www.linkedin.com/in/jesse-oliveira-de-castro-88421536/" target="_blank" rel="noreferrer" className="inline-block border border-[rgba(255,255,255,0.06)] px-4 py-2 rounded-md">
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="p-6 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
            <div className="text-sm text-[#98A0AA]">Destaque</div>
            <div className="mt-3 text-3xl font-bold text-[#00D27A]">NPS +11pp</div>
            <div className="mt-2 text-[#98A0AA]">Algoritmo de Predição de NPS — resultado no primeiro ano</div>

            <div className="mt-6">
              <div className="text-xs text-[#98A0AA]">Contato</div>
              <div className="mt-1 text-sm">
                <a className="text-[#00B2FF]" href="mailto:Jesse_ombd@hotmail.com">Jesse_ombd@hotmail.com</a> · <a className="text-[#00B2FF]" href="tel:+5511969982743">+55 11 96998-2743</a>
              </div>
            </div>
          </aside>
        </section>

        {/* Cases */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Entregas de destaque</h2>
          <p className="text-[#98A0AA] mt-1">Seleção de cases com impacto mensurável.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map(c => <CaseCard key={c.slug} {...c} />)}
          </div>
        </section>

        {/* Storytelling preview */}
        <section className="mt-16 bg-[rgba(255,255,255,0.02)] p-6 rounded-xl border border-[rgba(255,255,255,0.03)]">
          <h3 className="text-xl font-semibold">Storytelling — Resumo</h3>
          <p className="mt-3 text-[#98A0AA]">
            Sou Jessé Oliveira — gestor e especialista em Customer Experience, Produto e Dados. Conduzi projetos de modelagem preditiva, transformação de VoC e dashboards executivos que geraram ganhos de NPS, redução de reclamações por preço e melhoria da experiência do cliente.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
