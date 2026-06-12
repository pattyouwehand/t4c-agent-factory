import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const concepts = await prisma.concept.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return NextResponse.json(concepts)
}

export async function POST(request: NextRequest) {
  const apiKey = request.headers.get('x-api-key')
  const concept = await request.json()

  if(apiKey !== process.env.AGENT_API_KEY){
    return NextResponse.json(
      {error: 'Unautohrized'},
      {status: 401}
    )
  }

  const createdConcept = await prisma.concept.create({
    data: concept
  })

  return NextResponse.json({
    success: true,
    concept: createdConcept
  })
}