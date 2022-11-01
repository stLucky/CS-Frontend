export const Priorities = {
  LOW: 'low',
  AVERAGE: 'average',
  HIGH: 'high',
  CRITICAL: 'critical',
} as const;

export const ExecTimePriorities = {
  [Priorities.LOW]: 0.25,
  [Priorities.AVERAGE]: 0.5,
  [Priorities.HIGH]: 0.75,
  [Priorities.CRITICAL]: 1,
} as const;
