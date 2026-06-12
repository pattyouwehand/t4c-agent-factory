import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          404
        </p>

        <h1 className="mb-4 text-5xl font-bold">
          Conspiracy not found
        </h1>

        <p className="mb-8 text-zinc-400">
          Our agents searched every classified document,
          but this conspiracy appears to be missing.
        </p>

        <Link
          href="/"
          className="rounded-full border border-zinc-700 px-5 py-3 transition hover:bg-zinc-900"
        >
          Return to the dashboard
        </Link>
      </div>
    </main>
  )
}