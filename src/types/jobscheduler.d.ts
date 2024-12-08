export type JobScheduler = {
  id: number;
  module: string;
  schedulerName: string;
  scheduleType: string;
  scheduleDesc: string;
  cronExpression: string | null;
  fixedDelayMs: number | null;
  lastRunTime: string;
  createTime: string | null;
  updateTime: string | null;
  active: boolean;
};

export type JobSchedulerLog = {
  seq: number;
  schedulerName: string;
  startTime: string | null;
  endTime: string | null;
  success: boolean;
  errorMsg: string | null;
  executionLog: string;
};
