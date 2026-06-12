import Link from 'next/link'

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/topics', label: 'Topics' },
  { href: '/concepts', label: 'Concepts' }
]

export function Nav() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          T for Conspiracy
        </Link>
        <nav className="flex gap-4 text-sm text-zinc-400">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
