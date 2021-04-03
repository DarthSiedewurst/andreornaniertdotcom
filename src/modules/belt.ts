import { IArmour } from './interfaces';
import { skills } from './skills';

export const beltList: IArmour[] = [
  {
    name: 'Aelucanth Elytra S',
    defense: 62,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [{ skill: skills.DragonAttack, addedNumber: 3 }],
  },
  {
    name: 'Aknosom Coil S',
    defense: 38,
    decorationsNumber: 2,
    slotLevel: 3,
    skills: [{ skill: skills.QuickSheath, addedNumber: 1 }],
  },
  {
    name: 'Kamura Obi S',
    defense: 30,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [
      { skill: skills.WirebugWhisperer, addedNumber: 1 },
      { skill: skills.CriticalEye, addedNumber: 1 },
    ],
  },
];
