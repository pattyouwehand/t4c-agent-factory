import conceptsData from '@/data/concepts.json'
import topicsData from '@/data/topics.json'
import eventsData from '@/data/events.json'

import type {
  Concept,
  Topic,
  AgentEvent,
} from './types'

export const concepts = conceptsData as Concept[]
export const topics = topicsData as Topic[]
export const events = eventsData as AgentEvent[]