import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key')

  if (apiKey !== process.env.AGENT_API_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  const body = await request.json()

  const concept = await prisma.concept.create({
    data: {
      id: crypto.randomUUID(),
      topic: body.topic,
      slogan: body.slogan,
      description: body.description,
      prompt: body.prompt,
      score: body.score,
      status: body.status ?? 'review'
    }
  })

  return NextResponse.json({
    success: true,
    concept
  })
}