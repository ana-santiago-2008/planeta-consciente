'use client'

import { useEffect, useRef, useState } from 'react'
import { Droplets, TreePine, Recycle, ThermometerSun } from 'lucide-react'

type Stat = {
  icon: typeof Droplets
  value: number
  suffix: string
  label: string
  color: string
}

const stats: Stat[] = [
  { icon: Droplets, value: 2.5, suffix: '%', label: 'da água do planeta é doce e disponível', color: 'text-sky-600' },
  { icon: TreePine, value: 31, suffix: '%', label: 'da superfície terrestre é coberta por florestas', color: 'text-primary' },
  { icon: Recycle, value: 400, suffix: ' anos', label: 'é o tempo que o plástico leva para se decompor', color: 'text-teal-600' },
  { icon: ThermometerSun, value: 1.1, suffix: ' °C', label: 'de aquecimento médio global já registrado', color: 'text-amber-600' },
]

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!active) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, value])
  const formatted = Number.isInteger(value) ? Math.round(display).toString() : display.toFixed(1)
  return (
    <span>
      {formatted}
      {suffix}
    </span>
  )
}

export function Awareness() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="conscientizacao" className="relative bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-primary">
            Por que se importar?
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            O planeta é a nossa única casa
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Cada gota de água, cada árvore e cada resíduo importam. Entender os números por
            trás do meio ambiente é o primeiro passo para agir com consciência e transformar
            hábitos do dia a dia.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-muted">
                <stat.icon className={`size-6 ${stat.color}`} />
              </div>
              <p className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-foreground">
                <Counter value={stat.value} suffix={stat.suffix} active={inView} />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
