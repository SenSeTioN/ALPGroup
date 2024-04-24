import { Footer, Header } from '@/widgets'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import '../shared/styles/globals.scss'

export const metadata: Metadata = {
  title: 'Diabetes calculator',
  description: 'Diabetes calculator',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body suppressHydrationWarning={true}>
        <MantineProvider>
          <Header />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
