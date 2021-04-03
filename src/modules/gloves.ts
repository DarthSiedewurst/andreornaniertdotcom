import { IArmour } from './interfaces';
import { skills } from './skills';

export const glovesList: IArmour[] = [
  {
    name: 'Aelucanth Brachia S',
    defense: 62,
    decorationsNumber: 1,
    slotLevel: 3,
    skills: [{ skill: skills.EvadeWindow, addedNumber: 1 }],
  },
  {
    name: 'Aknosom Braces S',
    defense: 38,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.PeakPerformance, addedNumber: 1 },
      { skill: skills.FireAttack, addedNumber: 1 },
    ],
  },
  {
    name: 'Kamura Braces S',
    defense: 30,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [
      { skill: skills.CriticalEye, addedNumber: 2 },
      { skill: skills.Heroics, addedNumber: 1 },
    ],
  },
];
