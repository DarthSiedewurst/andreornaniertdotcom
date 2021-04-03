import { IArmour } from './interfaces';
import { skills } from './skills';

export const bootsList: IArmour[] = [
  {
    name: 'Aelucanth Crura S',
    defense: 62,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [
      { skill: skills.CriticalEye, addedNumber: 2 },
      { skill: skills.DragonAttack, addedNumber: 1 },
    ],
  },
  {
    name: 'Aknosom Greaves S',
    defense: 38,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.PeakPerformance, addedNumber: 1 },
      { skill: skills.FireAttack, addedNumber: 2 },
    ],
  },
  {
    name: 'Kamura Leggings S',
    defense: 30,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.WallRunner, addedNumber: 2 },
      { skill: skills.Resuscitate, addedNumber: 1 },
    ],
  },
];
