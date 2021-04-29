import { IArmour } from './interfaces';
import { skills } from './skills';

export const bootsList: IArmour[] = [
  {
    name: 'Kamura Leggings S',
    defense: 30,
    decorations: [1],
    skills: [
      { skill: skills.WallRunner, addedNumber: 2 },
      { skill: skills.Resuscitate, addedNumber: 1 },
    ],
  },
  {
    name: 'Leather Pants S',
    defense: 30,
    decorations: [2],
    skills: [{ skill: skills.Geologist, addedNumber: 1 }],
  },
  {
    name: 'Chainmail Pants  S',
    defense: 32,
    decorations: [1, 1],
    skills: [
      { skill: skills.Botanist, addedNumber: 1 },
      { skill: skills.StaminaSurge, addedNumber: 1 },
    ],
  },
  {
    name: 'Hunters Greaves S',
    defense: 32,
    decorations: [2],
    skills: [
      { skill: skills.StunResistance, addedNumber: 1 },
      { skill: skills.AttackBoost, addedNumber: 2 },
    ],
  },
  {
    name: 'Alloy Greaves S',
    defense: 32,
    decorations: [2],
    skills: [
      { skill: skills.SpeedSharpening, addedNumber: 1 },
      { skill: skills.CriticalEye, addedNumber: 1 },
    ],
  },
  {
    name: 'Bone Greaves S',
    defense: 32,
    decorations: [2],
    skills: [
      { skill: skills.MuckResistance, addedNumber: 2 },
      { skill: skills.Focus, addedNumber: 1 },
    ],
  },
  {
    name: 'Skalda Crura S',
    defense: 32,
    decorations: [1],
    skills: [
      { skill: skills.LatentPower, addedNumber: 1 },
      { skill: skills.PoisonResistance, addedNumber: 1 },
      { skill: skills.MindsEye, addedNumber: 1 },
    ],
  },
  {
    name: 'Bnahabra Boots S',
    defense: 34,
    decorations: [2, 1],
    skills: [
      { skill: skills.ParalysisAttack, addedNumber: 1 },
      { skill: skills.RecoilDown, addedNumber: 1 },
    ],
  },
  {
    name: 'Izuchi Greaves S',
    defense: 36,
    decorations: [1, 1],
    skills: [
      { skill: skills.RecoverySpeed, addedNumber: 1 },
      { skill: skills.Constitution, addedNumber: 1 },
    ],
  },
  {
    name: 'Baggi Greaves S',
    defense: 36,
    decorations: [2, 1],
    skills: [{ skill: skills.AttackBoost, addedNumber: 1 }],
  },
  {
    name: 'Kula-Ya-Ku Greaves S',
    defense: 38,
    decorations: [1],
    skills: [
      { skill: skills.StunResistance, addedNumber: 1 },
      { skill: skills.CriticalEye, addedNumber: 2 },
    ],
  },
  {
    name: 'Wroggi Greaves S',
    defense: 38,
    decorations: [1, 1],
    skills: [
      { skill: skills.AmmoUp, addedNumber: 1 },
      { skill: skills.EvadeExtender, addedNumber: 1 },
    ],
  },
  {
    name: 'Arzuros Greaves S',
    defense: 36,
    decorations: [3, 2, 1],
    skills: [],
  },
  {
    name: 'Lagombi Greaves S',
    defense: 36,
    decorations: [1, 1],
    skills: [
      { skill: skills.JumpMaster, addedNumber: 1 },
      { skill: skills.CriticalEye, addedNumber: 1 },
    ],
  },
  {
    name: 'Aknosom Greaves S',
    defense: 38,
    decorations: [1],
    skills: [
      { skill: skills.PeakPerformance, addedNumber: 1 },
      { skill: skills.FireAttack, addedNumber: 2 },
    ],
  },
  {
    name: 'Khezu Greaves S',
    defense: 38,
    decorations: [1, 1],
    skills: [
      { skill: skills.Focus, addedNumber: 1 },
      { skill: skills.Slugger, addedNumber: 1 },
      { skill: skills.RecoverySpeed, addedNumber: 1 },
    ],
  },
  {
    name: 'Tetranodon Greaves S',
    defense: 40,
    decorations: [1],
    skills: [
      { skill: skills.NormalRapidUp, addedNumber: 1 },
      { skill: skills.HungerResistance, addedNumber: 1 },
    ],
  },
  {
    name: 'Ingot Greaves S',
    defense: 40,
    decorations: [1],
    skills: [
      { skill: skills.AttackBoost, addedNumber: 2 },
      { skill: skills.CriticalEye, addedNumber: 2 },
    ],
  },
  {
    name: 'Edel Roots S',
    defense: 40,
    decorations: [3, 1],
    skills: [{ skill: skills.PoisonResistance, addedNumber: 1 }],
  },
  {
    name: 'Rhenopolos Greaves S',
    defense: 42,
    decorations: [1, 1],
    skills: [
      { skill: skills.PierceUp, addedNumber: 1 },
      { skill: skills.TremorResistance, addedNumber: 1 },
    ],
  },
  {
    name: 'Droth Greaves S',
    defense: 42,
    decorations: [2],
    skills: [{ skill: skills.WaterAttack, addedNumber: 3 }],
  },
  {
    name: 'Volvidon Greaves S',
    defense: 50,
    decorations: [1, 1],
    skills: [
      { skill: skills.RapidMorph, addedNumber: 1 },
      { skill: skills.EvadeExtender, addedNumber: 2 },
    ],
  },
  {
    name: 'Ludroth Greaves S',
    defense: 48,
    decorations: [3],
    skills: [{ skill: skills.PowerProlonger, addedNumber: 2 }],
  },
  {
    name: 'Barroth Greaves S',
    defense: 50,
    decorations: [2, 1],
    skills: [
      { skill: skills.Guard, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 1 },
      { skill: skills.OffensiveGuard, addedNumber: 1 },
    ],
  },
  {
    name: 'Bishanten Greaves S',
    defense: 52,
    decorations: [2, 1, 1],
    skills: [{ skill: skills.MaximumMight, addedNumber: 1 }],
  },
  {
    name: 'Pukei-Pukei Greaves S',
    defense: 50,
    decorations: [1, 1, 1],
    skills: [
      { skill: skills.Constitution, addedNumber: 1 },
      { skill: skills.AimBooster, addedNumber: 1 },
    ],
  },
  {
    name: 'Jyuratodus Greaves',
    defense: 48,
    decorations: [2, 1, 1],
    skills: [{ skill: skills.GuardUp, addedNumber: 2 }],
  },
  {
    name: 'Basarios Greaves S',
    defense: 52,
    decorations: [3],
    skills: [
      { skill: skills.LoadShells, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 1 },
    ],
  },
  {
    name: 'Rathian Greaves S',
    defense: 52,
    decorations: [2],
    skills: [
      { skill: skills.BlightResistance, addedNumber: 1 },
      { skill: skills.FreeMeal, addedNumber: 1 },
    ],
  },
  {
    name: 'Chrome Metal Boots',
    defense: 46,
    decorations: [3],
    skills: [{ skill: skills.FlinchFree, addedNumber: 1 }],
  },
  {
    name: 'Dober Greaves',
    defense: 52,
    decorations: [2],
    skills: [
      { skill: skills.DragonAttack, addedNumber: 1 },
      { skill: skills.Focus, addedNumber: 1 },
      { skill: skills.Heroics, addedNumber: 1 },
    ],
  },
  {
    name: 'Shelled Sandals S',
    defense: 52,
    decorations: [1, 1],
    skills: [
      { skill: skills.SpreadUp, addedNumber: 1 },
      { skill: skills.PierceUp, addedNumber: 1 },
    ],
  },
  {
    name: 'Melahoa Roots S',
    defense: 52,
    decorations: [1, 1],
    skills: [
      { skill: skills.RecoveryUp, addedNumber: 1 },
      { skill: skills.RecoverySpeed, addedNumber: 2 },
    ],
  },
  {
    name: 'Death Strench Heel S',
    defense: 52,
    decorations: [1, 1],
    skills: [
      { skill: skills.ProtectivePolish, addedNumber: 1 },
      { skill: skills.RapidMorph, addedNumber: 1 },
    ],
  },
  {
    name: 'Mosgharl Roots S',
    defense: 52,
    decorations: [2, 1],
    skills: [{ skill: skills.RecoilDown, addedNumber: 2 }],
  },
  {
    name: 'Vaik Greaves S',
    defense: 52,
    decorations: [3, 1],
    skills: [{ skill: skills.AmmoUp, addedNumber: 1 }],
  },
  {
    name: 'Makluva Pants S',
    defense: 52,
    decorations: [1, 1],
    skills: [
      { skill: skills.BubblyDance, addedNumber: 1 },
      { skill: skills.SpeedEating, addedNumber: 1 },
    ],
  },
  {
    name: 'Utsushi Hakama (V) S',
    defense: 52,
    decorations: [1],
    skills: [
      { skill: skills.WideRange, addedNumber: 1 },
      { skill: skills.FreeMeal, addedNumber: 1 },
      { skill: skills.GoodLuck, addedNumber: 1 },
    ],
  },
  {
    name: 'Utsushi Hakama (Hidden) S',
    defense: 52,
    decorations: [1, 1],
    skills: [
      { skill: skills.EvadeWindow, addedNumber: 1 },
      { skill: skills.Agitator, addedNumber: 1 },
    ],
  },
  {
    name: 'Remobra Feet S',
    defense: 52,
    decorations: [1, 1],
    skills: [{ skill: skills.WeaknessExploit, addedNumber: 1 }],
  },
  {
    name: 'Somnacanth Greaves S',
    defense: 58,
    decorations: [1, 1],
    skills: [{ skill: skills.DivineBlessing, addedNumber: 2 }],
  },
  {
    name: 'Barioth Greaves S',
    defense: 58,
    decorations: [3, 1],
    skills: [{ skill: skills.QuickSheath, addedNumber: 1 }],
  },
  {
    name: 'Tobi-Kadachi Greaves S',
    defense: 58,
    decorations: [2, 1],
    skills: [
      { skill: skills.Constitution, addedNumber: 1 },
      { skill: skills.CriticalEye, addedNumber: 2 },
    ],
  },
  {
    name: 'Anjanath Greaves S',
    defense: 60,
    decorations: [2],
    skills: [{ skill: skills.MarathonRunner, addedNumber: 2 }],
  },
  {
    name: 'Nargacuga Greaves S',
    defense: 60,
    decorations: [1],
    skills: [
      { skill: skills.EvadeWindow, addedNumber: 2 },
      { skill: skills.CriticalEye, addedNumber: 1 },
    ],
  },
  {
    name: 'Mizutsune Greaves S',
    defense: 60,
    decorations: [3, 1, 1],
    skills: [{ skill: skills.BubblyDance, addedNumber: 1 }],
  },
  {
    name: 'Rathalos Greaves S',
    defense: 62,
    decorations: [1, 1],
    skills: [
      { skill: skills.AttackBoost, addedNumber: 1 },
      { skill: skills.Partbreaker, addedNumber: 1 },
    ],
  },
  {
    name: 'Zinogre Greaves S',
    defense: 62,
    decorations: [1],
    skills: [
      { skill: skills.LatentPower, addedNumber: 1 },
      { skill: skills.Constitution, addedNumber: 2 },
    ],
  },
  {
    name: 'Aelucanth Crura S',
    defense: 62,
    decorations: [1, 1],
    skills: [
      { skill: skills.CriticalEye, addedNumber: 2 },
      { skill: skills.DragonAttack, addedNumber: 1 },
    ],
  },
  {
    name: 'Sinister Greaves S',
    defense: 64,
    decorations: [1, 1],
    skills: [
      { skill: skills.HellfireCloak, addedNumber: 1 },
      { skill: skills.Resentment, addedNumber: 1 },
      { skill: skills.FlinchFree, addedNumber: 1 },
    ],
  },
  {
    name: 'Goss Harag Greaves S',
    defense: 64,
    decorations: [1],
    skills: [
      { skill: skills.PunishingDraw, addedNumber: 1 },
      { skill: skills.Agitator, addedNumber: 3 },
    ],
  },
  {
    name: 'Almudron Greaves S',
    defense: 64,
    decorations: [3, 1],
    skills: [{ skill: skills.RazorSharp, addedNumber: 1 }],
  },
  {
    name: 'Tigrex Greaves S',
    defense: 64,
    decorations: [1],
    skills: [
      { skill: skills.SpeedEating, addedNumber: 2 },
      { skill: skills.MindsEye, addedNumber: 1 },
    ],
  },
  {
    name: 'Diablos Greaves S',
    defense: 64,
    decorations: [2],
    skills: [
      { skill: skills.Guard, addedNumber: 1 },
      { skill: skills.OffensiveGuard, addedNumber: 1 },
    ],
  },
  {
    name: 'Rakna Greaves',
    defense: 66,
    decorations: [1],
    skills: [
      { skill: skills.Constitution, addedNumber: 2 },
      { skill: skills.StaminaSurge, addedNumber: 2 },
    ],
  },
  {
    name: 'Golden Hakama',
    defense: 70,
    decorations: [1, 1],
    skills: [
      { skill: skills.CriticalBoost, addedNumber: 2 },
      { skill: skills.LatentPower, addedNumber: 1 },
    ],
  },
  {
    name: 'Damascus Greaves',
    defense: 68,
    decorations: [1],
    skills: [{ skill: skills.Handicraft, addedNumber: 2 }],
  },
  {
    name: 'Kushala Glare',
    defense: 74,
    decorations: [1],
    skills: [
      { skill: skills.KushalaBlessing, addedNumber: 1 },
      { skill: skills.Handicraft, addedNumber: 1 },
      { skill: skills.PierceUp, addedNumber: 1 },
    ],
  },
  {
    name: 'Mizuha Guards',
    defense: 74,
    decorations: [2],
    skills: [
      { skill: skills.ChameleosBlessing, addedNumber: 1 },
      { skill: skills.EvadeWindow, addedNumber: 1 },
    ],
  },
  {
    name: 'Kaiser Greaves',
    defense: 74,
    decorations: [1],
    skills: [
      { skill: skills.TeostraBlessing, addedNumber: 3 },
      { skill: skills.MastersTouch, addedNumber: 1 },
    ],
  },
  {
    name: 'Bazelgeuse Greaves',
    defense: 72,
    decorations: [2],
    skills: [
      { skill: skills.Artillery, addedNumber: 2 },
      { skill: skills.Guard, addedNumber: 1 },
    ],
  },
  {
    name: 'Foot of Ibushi',
    defense: 66,
    decorations: [],
    skills: [
      { skill: skills.WindAlignment, addedNumber: 1 },
      { skill: skills.Slugger, addedNumber: 1 },
      { skill: skills.GuardUp, addedNumber: 1 },
    ],
  },
  {
    name: 'Foot of Narwa',
    defense: 76,
    decorations: [],
    skills: [
      { skill: skills.ThunderAlignment, addedNumber: 1 },
      { skill: skills.EvadeWindow, addedNumber: 1 },
      { skill: skills.MarathonRunner, addedNumber: 1 },
    ],
  },
];
