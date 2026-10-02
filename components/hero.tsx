import Image from 'next/image'
import { assetPath } from '@/lib/asset-path'
import { ArrowDown, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src={assetPath('/images/hero-planeta.png')}
        alt="Floresta tropical verde encontrando um rio azul limpo ao amanhecer"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-900/45 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <Sparkles className="size-4" />
            Educação ambiental para todos
          </span>

          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl">
            Cuidar do planeta começa com uma atitude consciente
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 text-pretty">
            Conheça a água, as florestas, a reciclagem, as mudanças climáticas e a
            sustentabilidade. Pequenas escolhas, quando somadas, transformam o futuro
            do nosso mundo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#temas"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-lg shadow-emerald-950/30 transition-transform hover:scale-[1.03]"
            >
              Começar a aprender
            </a>
            <a
              href="#mapa"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              Explorar o mapa do Brasil
            </a>
          </div>
        </div>
      </div>

      <a
        href="#conscientizacao"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 transition-colors hover:text-white"
      >
        <ArrowDown className="size-6 animate-bounce" />
      </a>
    </section>
  )
}
