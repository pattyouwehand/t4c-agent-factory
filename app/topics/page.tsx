import { Card } from '@/components/card'
import { prisma } from '@/lib/prisma'

export default async function TopicsPage() {
  const concepts = await prisma.concept.findMany({
    orderBy: {
      score: 'desc'
    }
  })

  const topics = Array.from(
    new Map(
      concepts.map((concept) => [
        concept.topic,
        {
          id: concept.topic.toLowerCase().replaceAll(' ', '-'),
          title: concept.topic,
          trendScore: concept.score,
          tone: 'Generated concept topic',
          status: concept.status
        }
      ])
    ).values()
  )

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-6 text-4xl font-bold">Topics</h1>

      <Card title="Concept topics">
        <div className="grid gap-4 md:grid-cols-3">
          {topics.map((topic) => (
            <article
              key={topic.id}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <p className="mb-2 text-xl font-semibold">{topic.title}</p>
              <p className="mb-4 text-sm text-zinc-400">{topic.tone}</p>

              <div className="flex items-center justify-between">
                <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs">
                  {topic.status}
                </span>
                <span className="font-bold">{topic.trendScore}</span>
              </div>
            </article>
          ))}
        </div>
      </Card>
    </section>
  )
}