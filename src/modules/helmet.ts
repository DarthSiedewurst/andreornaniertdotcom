import { IArmour } from './interfaces';
import { skills } from './skills';

export const helmetList: IArmour[] = [
  {
    name: 'Kamura Head Scarf S',
    defense: 30,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.DivineBlessing, addedNumber: 2 },
      { skill: skills.Resuscitate, addedNumber: 1 },
    ],
  },
  {
    name: 'Leather S',
    defense: 30,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [
      { skill: skills.Geologist, addedNumber: 1 },
      { skill: skills.HungerResistance, addedNumber: 1 },
    ],
  },
  {
    name: 'Chainmail Headgear S',
    defense: 32,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [
      { skill: skills.Botanist, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 1 },
    ],
  },
  {
    name: 'Hunters Helm S',
    defense: 32,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [{ skill: skills.ItemProlonger, addedNumber: 1 }],
  },
  {
    name: 'Alloy Helm S',
    defense: 32,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.WaterAttack, addedNumber: 1 },
      { skill: skills.ProtectivePolish, addedNumber: 1 },
    ],
  },
  {
    name: 'Bone Helm S',
    defense: 32,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.StaminaThief, addedNumber: 1 },
      { skill: skills.Partbreaker, addedNumber: 1 },
    ],
  },
  {
    name: 'Skalda Vertex S',
    defense: 32,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [{ skill: skills.PoisonAttack, addedNumber: 2 }],
  },
  {
    name: 'Bnahabra S',
    defense: 34,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [
      { skill: skills.PoisonAttack, addedNumber: 1 },
      { skill: skills.RecoilDown, addedNumber: 2 },
    ],
  },
  {
    name: 'Izuchi Helm S',
    defense: 36,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [{ skill: skills.CriticalEye, addedNumber: 1 }],
  },
  {
    name: 'Baggi S',
    defense: 36,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [{ skill: skills.IceAttack, addedNumber: 2 }],
  },
  {
    name: 'Kula-Ya-Ku S',
    defense: 38,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [{ skill: skills.MaximumMight, addedNumber: 1 }],
  },
  {
    name: 'Wroggi Helm S',
    defense: 38,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.RapidFireUp, addedNumber: 1 },
      { skill: skills.EvadeExtender, addedNumber: 1 },
    ],
  },
  {
    name: 'Arzuros Helm S',
    defense: 36,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [
      { skill: skills.Fortify, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 1 },
    ],
  },
  {
    name: 'Lagombi Helm S',
    defense: 36,
    decorationsNumber: 1,
    slotLevel: 3,
    skills: [
      { skill: skills.CriticalEye, addedNumber: 1 },
      { skill: skills.IceAttack, addedNumber: 2 },
    ],
  },
  {
    name: 'Aknosom Helm S',
    defense: 38,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [
      { skill: skills.FireAttack, addedNumber: 1 },
      { skill: skills.QuickSheath, addedNumber: 1 },
    ],
  },
  {
    name: 'Khezu Helm S',
    defense: 38,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.Focus, addedNumber: 1 },
      { skill: skills.RecoveryUp, addedNumber: 1 },
    ],
  },
  {
    name: 'Tetranodon Helm S',
    defense: 40,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.NormalRapidUp, addedNumber: 1 },
      { skill: skills.QuickSheath, addedNumber: 1 },
    ],
  },
  {
    name: 'Ingot Helm S',
    defense: 40,
    decorationsNumber: 2,
    slotLevel: 3,
    skills: [{ skill: skills.Windproof, addedNumber: 1 }],
  },
  {
    name: 'Slagtoth Hood S',
    defense: 42,
    decorationsNumber: 1,
    slotLevel: 3,
    skills: [
      { skill: skills.FreeMeal, addedNumber: 1 },
      { skill: skills.Diversion, addedNumber: 1 },
    ],
  },
  {
    name: 'Rhenopolos Helm S',
    defense: 42,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.PierceUp, addedNumber: 2 },
      { skill: skills.StunResistance, addedNumber: 1 },
    ],
  },
  {
    name: 'Buffango Mask S',
    defense: 36,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [{ skill: skills.Bludgeoner, addedNumber: 2 }],
  },
  {
    name: 'Droth S ?????????????????????????????????????????????',
    defense: 40,
    decorationsNumber: 0,
    slotLevel: 0,
    skills: [],
  },
  {
    name: 'Jaggi S ?????????????????????????????????????????????',
    defense: 40,
    decorationsNumber: 0,
    slotLevel: 0,
    skills: [],
  },
  {
    name: 'Jaggi Mask S',
    defense: 36,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [{ skill: skills.AffinitySliding, addedNumber: 1 }],
  },
  {
    name: 'Volvidon Helm S',
    defense: 50,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [
      { skill: skills.ParalysisAttack, addedNumber: 2 },
      { skill: skills.Bludgeoner, addedNumber: 1 },
    ],
  },
  {
    name: 'Ludroth Helm S',
    defense: 48,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [
      { skill: skills.MarathonRunner, addedNumber: 1 },
      { skill: skills.PeakPerformance, addedNumber: 1 },
    ],
  },
  {
    name: 'Barroth Helm S',
    defense: 40,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [
      { skill: skills.AttackBoost, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 1 },
      { skill: skills.OffensiveGuard, addedNumber: 1 },
    ],
  },
  {
    name: 'Bishanten Helm S',
    defense: 52,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.ItemProlonger, addedNumber: 1 },
      { skill: skills.WideRange, addedNumber: 1 },
      { skill: skills.StunResistance, addedNumber: 1 },
    ],
  },
  {
    name: 'Pukei-Pukei Helm S',
    defense: 50,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [
      { skill: skills.SpecialAmmoBoost, addedNumber: 1 },
      { skill: skills.SpareShot, addedNumber: 1 },
    ],
  },
  {
    name: 'Jyuratodus Helm S',
    defense: 48,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [
      { skill: skills.OffensiveGuard, addedNumber: 1 },
      { skill: skills.EvadeExtender, addedNumber: 1 },
    ],
  },
  {
    name: 'Basarios Helm S',
    defense: 52,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [
      { skill: skills.LoadShells, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 2 },
    ],
  },
  {
    name: 'Rathian Helm S',
    defense: 52,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [{ skill: skills.BlightResistance, addedNumber: 1 }],
  },
  {
    name: 'Skull Visage S',
    defense: 50,
    decorationsNumber: 2,
    slotLevel: 3,
    skills: [{ skill: skills.Fortify, addedNumber: 1 }],
  },
  {
    name: 'Chrome???????????????????????????????? S',
    defense: 40,
    decorationsNumber: 0,
    slotLevel: 0,
    skills: [],
  },
  {
    name: 'Dober Helm',
    defense: 52,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [
      { skill: skills.DragonAttack, addedNumber: 1 },
      { skill: skills.AttackBoost, addedNumber: 1 },
      { skill: skills.Heroics, addedNumber: 1 },
    ],
  },
  {
    name: 'S. Studded Hat S',
    defense: 52,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [{ skill: skills.AimBooster, addedNumber: 2 }],
  },
  {
    name: 'Death Strench Brain S',
    defense: 52,
    decorationsNumber: 1,
    slotLevel: 3,
    skills: [{ skill: skills.ProtectivePolish, addedNumber: 1 }],
  },
  {
    name: 'Valk Helm S',
    defense: 52,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [{ skill: skills.AmmoUp, addedNumber: 2 }],
  },
  {
    name: 'Utsushi Mask (V) S',
    defense: 52,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.SpeedEating, addedNumber: 1 },
      { skill: skills.FreeMeal, addedNumber: 1 },
      { skill: skills.GoodLuck, addedNumber: 1 },
    ],
  },
  {
    name: 'Utsushi Mask (Hidden) S',
    defense: 52,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.RazorSharp, addedNumber: 2 },
      { skill: skills.SpareShot, addedNumber: 2 },
      { skill: skills.WirebugWhisperer, addedNumber: 1 },
    ],
  },
  {
    name: 'Uroktor????????????????????????????????',
    defense: 40,
    decorationsNumber: 0,
    slotLevel: 0,
    skills: [],
  },
  {
    name: 'Remobra S',
    defense: 52,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [{ skill: skills.Windproof, addedNumber: 1 }],
  },
  {
    name: 'Somnacanth Helm S',
    defense: 58,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [{ skill: skills.SleepAttack, addedNumber: 1 }],
  },
  {
    name: 'Barioth Helm S',
    defense: 58,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [{ skill: skills.CriticalDraw, addedNumber: 2 }],
  },
  {
    name: 'Kadachi Helm S',
    defense: 58,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [
      { skill: skills.JumpMaster, addedNumber: 1 },
      { skill: skills.Constitution, addedNumber: 1 },
      { skill: skills.CriticalEye, addedNumber: 1 },
    ],
  },
  {
    name: 'Anjanath Helm S',
    defense: 60,
    decorationsNumber: 1,
    slotLevel: 2,
    skills: [
      { skill: skills.Focus, addedNumber: 1 },
      { skill: skills.Slugger, addedNumber: 1 },
    ],
  },
  {
    name: 'Nargacuga Helm S',
    defense: 60,
    decorationsNumber: 1,
    slotLevel: 3,
    skills: [{ skill: skills.EvadeWindow, addedNumber: 1 }],
  },
  {
    name: 'Nargacuga Helm S',
    defense: 60,
    decorationsNumber: 2,
    slotLevel: 2,
    skills: [{ skill: skills.Resuscitate, addedNumber: 1 }],
  },
  {
    name: 'Zinogre Helm S',
    defense: 62,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [
      { skill: skills.LatentPower, addedNumber: 1 },
      { skill: skills.WeaknessExploit, addedNumber: 1 },
    ],
  },
  {
    name: 'Aelucanth Vertex S',
    defense: 62,
    decorationsNumber: 1,
    slotLevel: 1,
    skills: [{ skill: skills.CriticalElement, addedNumber: 2 }],
  },
  {
    name: 'Gargwa Mask S',
    defense: 54,
    decorationsNumber: 0,
    slotLevel: 0,
    skills: [
      { skill: skills.LeapOfFaith, addedNumber: 1 },
      { skill: skills.GoodLuck, addedNumber: 1 },
    ],
  },
  {
    name: 'Rakna Helm',
    defense: 66,
    decorationsNumber: 2,
    slotLevel: 1,
    skills: [
      { skill: skills.SpreadUp, addedNumber: 1 },
      { skill: skills.ReloadSpeed, addedNumber: 1 },
    ],
  },
  {
    name: 'Ibushi Helm S',
    defense: 66,
    decorationsNumber: 0,
    slotLevel: 0,
    skills: [
      { skill: skills.WindAlignment, addedNumber: 1 },
      { skill: skills.Focus, addedNumber: 1 },
      { skill: skills.EvadeExtender, addedNumber: 1 },
    ],
  },
];
