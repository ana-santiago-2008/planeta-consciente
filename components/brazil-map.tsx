'use client'

import { useMemo, useState } from 'react'
import { Trees, Droplets, ShieldCheck, MapPin } from 'lucide-react'
import geo from '@/lib/brazil-geo.json'
import { biomes, stateBiome, stateNames, type BiomeKey } from '@/lib/brazil-data'
import { cn } from '@/lib/utils'

export function BrazilMap() {
  const [selectedState, setSelectedState] = useState('AM')
  const [hovered, setHovered] = useState<string | null>(null)
  const [activeBiome, setActiveBiome] = useState<BiomeKey | null>(null)

  const selectedBiome = biomes[stateBiome[selectedState]]

  const details = useMemo(
    () => [
      { icon: Trees, label: 'Desmatamento', text: selectedBiome.desmatamento, color: 'text-amber-600 bg-amber-50' },
      { icon: Droplets, label: 'Recursos hídricos', text: selectedBiome.recursosHidricos, color: 'text-sky-600 bg-sky-50' },
      { icon: ShieldCheck, label: 'Áreas protegidas', text: selectedBiome.areasProtegidas, color: 'text-emerald-600 bg-emerald-50' },
    ],
    [selectedBiome],
  )

  return (
    <section id="mapa" className="bg-muted/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Mapa interativo
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Os biomas do Brasil
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Passe o mouse e clique nos estados para conhecer os biomas predominantes,
            o desmatamento, os recursos hídricos e as áreas protegidas de cada região.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Mapa */}
          <div className="rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-6">
            <svg
              viewBox={`0 0 ${geo.width} ${geo.height}`}
              className="h-auto w-full"
              role="img"
              aria-label="Mapa do Brasil dividido por estados, colorido conforme o bioma predominante"
            >
              {geo.states.map((s) => {
                const biomeKey = stateBiome[s.sigla]
                const biome = biomes[biomeKey]
                const isSelected = s.sigla === selectedState
                const isHovered = s.sigla === hovered
                const dimmed = activeBiome && biomeKey !== activeBiome
                return (
                  <path
                    key={s.sigla}
                    d={s.d}
                    fill={biome.color}
                    stroke="var(--card)"
                    strokeWidth={isSelected ? 2.5 : 1}
                    className={cn(
                      'cursor-pointer transition-all duration-150 focus:outline-none',
                      dimmed ? 'opacity-25' : isHovered || isSelected ? 'opacity-100' : 'opacity-85',
                    )}
                    style={{
                      filter: isSelected ? 'brightness(1.12)' : undefined,
                      transformOrigin: 'center',
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`${stateNames[s.sigla]} — bioma ${biome.name}`}
                    onMouseEnter={() => setHovered(s.sigla)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setSelectedState(s.sigla)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelectedState(s.sigla)
                      }
                    }}
                  />
                )
              })}
            </svg>

            {/* Legenda de biomas */}
            <div className="mt-4 flex flex-wrap gap-2">
              {Object.values(biomes).map((b) => (
                <button
                  key={b.key}
                  type="button"
                  onMouseEnter={() => setActiveBiome(b.key)}
                  onMouseLeave={() => setActiveBiome(null)}
                  onClick={() => setActiveBiome((cur) => (cur === b.key ? null : b.key))}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors',
                    activeBiome === b.key
                      ? 'border-foreground/30 bg-foreground/5'
                      : 'border-border bg-background hover:bg-muted',
                  )}
                >
                  <span className="size-3 rounded-full" style={{ backgroundColor: b.color }} />
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Painel de detalhes */}
          <div className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <MapPin className="size-4 text-primary" />
              {stateNames[selectedState]}
            </div>

            <div className="mt-2 flex items-center gap-3">
              <span className="size-4 rounded-full" style={{ backgroundColor: selectedBiome.color }} />
              <h3 className="font-heading text-2xl font-bold text-foreground">{selectedBiome.name}</h3>
            </div>
            <p className="mt-1 text-sm font-medium text-primary">{selectedBiome.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              {selectedBiome.description}
            </p>

            {/* Vegetação remanescente */}
            <div className="mt-5 rounded-2xl bg-muted/60 p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">Vegetação nativa remanescente</span>
                <span className="font-heading font-bold text-foreground">
                  {selectedBiome.vegetacaoRemanescente}%
                </span>
              </div>
              <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-background">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${selectedBiome.vegetacaoRemanescente}%`,
                    backgroundColor: selectedBiome.color,
                  }}
                />
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {details.map((d) => (
                <div key={d.label} className="flex gap-3 rounded-xl border border-border p-3.5">
                  <span className={cn('flex size-9 shrink-0 items-center justify-center rounded-lg', d.color)}>
                    <d.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{d.label}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
