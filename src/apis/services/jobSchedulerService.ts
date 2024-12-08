import { useStrDatetoYYYYMMDDHHSS } from '@/hooks';
import { JobScheduler, JobSchedulerLog } from '@/types';

export const processJobSchedulerList = (
  list: JobScheduler[] = []
): JobScheduler[] => {
  return list.map((scheduler) => ({
    ...scheduler,
    lastRunTime: useStrDatetoYYYYMMDDHHSS(scheduler.lastRunTime),
  }));
};

export const processJobSchedulerLog = (
  list: JobSchedulerLog[] = []
): JobSchedulerLog[] => {
  return list.map((log) => ({
    ...log,
    startTime:
      log.startTime !== null
        ? useStrDatetoYYYYMMDDHHSS(log.startTime)
        : log.startTime,
    endTime:
      log.endTime !== null
        ? useStrDatetoYYYYMMDDHHSS(log.endTime)
        : log.endTime,
  }));
};
