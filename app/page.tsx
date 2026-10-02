import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Awareness } from '@/components/awareness'
import { ThemesSection } from '@/components/themes-section'
import { SustainableActions } from '@/components/sustainable-actions'
import { Curiosities } from '@/components/curiosities'
import { BrazilMap } from '@/components/brazil-map'
import { NewsSection } from '@/components/news-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Awareness />
        <ThemesSection />
        <SustainableActions />
        <Curiosities />
        <BrazilMap />
        <NewsSection />
      </main>
      <SiteFooter />
    </>
  )
}
