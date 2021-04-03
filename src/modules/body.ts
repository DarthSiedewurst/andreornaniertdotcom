import { IArmour } from './interfaces';
import { skills } from './skills';

export const bodyList: IArmour[] = [
  {
    name: 'Aelucanth Thorax S',
    defense: 62,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.CriticalElement, addedNumber: 1 },
      { skill: skills.CriticalEye, addedNumber: 2 },
      { skill: skills.DragonAttack, addedNumber: 1 },
    ],
  },
  {
    name: 'Aknosom Mail S',
    defense: 38,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.QuickSheath, addedNumber: 1 },
      { skill: skills.PeakPerformance, addedNumber: 1 },
    ],
  },
  {
    name: 'Kamura Garb S',
    defense: 30,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.WirebugWhisperer, addedNumber: 2 },
      { skill: skills.WallRunner, addedNumber: 1 },
    ],
  },
];
