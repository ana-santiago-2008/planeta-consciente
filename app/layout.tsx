import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { assetPath } from '@/lib/asset-path'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Planeta Consciente — Educação Ambiental',
  description:
    'Aprenda sobre água, florestas, reciclagem, mudanças climáticas e sustentabilidade. Explore um mapa interativo do Brasil e descubra atitudes para cuidar do planeta.',
  generator: 'v0.app',
  keywords: [
    'meio ambiente',
    'sustentabilidade',
    'educação ambiental',
    'reciclagem',
    'mudanças climáticas',
    'biomas do Brasil',
  ],
  icons: {
    icon: [
      { url: assetPath('/icon-light-32x32.png'), media: '(prefers-color-scheme: light)' },
      { url: assetPath('/icon-dark-32x32.png'), media: '(prefers-color-scheme: dark)' },
      { url: assetPath('/icon.svg'), type: 'image/svg+xml' },
    ],
    apple: assetPath('/apple-icon.png'),
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f9d63',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
