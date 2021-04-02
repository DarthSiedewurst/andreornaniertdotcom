import { ISkills } from './interfaces';
import { skills } from './skills';

export const decorationsLevel1List: ISkills[] = [
  { skill: skills.CriticalEye, addedNumber: 1 },
  { skill: skills.Slugger, addedNumber: 1 },
];

export const decorationsLevel2List: ISkills[] = [...decorationsLevel1List, { skill: skills.Super, addedNumber: 1 }];
export const decorationsLevel3List: ISkills[] = [
  ...decorationsLevel2List,
  { skill: skills.Superduper, addedNumber: 1 },
];
