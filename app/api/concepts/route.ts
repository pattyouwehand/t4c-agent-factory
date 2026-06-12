import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const newConcept = await request.json()

    const filePath = path.join(
      process.cwd(),
      'data',
      'concepts.json'
    )

    const fileContents = await fs.readFile(filePath, 'utf-8')

    const concepts = JSON.parse(fileContents)

    concepts.push(newConcept)

    await fs.writeFile(
      filePath,
      JSON.stringify(concepts, null, 2)
    )

    return NextResponse.json({
      success: true,
      concept: newConcept,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to save concept',
      },
      {
        status: 500,
      }
    )
  }
}

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    'data',
    'concepts.json'
  )

  const fileContents = await fs.readFile(filePath, 'utf-8')

  return NextResponse.json(
    JSON.parse(fileContents)
  )
}