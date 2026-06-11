export type AgentEvent = {
  id: string;
  time: string;
  agent: string;
  action: string;
  status: 'done' | 'review' | 'queued';
};

export type Topic = {
  id: string;
  title: string;
  trendScore: number;
  tone: string;
  status: 'researched' | 'concepting' | 'approved';
};

export type Concept = {
  id: string;
  topic: string;
  slogan: string;
  description: string;
  prompt: string;
  score: number;
  status: 'draft' | 'review' | 'approved';
};

export const events: AgentEvent[] = [
  {
    id: 'evt-1',
    time: '08:14',
    agent: 'Trend Hunter',
    action: 'Found topic: Birds Aren’t Real',
    status: 'done'
  },
  {
    id: 'evt-2',
    time: '08:15',
    agent: 'Research Agent',
    action: 'Summarized origin, claims, and satire angles',
    status: 'done'
  },
  {
    id: 'evt-3',
    time: '08:16',
    agent: 'Slogan Agent',
    action: 'Generated 12 slogans',
    status: 'review'
  },
  {
    id: 'evt-4',
    time: '08:17',
    agent: 'Design Agent',
    action: 'Created 4 image prompts',
    status: 'queued'
  }
];

export const topics: Topic[] = [
  {
    id: 'birds',
    title: 'Birds Aren’t Real',
    trendScore: 87,
    tone: 'Absurd surveillance satire',
    status: 'concepting'
  },
  {
    id: 'moon',
    title: 'Moon Landing Studio Cut',
    trendScore: 73,
    tone: 'Retro NASA mockumentary',
    status: 'researched'
  },
  {
    id: 'pigeons',
    title: 'Pigeon Charging Stations',
    trendScore: 69,
    tone: 'Deadpan urban paranoia',
    status: 'approved'
  }
]

export const concepts: Concept[] = [
  {
    id: 'concept-1',
    topic: 'Birds Aren’t Real',
    slogan: 'Recharge Your Pigeon Monthly',
    description: 'A distressed retro tee with a pigeon standing on a fake charging dock.',
    prompt: 'Vintage distressed t-shirt graphic, deadpan government surveillance pigeon on a charging station, retro 1970s poster style, bold typography, screen print look.',
    score: 91,
    status: 'review'
  },
  {
    id: 'concept-2',
    topic: 'Moon Landing Studio Cut',
    slogan: 'Directed by Stanley, Approved by NASA',
    description: 'A fake movie poster style design with moon dust, studio lights, and a clapperboard.',
    prompt: 'Retro cinema poster t-shirt design, moon landing film set, studio lights, astronaut holding clapperboard, satirical but stylish, vintage halftone texture.',
    score: 84,
    status: 'draft'
  },
  {
    id: 'concept-3',
    topic: 'Pigeon Charging Stations',
    slogan: 'Low Battery. High Surveillance.',
    description: 'Minimal black-and-white concept with a pigeon, battery icon, and bureaucratic stamp.',
    prompt: 'Minimalist t-shirt design, pigeon silhouette, low battery symbol, confidential stamp, clean typography, satirical surveillance theme.',
    score: 88,
    status: 'approved'
  }
]
