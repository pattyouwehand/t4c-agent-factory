export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { Card } from '@/components/card'
import { prisma } from '@/lib/prisma'

export default async function ConceptsPage() {
  const concepts = await prisma.concept.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Concept library
        </p>
        <h1 className="mt-3 text-4xl font-bold">Concepts</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">
          AI-generated T for Conspiracy shirt concepts, ready for human review.
        </p>
      </div>

      <Card title="All concepts">
        <div className="grid gap-4 md:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.id}
              href={`/concepts/${concept.id}`}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition hover:border-zinc-600"
            >
              <p className="mb-2 font-semibold">{concept.slogan}</p>
              <p className="mb-4 text-sm text-zinc-500">{concept.topic}</p>

              <div className="flex items-center justify-between text-sm">
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-zinc-300">
                  {concept.status}
                </span>
                <span className="text-zinc-500">Score {concept.score}</span>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </section>
  )
}