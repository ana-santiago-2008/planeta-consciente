import { ArrowUpRight, Newspaper } from 'lucide-react'
import { news } from '@/lib/site-data'

export function NewsSection() {
  const [featured, ...rest] = news

  return (
    <section id="noticias" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              <Newspaper className="size-4" />
              Fique por dentro
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Notícias e movimentos ambientais
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Um panorama de temas que estão moldando o debate sobre o futuro do planeta.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* Destaque */}
          <article className="group flex flex-col justify-between rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-secondary/30 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {featured.category}
                </span>
                <time className="text-xs font-medium text-muted-foreground">{featured.date}</time>
              </div>
              <h3 className="mt-4 font-heading text-2xl font-bold leading-snug text-foreground text-balance sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
                {featured.summary}
              </p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Ler resumo
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </article>

          {/* Lista */}
          <div className="grid gap-5 sm:grid-cols-2">
            {rest.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-foreground text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <time className="text-xs font-medium text-muted-foreground">{item.date}</time>
                  <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
