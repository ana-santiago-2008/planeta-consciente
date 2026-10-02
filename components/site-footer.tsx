import { Leaf } from 'lucide-react'

const columns = [
  {
    title: 'Temas',
    links: ['Água', 'Florestas', 'Reciclagem', 'Mudanças Climáticas', 'Sustentabilidade'],
  },
  {
    title: 'Explorar',
    links: ['Atitudes sustentáveis', 'Curiosidades', 'Mapa do Brasil', 'Notícias'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 font-heading text-lg font-bold">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="size-5" />
              </span>
              Planeta<span className="text-primary">Consciente</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty">
              Um espaço de educação ambiental para informar e inspirar atitudes conscientes.
              Porque cuidar do planeta é responsabilidade de todos nós.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <span className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Planeta Consciente · Educação ambiental</p>
          <p>Feito com cuidado pelo nosso planeta 🌍</p>
        </div>
      </div>
    </footer>
  )
}
