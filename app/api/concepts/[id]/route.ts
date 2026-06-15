import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { UpdateConceptAssetsSchema } from '@/lib/validations/concept'

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const apiKey = request.headers.get('x-api-key')

  if (apiKey !== process.env.AGENT_API_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  const { id } = await params
  const body = await request.json()
  const data = UpdateConceptAssetsSchema.parse(body)

  const concept = await prisma.concept.update({
      where: { id },
      data
    })

  return NextResponse.json(concept)
}