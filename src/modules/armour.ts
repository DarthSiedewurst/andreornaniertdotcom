import { IArmour } from './interfaces';
import { skills } from './skills';

export const helmetList: IArmour[] = [
  {
    name: 'Khezu',
    defense: 32,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [{ skill: skills.Slugger, addedNumber: 1 }],
  },
  {
    name: 'Magnamalo',
    defense: 32,
    decorationsNumber: 3,
    slotLevel: 1,
    skills: [
      { skill: skills.Slugger, addedNumber: 2 },
      { skill: skills.CriticalEye, addedNumber: 1 },
    ],
  },
];
export const bodyList: IArmour[] = [
  {
    name: 'Slugger',
    defense: 32,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [{ skill: skills.Slugger, addedNumber: 1 }],
  },
  {
    name: 'Crit',
    defense: 32,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [{ skill: skills.CriticalEye, addedNumber: 1 }],
  },
];
