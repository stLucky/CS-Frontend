import type { ISimpleWorker } from '../../worker';
import { Priorities } from './const';

type TPriorities = typeof Priorities[keyof typeof Priorities];

export interface ForEachOptions {
  priority: TPriorities
}

export interface Task {
  worker: ISimpleWorker,
  priority: TPriorities,
  resolve: (v?: any) => void;
  reject: (r?: any) => void;
}
