'use client'

import { useState } from 'react'
import {
  Droplet,
  Recycle,
  Lightbulb,
  ShoppingBag,
  Bike,
  Sprout,
  Utensils,
  Shirt,
  Check,
} from 'lucide-react'
import { sustainableActions } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const iconMap = {
  droplet: Droplet,
  recycle: Recycle,
  lightbulb: Lightbulb,
  'shopping-bag': ShoppingBag,
  bike: Bike,
  sprout: Sprout,
  utensils: Utensils,
  shirt: Shirt,
} as const

export function SustainableActions() {
  const [done, setDone] = useState<Record<string, boolean>>({})
  const total = sustainableActions.length
  const completed = Object.values(done).filter(Boolean).length
  const progress = Math.round((completed / total) * 100)

  return (
    <section id="atitudes" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
              No dia a dia
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
              Atitudes sustentáveis que cabem na sua rotina
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Marque as atitudes que você já pratica e acompanhe o seu compromisso com o
              planeta. Toda mudança começa por pequenos hábitos.
            </p>
          </div>

          <div className="w-full rounded-2xl border border-border bg-card p-5 shadow-sm lg:w-64">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-muted-foreground">Seu progresso</span>
              <span className="font-heading text-2xl font-bold text-primary">{progress}%</span>
            </div>
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {completed} de {total} atitudes marcadas
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sustainableActions.map((action) => {
            const Icon = iconMap[action.icon as keyof typeof iconMap] ?? Sprout
            const isDone = !!done[action.title]
            return (
              <button
                key={action.title}
                type="button"
                onClick={() => setDone((d) => ({ ...d, [action.title]: !d[action.title] }))}
                aria-pressed={isDone}
                className={cn(
                  'group relative flex flex-col rounded-2xl border p-5 text-left transition-all hover:-translate-y-1 hover:shadow-md',
                  isDone ? 'border-primary bg-primary/5' : 'border-border bg-card',
                )}
              >
                <span
                  className={cn(
                    'absolute right-4 top-4 flex size-6 items-center justify-center rounded-full border-2 transition-colors',
                    isDone ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-transparent',
                  )}
                >
                  <Check className="size-3.5" />
                </span>
                <span
                  className={cn(
                    'flex size-12 items-center justify-center rounded-xl transition-colors',
                    isDone ? 'bg-primary text-primary-foreground' : 'bg-muted text-primary',
                  )}
                >
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-foreground">{action.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{action.description}</p>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
