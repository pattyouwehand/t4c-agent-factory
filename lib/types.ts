export type AgentEvent = {
  id: string;
  time: string;
  agent: string;
  action: string;
  status: 'done' | 'review' | 'queued';
};