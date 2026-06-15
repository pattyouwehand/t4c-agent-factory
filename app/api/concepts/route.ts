import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { CreateConceptSchema } from '@/lib/validations/concept'

export async function GET() {
  const concepts = await prisma.concept.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return NextResponse.json(concepts)
}

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key')

  if (apiKey !== process.env.AGENT_API_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  const body = await request.json()
  const concept = CreateConceptSchema.parse(body)

  const createdConcept = await prisma.concept.create({
    data: concept
  })

  return NextResponse.json({
    success: true,
    concept: createdConcept
  })
}