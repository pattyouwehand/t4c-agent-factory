import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/nav'

export const metadata: Metadata = {
  title: 'T for Conspiracy Factory',
  description: 'AI-powered workflow that turns conspiracy theories into satirical merchandise concepts.',
  openGraph: {
    title: 'T for Conspiracy Factory',
    description: 'An OpenClaw-powered AI agent workflow for research, slogan generation, concept creation and human approval.',
    type: 'website'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
