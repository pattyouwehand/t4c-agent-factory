import { z } from 'zod'

export const CreateConceptSchema = z.object({
  topic: z.string().min(1),
  slogan: z.string().min(1),
  description: z.string().min(1),
  prompt: z.string().min(1),
  score: z.number().int(),
  status: z.enum(['draft', 'review', 'approved', 'rejected', 'needs-work']),
  imagePrompt: z.string().optional(),
  imageUrl: z.string().optional()
}).strict()

export const UpdateConceptAssetsSchema = z.object({
  imagePrompt: z.string().optional(),
  imageUrl: z.string().optional(),
  assetStatus: z.enum([
    'PENDING',
    'GENERATING',
    'COMPLETED',
    'FAILED'
  ]).optional()
}).strict()

export type CreateConceptInput = z.infer<typeof CreateConceptSchema>