import { IArmour } from './interfaces';
import { skills } from './skills';

export const glovesList: IArmour[] = [
  {
    name: 'Kamura Braces S',
    defense: 30,
    decorations: [2],
    skills: [
      { skill: skills.CriticalEye, addedNumber: 2 },
      { skill: skills.Heroics, addedNumber: 1 },
    ],
  },
  {
    name: 'Leather Gloves S',
    defense: 30,
    decorations: [1, 1],
    skills: [
      { skill: skills.Geologist, addedNumber: 1 },
      { skill: skills.SpecialAmmoBoost, addedNumber: 1 },
    ],
  },
  {
    name: 'Chainmail Gloves S',
    defense: 32,
    decorations: [1, 1],
    skills: [
      { skill: skills.Botanist, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 2 },
    ],
  },
  {
    name: 'Hunters Vambraces S',
    defense: 32,
    decorations: [2],
    skills: [{ skill: skills.QuickSheath, addedNumber: 1 }],
  },
  {
    name: 'Alloy Vambraces S',
    defense: 32,
    decorations: [1],
    skills: [
      { skill: skills.WaterAttack, addedNumber: 1 },
      { skill: skills.CriticalEye, addedNumber: 2 },
    ],
  },
  {
    name: 'Bone Vambraces S',
    defense: 32,
    decorations: [1, 1],
    skills: [
      { skill: skills.MuckResistance, addedNumber: 1 },
      { skill: skills.StaminaThief, addedNumber: 1 },
    ],
  },
  {
    name: 'Skalda Brachia S',
    defense: 32,
    decorations: [1, 1],
    skills: [
      { skill: skills.LatentPower, addedNumber: 1 },
      { skill: skills.PoisonResistance, addedNumber: 1 },
    ],
  },
  {
    name: 'Bnahabra Gloves S',
    defense: 34,
    decorations: [1],
    skills: [
      { skill: skills.PoisonAttack, addedNumber: 2 },
      { skill: skills.EvadeWindow, addedNumber: 1 },
    ],
  },
  {
    name: 'Izuchi Braces S',
    defense: 36,
    decorations: [1, 1],
    skills: [{ skill: skills.Constitution, addedNumber: 2 }],
  },
  {
    name: 'Baggi Vambraces S',
    defense: 36,
    decorations: [1, 1],
    skills: [
      { skill: skills.SleepResistance, addedNumber: 2 },
      { skill: skills.IceAttack, addedNumber: 1 },
    ],
  },
  {
    name: 'Kula-Ya-Ku Braces S',
    defense: 38,
    decorations: [2],
    skills: [
      { skill: skills.Slugger, addedNumber: 1 },
      { skill: skills.StaminaThief, addedNumber: 2 },
    ],
  },
  {
    name: 'Wroggi Vambraces S',
    defense: 38,
    decorations: [3],
    skills: [{ skill: skills.AmmoUp, addedNumber: 1 }],
  },
  {
    name: 'Arzuros Vambraces S',
    defense: 36,
    decorations: [1],
    skills: [
      { skill: skills.Counterstrike, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 2 },
    ],
  },
  {
    name: 'Lagombi Vambraces S',
    defense: 36,
    decorations: [2, 1],
    skills: [
      { skill: skills.CriticalEye, addedNumber: 2 },
      { skill: skills.IceAttack, addedNumber: 1 },
    ],
  },
  {
    name: 'Aknosom Braces S',
    defense: 38,
    decorations: [1, 1],
    skills: [
      { skill: skills.PeakPerformance, addedNumber: 1 },
      { skill: skills.FireAttack, addedNumber: 1 },
    ],
  },
  {
    name: 'Khezu Vambraces S',
    defense: 38,
    decorations: [1, 1],
    skills: [
      { skill: skills.WallRunner, addedNumber: 1 },
      { skill: skills.RecoverySpeed, addedNumber: 1 },
      { skill: skills.ThunderAttack, addedNumber: 2 },
    ],
  },
  {
    name: 'Tetranodon Braces S',
    defense: 40,
    decorations: [1, 1],
    skills: [
      { skill: skills.Heroics, addedNumber: 1 },
      { skill: skills.SpecialAmmoBoost, addedNumber: 1 },
    ],
  },
  {
    name: 'Ingot Vambraces S',
    defense: 40,
    decorations: [1],
    skills: [{ skill: skills.ThunderAttack, addedNumber: 3 }],
  },
  {
    name: 'Edel Creeper S',
    defense: 40,
    decorations: [],
    skills: [{ skill: skills.CaptureMaster, addedNumber: 1 }],
  },
  {
    name: 'Rhenopolos Braces S',
    defense: 42,
    decorations: [2, 1],
    skills: [{ skill: skills.Artillery, addedNumber: 2 }],
  },
  {
    name: 'Jaggi Gauntlets S',
    defense: 42,
    decorations: [1, 1],
    skills: [{ skill: skills.AttackBoost, addedNumber: 2 }],
  },
  {
    name: 'Volvidon Vambraces S',
    defense: 50,
    decorations: [1, 1, 1],
    skills: [
      { skill: skills.EvadeExtender, addedNumber: 1 },
      { skill: skills.ParalysisAttack, addedNumber: 1 },
    ],
  },
  {
    name: 'Ludroth Braces S',
    defense: 48,
    decorations: [2, 1, 1],
    skills: [{ skill: skills.MarathonRunner, addedNumber: 1 }],
  },
  {
    name: 'Barroth Vambraces S',
    defense: 50,
    decorations: [1, 1],
    skills: [
      { skill: skills.AttackBoost, addedNumber: 2 },
      { skill: skills.AffinitySliding, addedNumber: 1 },
    ],
  },
  {
    name: 'Bishanten Vambraces S',
    defense: 52,
    decorations: [3],
    skills: [
      { skill: skills.ItemProlonger, addedNumber: 1 },
      { skill: skills.StunResistance, addedNumber: 1 },
    ],
  },
  {
    name: 'Pukei-Pukei Braces S',
    defense: 50,
    decorations: [2],
    skills: [
      { skill: skills.SpareShot, addedNumber: 1 },
      { skill: skills.AimBooster, addedNumber: 1 },
    ],
  },
  {
    name: 'Jyuratodus Vambraces',
    defense: 48,
    decorations: [3, 2, 1],
    skills: [],
  },
  {
    name: 'Basarios Vambraces S',
    defense: 52,
    decorations: [1, 1],
    skills: [
      { skill: skills.Guard, addedNumber: 2 },
      { skill: skills.SpeedSharpening, addedNumber: 1 },
    ],
  },
  {
    name: 'Rathian Braces S',
    defense: 52,
    decorations: [1, 1],
    skills: [
      { skill: skills.BlightResistance, addedNumber: 1 },
      { skill: skills.WideRange, addedNumber: 1 },
    ],
  },
  {
    name: 'Dober Vambraces',
    defense: 52,
    decorations: [2, 1, 1],
    skills: [
      { skill: skills.DragonAttack, addedNumber: 1 },
      { skill: skills.PowerProlonger, addedNumber: 1 },
    ],
  },
  {
    name: 'S. Studded Gloves S',
    defense: 52,
    decorations: [1, 1],
    skills: [
      { skill: skills.SpreadUp, addedNumber: 1 },
      { skill: skills.NormalRapidUp, addedNumber: 1 },
    ],
  },
  {
    name: 'Melahoa Branch S',
    defense: 52,
    decorations: [1, 1],
    skills: [
      { skill: skills.ParalysisResistance, addedNumber: 1 },
      { skill: skills.Botanist, addedNumber: 1 },
      { skill: skills.RecoveryUp, addedNumber: 1 },
    ],
  },
  {
    name: 'Death Strench Grip S',
    defense: 52,
    decorations: [1],
    skills: [{ skill: skills.MaximumMight, addedNumber: 2 }],
  },
  {
    name: 'Mosgharl Creeper S',
    defense: 52,
    decorations: [2, 1, 1],
    skills: [
      { skill: skills.BlastResistance, addedNumber: 1 },
      { skill: skills.FlinchFree, addedNumber: 1 },
    ],
  },
  {
    name: 'Vaik Braces S',
    defense: 52,
    decorations: [1, 1],
    skills: [{ skill: skills.NormalRapidUp, addedNumber: 2 }],
  },
  {
    name: 'Makluva Sleeves S',
    defense: 52,
    decorations: [2],
    skills: [
      { skill: skills.BubblyDance, addedNumber: 1 },
      { skill: skills.LeapOfFaith, addedNumber: 1 },
    ],
  },
  {
    name: 'Utsushi Prayer (V) S',
    defense: 52,
    decorations: [3],
    skills: [{ skill: skills.WideRange, addedNumber: 1 }],
  },
  {
    name: 'Utsushi Hope (Hidden) S',
    defense: 52,
    decorations: [2],
    skills: [
      { skill: skills.EvadeWindow, addedNumber: 1 },
      { skill: skills.WirebugWhisperer, addedNumber: 1 },
    ],
  },
  {
    name: 'Remobra Gloves S',
    defense: 52,
    decorations: [2],
    skills: [
      { skill: skills.CriticalElement, addedNumber: 1 },
      { skill: skills.Windproof, addedNumber: 1 },
    ],
  },
  {
    name: 'Somnacanth Braces S',
    defense: 58,
    decorations: [2],
    skills: [
      { skill: skills.Bombardier, addedNumber: 2 },
      { skill: skills.DivineBlessing, addedNumber: 1 },
    ],
  },
  {
    name: 'Barioth Vambraces S',
    defense: 58,
    decorations: [2],
    skills: [
      { skill: skills.QuickSheath, addedNumber: 1 },
      { skill: skills.MaximumMight, addedNumber: 1 },
      { skill: skills.CriticalEye, addedNumber: 1 },
    ],
  },
  {
    name: 'Tobi-Kadachi Braces S',
    defense: 58,
    decorations: [2],
    skills: [{ skill: skills.Constitution, addedNumber: 3 }],
  },
  {
    name: 'Anjanath Vambraces S',
    defense: 60,
    decorations: [1],
    skills: [
      { skill: skills.Slugger, addedNumber: 2 },
      { skill: skills.AttackBoost, addedNumber: 2 },
    ],
  },
  {
    name: 'Nargacuga Braces S',
    defense: 60,
    decorations: [1, 1],
    skills: [
      { skill: skills.EvadeWindow, addedNumber: 1 },
      { skill: skills.EvadeExtender, addedNumber: 1 },
    ],
  },
  {
    name: 'Mizutsune Braces S',
    defense: 60,
    decorations: [2],
    skills: [
      { skill: skills.Resuscitate, addedNumber: 1 },
      { skill: skills.FreeMeal, addedNumber: 1 },
    ],
  },
  {
    name: 'Rathalos Braces S',
    defense: 62,
    decorations: [2],
    skills: [{ skill: skills.AttackBoost, addedNumber: 2 }],
  },
  {
    name: 'Zinogre Braces S',
    defense: 62,
    decorations: [2],
    skills: [
      { skill: skills.LatentPower, addedNumber: 1 },
      { skill: skills.Constitution, addedNumber: 1 },
    ],
  },
  {
    name: 'Aelucanth Brachia S',
    defense: 62,
    decorations: [3],
    skills: [{ skill: skills.EvadeWindow, addedNumber: 1 }],
  },
  {
    name: 'Sinister Gauntlets S',
    defense: 64,
    decorations: [2],
    skills: [
      { skill: skills.HellfireCloak, addedNumber: 1 },
      { skill: skills.Handicraft, addedNumber: 1 },
    ],
  },
  {
    name: 'Goss Harag Braces S',
    defense: 64,
    decorations: [2],
    skills: [
      { skill: skills.CriticalDraw, addedNumber: 1 },
      { skill: skills.PunishingDraw, addedNumber: 1 },
    ],
  },
  {
    name: 'Almudron Vambraces S',
    defense: 64,
    decorations: [1, 1],
    skills: [
      { skill: skills.RapidMorph, addedNumber: 1 },
      { skill: skills.EvadeWindow, addedNumber: 2 },
    ],
  },
  {
    name: 'Tigrex Braces S',
    defense: 64,
    decorations: [3],
    skills: [
      { skill: skills.Bludgeoner, addedNumber: 2 },
      { skill: skills.MindsEye, addedNumber: 1 },
    ],
  },
  {
    name: 'Diablos Vambraces S',
    defense: 64,
    decorations: [2, 1],
    skills: [{ skill: skills.OffensiveGuard, addedNumber: 1 }],
  },
  {
    name: 'Rakna Armguards',
    defense: 66,
    decorations: [2],
    skills: [
      { skill: skills.Constitution, addedNumber: 2 },
      { skill: skills.StaminaSurge, addedNumber: 1 },
    ],
  },
  {
    name: 'Golden Kote',
    defense: 70,
    decorations: [3, 1],
    skills: [
      { skill: skills.Heroics, addedNumber: 1 },
      { skill: skills.LatentPower, addedNumber: 1 },
    ],
  },
  {
    name: 'Ibushis Pauldrons',
    defense: 66,
    decorations: [],
    skills: [
      { skill: skills.WindAlignment, addedNumber: 1 },
      { skill: skills.Constitution, addedNumber: 1 },
      { skill: skills.StaminaSurge, addedNumber: 1 },
    ],
  },
  {
    name: 'Narwas Pauldrons',
    defense: 76,
    decorations: [],
    skills: [
      { skill: skills.ThunderAlignment, addedNumber: 1 },
      { skill: skills.Guard, addedNumber: 1 },
      { skill: skills.Partbreaker, addedNumber: 1 },
    ],
  },
];
