export type Concept = {
  id: string;
  topic: string;
  slogan: string;
  description: string;
  prompt: string;
  score: number;
  status: 'draft' | 'review' | 'approved' | 'rejected' | 'needs-work';
};

export type Topic = {
  id: string;
  title: string;
  trendScore: number;
  tone: string;
  status: 'researched' | 'concepting' | 'approved';
};

export type AgentEvent = {
  id: string;
  time: string;
  agent: string;
  action: string;
  status: 'done' | 'review' | 'queued';
};