import { delay } from './delay';
import { mockAi } from '../data/mockAi';

export const getAiSummary = async () => {
  await delay(1000);
  return mockAi.summary;
};

export const getAiSkill = async () => {
  await delay(1000);
  return mockAi.skill;
};

export const getAiOutreach = async () => {
  await delay(1000);
  return mockAi.outreach;
};

export const getAiJobs = async () => {
  await delay(1000);
  return mockAi.jobs;
}; 