// app/cases/[slug]/page.tsx
import Footer from "@/components/Footer";
import PowerBiEmbedPlaceholder from "@/components/PowerBiEmbedPlaceholder";

type Props = { params: { slug: string } };

export default function CasePage({ params }: Props) {
  const slug = params.slug;
  // For now we map slug to a title. Replace with real content later or fetch from JSON/MDX.
  const title = slug.replace(/-/g, " ");

  return (
    <main className="min-h-screen bg-[#0B0F17] text-[#E6EEF7] pt-28">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold capitalize">{title}</h1>
        <p className="mt-2 text-[#98A0AA]">Contexto, solução e resultados.</p>

        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <article className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
              <h2 className="font-semibold text-xl">Contexto</h2>
              <p className="mt-2 text-[#98A0AA]">[Descrição do case]</p>
            </article>

            <article className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
              <h2 className="font-semibold text-xl">Solução & Artefatos</h2>
              <PowerBiEmbedPlaceholder caseTitle={title} />
            </article>

            <article className="bg-[rgba(255,255,255,0.02)] p-6 rounded-lg">
              <h2 className="font-semibold text-xl">Resultados / Ganhos</h2>
              <ul className="mt-3 list-disc ml-5 text-[#E6EEF7]">
                <li>[Resultado 1]</li>
                <li>[Resultado 2]</li>
              </ul>
            </article>
          </div>

          <aside className="space-y-6">
            <div className="bg-[rgba(255,255,255,0.02)] p-4 rounded-lg text-sm">
              <h3 className="font-medium">Stack</h3>
              <div className="mt-2 text-[#98A0AA]">Power BI · DAX · SQL · Python · Azure</div>
            </div>
          </aside>
        </section>
      </div>

      <Footer />
    </main>
  );
}
