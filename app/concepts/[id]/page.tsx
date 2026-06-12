import { Card } from '@/components/card'
import { notFound } from 'next/navigation'
import { ApprovalActions, ApprovalStatus } from '@/components/approval-actions'
import { prisma } from '@/lib/prisma'

export default async function ConceptDetailPage({ params }: {params: Promise<{ id: string }> }) {
  const { id } = await params
  const concept = await prisma.concept.findUnique({ where: { id } })

  if (!concept) {
    notFound()
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Concept detail
        </p>
        <h1 className="mt-3 text-4xl font-bold">{concept.slogan}</h1>
        <p className="mt-3 text-zinc-400">{concept.topic}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card title="Mock shirt preview">
          <div className="flex aspect-square items-center justify-center rounded-2xl bg-zinc-950 p-8 text-center">
            <div className="rounded-3xl border border-dashed border-zinc-700 p-8">
              <p className="text-2xl font-black uppercase tracking-tight">
                {concept.slogan}
              </p>
              <p className="mt-4 text-xs text-zinc-500">Mock preview placeholder</p>
            </div>
          </div>
        </Card>

        <Card title="Agent output">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-sm text-zinc-500">Description</p>
              <p>{concept.description}</p>
            </div>
            <div>
              <p className="mb-2 text-sm text-zinc-500">Image prompt</p>
              <pre className="whitespace-pre-wrap rounded-xl bg-zinc-950 p-4 text-sm text-zinc-300">
                {concept.prompt}
              </pre>
            </div>
            <div className="flex gap-3">
              <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                Score: {concept.score}
              </span>
            </div>
            <ApprovalActions initialStatus={concept.status as ApprovalStatus} />
          </div>
        </Card>
      </div>
    </section>
  )
}
