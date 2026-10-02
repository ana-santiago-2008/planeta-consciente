'use client'

import { useState } from 'react'
import { Plus, Minus, Lightbulb } from 'lucide-react'
import { curiosities } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Curiosities() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="curiosidades" className="bg-gradient-to-b from-secondary/40 to-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Lightbulb className="size-4" />
            Você sabia?
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Curiosidades ambientais
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Fatos surpreendentes sobre a natureza que mostram como tudo está conectado.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {curiosities.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.question}
                className={cn(
                  'overflow-hidden rounded-2xl border bg-card shadow-sm transition-colors',
                  isOpen ? 'border-primary/50' : 'border-border',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="font-heading text-base font-semibold text-foreground sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      'flex size-8 shrink-0 items-center justify-center rounded-full transition-colors',
                      isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted text-primary',
                    )}
                  >
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
