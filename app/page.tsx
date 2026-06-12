import { Card } from '@/components/card'
import { Nav } from '@/components/nav'
import { events, topics } from '@/lib/data'
import { Bot, CheckCircle2, Clock3, Shirt } from 'lucide-react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

export default async function Home() {
  const concepts = await prisma.concept.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return (
    <main>
      <Nav />
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Agent Factory
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Turning conspiracy theories into wearable satire.
          </h1>
          <p className="mt-5 max-w-2xl text-zinc-400">
            AI agents research conspiracy theories,
            generate slogans, create shirt concepts,
            and prepare production-ready design prompts.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["OpenClaw", "GPT-5.5", "WhatsApp", "Tailscale"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-400"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <Metric icon={<Bot />} label="Agents" value="4" />
          <Metric icon={<Clock3 />} label="Queued ideas" value="12" />
          <Metric icon={<Shirt />} label="Concepts" value={String(concepts.length)} />
          <Metric icon={<CheckCircle2 />} label="Approved" value="1" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card title="Agent activity feed">
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium">{event.agent}</span>
                    <span className="text-zinc-500">{event.time}</span>
                  </div>
                  <p className="text-zinc-300">{event.action}</p>
                  <span className="mt-3 inline-block rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Trending topics">
            <div className="space-y-3">
              {topics.map((topic) => (
                <div key={topic.id} className="rounded-xl bg-zinc-950 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">{topic.title}</p>
                      <p className="text-sm text-zinc-500">{topic.tone}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">{topic.trendScore}</p>
                      <p className="text-xs text-zinc-500">trend</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Recent concepts">
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
        </div>
      </section>
    </main>
  )
}

function Metric({ icon, label, value }: Readonly<{ icon: React.ReactNode; label: string; value: string }>) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
      <div className="mb-4 h-5 w-5 text-zinc-400">{icon}</div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-zinc-500">{label}</p>
    </div>
  )
}