import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'T for Conspiracy Factory',
  description: 'AI agent dashboard for satirical conspiracy merch concepts.'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
