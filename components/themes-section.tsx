'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Droplets, TreePine, Recycle, ThermometerSun, Leaf } from 'lucide-react'
import { topics } from '@/lib/site-data'
import { ThemeChart, ChartLegend } from '@/components/theme-chart'
import { cn } from '@/lib/utils'

const icons: Record<string, typeof Droplets> = {
  agua: Droplets,
  florestas: TreePine,
  reciclagem: Recycle,
  clima: ThermometerSun,
  sustentabilidade: Leaf,
}

export function ThemesSection() {
  const [active, setActive] = useState(topics[0].id)
  const topic = topics.find((t) => t.id === active) ?? topics[0]

  return (
    <section id="temas" className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Temas educativos
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Explore os pilares do meio ambiente
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Escolha um tema e descubra dados, curiosidades e o que cada um representa
            para o equilíbrio do planeta.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {topics.map((t) => {
            const Icon = icons[t.id] ?? Leaf
            const isActive = t.id === active
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all',
                  isActive
                    ? 'border-primary bg-primary text-primary-foreground shadow-sm'
                    : 'border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary',
                )}
                aria-pressed={isActive}
              >
                <Icon className="size-4" />
                {t.title}
              </button>
            )
          })}
        </div>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <div className="relative min-h-72 overflow-hidden rounded-3xl shadow-sm">
            <Image
              src={topic.image || '/placeholder.svg'}
              alt={`Ilustração sobre ${topic.title}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {topic.eyebrow}
              </span>
              <h3 className="mt-2 font-heading text-3xl font-bold text-white">{topic.title}</h3>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-base leading-relaxed text-foreground/85 text-pretty">{topic.intro}</p>
            <ul className="mt-5 space-y-3">
              {topic.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-7">
              <p className="mb-1 font-heading text-sm font-semibold text-foreground">{topic.chartTitle}</p>
              <p className="mb-3 text-xs text-muted-foreground">Unidade: {topic.chartUnit}</p>
              <ThemeChart topic={topic} />
              {topic.chartType !== 'line' && <ChartLegend topic={topic} />}
              <p className="mt-3 text-center text-[11px] italic text-muted-foreground">{topic.chartNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
