import { axiosInstance } from '@/apis/utils';

import { JobScheduler, JobSchedulerLog } from '@/types';

import jobSchedulerListData from '../../../public/json/jobschedulerlist.json';
import jobSchdeulerLogData from '../../../public/json/jobschedulerlog.json';

/*
 * @param N/A
 * @returns Job Scheduler List
 */
export const getJobSchedulerList = async (): Promise<
  JobScheduler[] | undefined
> => {
  try {
    //    const { data } = await axiosInstance.get(`/scheduler/list`);
    const data = jobSchedulerListData;
    return data;
  } catch (error) {
    console.log(error);
  }
};

/*
 * @param N/A
 * @returns Job Scheduler List
 */
export const getJobSchedulerLog = async (
  schedulerName: string
): Promise<JobSchedulerLog[] | undefined> => {
  try {
    const data = jobSchdeulerLogData;
    return data;
  } catch (error) {
    console.log(error);
  }
};
