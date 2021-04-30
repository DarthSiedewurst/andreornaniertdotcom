import { IArmour } from './interfaces';
import { skills } from './skills';

export const helmetList: IArmour[] = [
  {
    name: 'Kamura Head Scarf S',
    defense: 30,
    decorations: [1],
    skills: [
      { skill: skills.DivineBlessing, addedNumber: 2 },
      { skill: skills.Resuscitate, addedNumber: 1 },
    ],
  },
  {
    name: 'Leather S',
    defense: 30,
    decorations: [1, 1],
    skills: [
      { skill: skills.Geologist, addedNumber: 1 },
      { skill: skills.HungerResistance, addedNumber: 1 },
    ],
  },
  {
    name: 'Chainmail Headgear S',
    defense: 32,
    decorations: [2],
    skills: [
      { skill: skills.Botanist, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 1 },
    ],
  },
  {
    name: 'Hunters Helm S',
    defense: 32,
    decorations: [2],
    skills: [{ skill: skills.ItemProlonger, addedNumber: 1 }],
  },
  {
    name: 'Alloy Helm S',
    defense: 32,
    decorations: [1],
    skills: [
      { skill: skills.WaterAttack, addedNumber: 1 },
      { skill: skills.ProtectivePolish, addedNumber: 1 },
    ],
  },
  {
    name: 'Bone Helm S',
    defense: 32,
    decorations: [1],
    skills: [
      { skill: skills.StaminaThief, addedNumber: 1 },
      { skill: skills.Partbreaker, addedNumber: 1 },
    ],
  },
  {
    name: 'Skalda Vertex S',
    defense: 32,
    decorations: [2],
    skills: [{ skill: skills.PoisonAttack, addedNumber: 2 }],
  },
  {
    name: 'Bnahabra Hat S',
    defense: 34,
    decorations: [2],
    skills: [
      { skill: skills.PoisonAttack, addedNumber: 1 },
      { skill: skills.RecoilDown, addedNumber: 2 },
    ],
  },
  {
    name: 'Izuchi Helm S',
    defense: 36,
    decorations: [1, 1],
    skills: [{ skill: skills.CriticalEye, addedNumber: 1 }],
  },
  {
    name: 'Baggi Helm S',
    defense: 36,
    decorations: [2, 1],
    skills: [{ skill: skills.IceAttack, addedNumber: 2 }],
  },
  {
    name: 'Kula-Ya-Ku Helm S',
    defense: 38,
    decorations: [1, 1],
    skills: [{ skill: skills.MaximumMight, addedNumber: 1 }],
  },
  {
    name: 'Wroggi Helm S',
    defense: 38,
    decorations: [1],
    skills: [
      { skill: skills.RapidFireUp, addedNumber: 1 },
      { skill: skills.EvadeExtender, addedNumber: 1 },
    ],
  },
  {
    name: 'Arzuros Helm S',
    defense: 36,
    decorations: [1, 1],
    skills: [
      { skill: skills.Fortify, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 1 },
    ],
  },
  {
    name: 'Lagombi Helm S',
    defense: 36,
    decorations: [3],
    skills: [
      { skill: skills.CriticalEye, addedNumber: 1 },
      { skill: skills.IceAttack, addedNumber: 2 },
    ],
  },
  {
    name: 'Aknosom Helm S',
    defense: 38,
    decorations: [2],
    skills: [
      { skill: skills.QuickSheath, addedNumber: 1 },
      { skill: skills.FireAttack, addedNumber: 1 },
    ],
  },
  {
    name: 'Khezu Helm S',
    defense: 38,
    decorations: [1],
    skills: [
      { skill: skills.Focus, addedNumber: 1 },
      { skill: skills.RecoveryUp, addedNumber: 1 },
    ],
  },
  {
    name: 'Tetranodon Helm S',
    defense: 40,
    decorations: [1],
    skills: [
      { skill: skills.NormalRapidUp, addedNumber: 1 },
      { skill: skills.SpeedEating, addedNumber: 1 },
    ],
  },
  {
    name: 'Ingot Helm S',
    defense: 40,
    decorations: [3, 1],
    skills: [{ skill: skills.Windproof, addedNumber: 1 }],
  },
  {
    name: 'Chaos Archbun',
    defense: 40,
    decorations: [1, 1],
    skills: [{ skill: skills.Mushroomancer, addedNumber: 1 }],
  },
  {
    name: 'Edel Vizor S',
    defense: 40,
    decorations: [2, 2],
    skills: [{ skill: skills.PoisonResistance, addedNumber: 2 }],
  },
  {
    name: 'Slagtoth Hood S',
    defense: 42,
    decorations: [3],
    skills: [
      { skill: skills.FreeMeal, addedNumber: 1 },
      { skill: skills.Diversion, addedNumber: 1 },
    ],
  },
  {
    name: 'Rhenopolos Helm S',
    defense: 42,
    decorations: [1],
    skills: [
      { skill: skills.PierceUp, addedNumber: 2 },
      { skill: skills.StunResistance, addedNumber: 1 },
    ],
  },
  {
    name: 'Buffango Mask S',
    defense: 36,
    decorations: [1],
    skills: [{ skill: skills.Bludgeoner, addedNumber: 2 }],
  },
  {
    name: 'Jaggi Mask S',
    defense: 36,
    decorations: [2],
    skills: [{ skill: skills.AffinitySliding, addedNumber: 1 }],
  },
  {
    name: 'Volvidon Helm S',
    defense: 50,
    decorations: [1, 1],
    skills: [
      { skill: skills.ParalysisAttack, addedNumber: 2 },
      { skill: skills.Bludgeoner, addedNumber: 1 },
    ],
  },
  {
    name: 'Ludroth Helm S',
    defense: 48,
    decorations: [1, 1],
    skills: [
      { skill: skills.MarathonRunner, addedNumber: 1 },
      { skill: skills.PeakPerformance, addedNumber: 1 },
    ],
  },
  {
    name: 'Barroth Helm S',
    defense: 50,
    decorations: [2, 1],
    skills: [
      { skill: skills.AttackBoost, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 1 },
      { skill: skills.OffensiveGuard, addedNumber: 1 },
    ],
  },
  {
    name: 'Bishanten Helm S',
    defense: 52,
    decorations: [1],
    skills: [
      { skill: skills.ItemProlonger, addedNumber: 1 },
      { skill: skills.WideRange, addedNumber: 1 },
      { skill: skills.StunResistance, addedNumber: 1 },
    ],
  },
  {
    name: 'Pukei-Pukei Helm S',
    defense: 50,
    decorations: [2],
    skills: [
      { skill: skills.SpecialAmmoBoost, addedNumber: 1 },
      { skill: skills.SpareShot, addedNumber: 1 },
    ],
  },
  {
    name: 'Jyuratodus Helm',
    defense: 48,
    decorations: [2, 1],
    skills: [
      { skill: skills.OffensiveGuard, addedNumber: 1 },
      { skill: skills.EvadeExtender, addedNumber: 1 },
    ],
  },
  {
    name: 'Basarios Helm S',
    defense: 52,
    decorations: [2, 1],
    skills: [
      { skill: skills.LoadShells, addedNumber: 1 },
      { skill: skills.DefenseBoost, addedNumber: 2 },
    ],
  },
  {
    name: 'Rathian Helm S',
    defense: 52,
    decorations: [2, 1],
    skills: [{ skill: skills.BlightResistance, addedNumber: 1 }],
  },
  {
    name: 'Skull Visage S',
    defense: 50,
    decorations: [3, 2],
    skills: [{ skill: skills.Fortify, addedNumber: 1 }],
  },
  {
    name: 'Dober Helm',
    defense: 52,
    decorations: [1, 1],
    skills: [
      { skill: skills.DragonAttack, addedNumber: 1 },
      { skill: skills.AttackBoost, addedNumber: 1 },
      { skill: skills.Heroics, addedNumber: 1 },
    ],
  },
  {
    name: 'S. Studded Hat S',
    defense: 52,
    decorations: [2, 1],
    skills: [{ skill: skills.AimBooster, addedNumber: 2 }],
  },
  {
    name: 'Melahoa Hat S',
    defense: 52,
    decorations: [2, 2],
    skills: [{ skill: skills.ParalysisResistance, addedNumber: 2 }],
  },
  {
    name: 'Death Strench Brain S',
    defense: 52,
    decorations: [2],
    skills: [{ skill: skills.ProtectivePolish, addedNumber: 1 }],
  },
  {
    name: 'Mosgharl Vizor S',
    defense: 52,
    decorations: [2, 2],
    skills: [{ skill: skills.BlastResistance, addedNumber: 2 }],
  },
  {
    name: 'Vaik Helm S',
    defense: 52,
    decorations: [2, 1],
    skills: [{ skill: skills.AmmoUp, addedNumber: 2 }],
  },
  {
    name: 'Makluva Hood S',
    defense: 52,
    decorations: [2, 2],
    skills: [{ skill: skills.SleepResistance, addedNumber: 1 }],
  },
  {
    name: 'Utsushi Mask (V) S',
    defense: 52,
    decorations: [1],
    skills: [
      { skill: skills.SpeedEating, addedNumber: 1 },
      { skill: skills.FreeMeal, addedNumber: 1 },
      { skill: skills.GoodLuck, addedNumber: 1 },
    ],
  },
  {
    name: 'Utsushi Mask (Hidden) S',
    defense: 52,
    decorations: [1],
    skills: [
      { skill: skills.RazorSharp, addedNumber: 2 },
      { skill: skills.SpareShot, addedNumber: 2 },
      { skill: skills.WirebugWhisperer, addedNumber: 1 },
    ],
  },
  {
    name: 'Remobra Headgear S',
    defense: 52,
    decorations: [2],
    skills: [{ skill: skills.Windproof, addedNumber: 2 }],
  },
  {
    name: 'Somnacanth Helm S',
    defense: 58,
    decorations: [2, 1],
    skills: [{ skill: skills.SleepAttack, addedNumber: 1 }],
  },
  {
    name: 'Barioth Helm S',
    defense: 58,
    decorations: [1],
    skills: [{ skill: skills.CriticalDraw, addedNumber: 2 }],
  },
  {
    name: 'Tobi-Kadachi Helm S',
    defense: 58,
    decorations: [1, 1],
    skills: [
      { skill: skills.JumpMaster, addedNumber: 1 },
      { skill: skills.Constitution, addedNumber: 1 },
      { skill: skills.CriticalEye, addedNumber: 1 },
    ],
  },
  {
    name: 'Anjanath Helm S',
    defense: 60,
    decorations: [2],
    skills: [
      { skill: skills.Focus, addedNumber: 1 },
      { skill: skills.Slugger, addedNumber: 1 },
    ],
  },
  {
    name: 'Nargacuga Helm S',
    defense: 60,
    decorations: [3],
    skills: [{ skill: skills.EvadeWindow, addedNumber: 1 }],
  },
  {
    name: 'Mizutsune Helm S',
    defense: 60,
    decorations: [2, 1],
    skills: [{ skill: skills.Resuscitate, addedNumber: 1 }],
  },
  {
    name: 'Rathalos Helm S',
    defense: 62,
    decorations: [1, 1],
    skills: [
      { skill: skills.AttackBoost, addedNumber: 1 },
      { skill: skills.Partbreaker, addedNumber: 1 },
    ],
  },
  {
    name: 'Zinogre Helm S',
    defense: 62,
    decorations: [1],
    skills: [
      { skill: skills.LatentPower, addedNumber: 1 },
      { skill: skills.WeaknessExploit, addedNumber: 1 },
    ],
  },
  {
    name: 'Aelucanth Vertex S',
    defense: 62,
    decorations: [1],
    skills: [{ skill: skills.CriticalElement, addedNumber: 2 }],
  },
  {
    name: 'Brigade Lobos S',
    defense: 62,
    decorations: [3, 1],
    skills: [{ skill: skills.Botanist, addedNumber: 2 }],
  },
  {
    name: 'Mighty Bow Feather',
    defense: 56,
    decorations: [],
    skills: [{ skill: skills.BowChargePlus, addedNumber: 1 }],
  },
  {
    name: 'Gargwa Mask S',
    defense: 54,
    decorations: [],
    skills: [
      { skill: skills.LeapOfFaith, addedNumber: 1 },
      { skill: skills.GoodLuck, addedNumber: 1 },
    ],
  },
  {
    name: 'Sinister Helm S',
    defense: 64,
    decorations: [2],
    skills: [
      { skill: skills.Resentment, addedNumber: 1 },
      { skill: skills.Handicraft, addedNumber: 1 },
      { skill: skills.FlinchFree, addedNumber: 1 },
    ],
  },
  {
    name: 'Goss Harag Helm S',
    defense: 64,
    decorations: [1, 1],
    skills: [
      { skill: skills.CriticalDraw, addedNumber: 1 },
      { skill: skills.Agitator, addedNumber: 1 },
    ],
  },
  {
    name: 'Almudron Helm S',
    defense: 64,
    decorations: [2, 2],
    skills: [{ skill: skills.RapidMorph, addedNumber: 2 }],
  },
  {
    name: 'Tigrex Helm S',
    defense: 64,
    decorations: [2, 1],
    skills: [
      { skill: skills.Earplugs, addedNumber: 1 },
      { skill: skills.SpeedEating, addedNumber: 1 },
    ],
  },
  {
    name: 'Diablos Helm S',
    defense: 64,
    decorations: [2],
    skills: [
      { skill: skills.Guard, addedNumber: 1 },
      { skill: skills.StaminaSurge, addedNumber: 1 },
    ],
  },
  {
    name: 'Rakna Helm',
    defense: 66,
    decorations: [1, 1],
    skills: [
      { skill: skills.SpreadUp, addedNumber: 1 },
      { skill: skills.ReloadSpeed, addedNumber: 1 },
    ],
  },
  {
    name: 'Golden Headdress',
    defense: 70,
    decorations: [2, 1],
    skills: [
      { skill: skills.Heroics, addedNumber: 2 },
      { skill: skills.MaximumMight, addedNumber: 1 },
    ],
  },
  {
    name: 'Damascus Helm',
    defense: 68,
    decorations: [],
    skills: [
      { skill: skills.TremorResistance, addedNumber: 2 },
      { skill: skills.Earplugs, addedNumber: 2 },
    ],
  },
  {
    name: 'Flame Seal',
    defense: 56,
    decorations: [],
    skills: [{ skill: skills.CriticalEye, addedNumber: 4 }],
  },
  {
    name: 'Kushala Glare',
    defense: 74,
    decorations: [1],
    skills: [
      { skill: skills.Handicraft, addedNumber: 2 },
      { skill: skills.NormalRapidUp, addedNumber: 2 },
    ],
  },
  {
    name: 'Mizuha Cap',
    defense: 74,
    decorations: [1],
    skills: [
      { skill: skills.MindsEye, addedNumber: 2 },
      { skill: skills.Ballistics, addedNumber: 2 },
      { skill: skills.EvadeWindow, addedNumber: 2 },
    ],
  },
  {
    name: 'Kaiser Crown',
    defense: 74,
    decorations: [1],
    skills: [
      { skill: skills.CriticalEye, addedNumber: 3 },
      { skill: skills.CriticalBoost, addedNumber: 1 },
    ],
  },
  {
    name: 'Bazelgeuse Helm',
    defense: 72,
    decorations: [2],
    skills: [
      { skill: skills.Artillery, addedNumber: 1 },
      { skill: skills.Guard, addedNumber: 1 },
    ],
  },
  {
    name: 'Ibushis Helm',
    defense: 66,
    decorations: [],
    skills: [
      { skill: skills.WindAlignment, addedNumber: 1 },
      { skill: skills.Focus, addedNumber: 1 },
      { skill: skills.EvadeExtender, addedNumber: 1 },
    ],
  },
  {
    name: 'Narwas Helm',
    defense: 76,
    decorations: [],
    skills: [
      { skill: skills.ThunderAlignment, addedNumber: 1 },
      { skill: skills.RapidMorph, addedNumber: 1 },
      { skill: skills.OffensiveGuard, addedNumber: 1 },
    ],
  },
  {
    name: 'Jelly Hat S',
    defense: 62,
    decorations: [3],
    skills: [
      { skill: skills.Partbreaker, addedNumber: 1 },
      { skill: skills.DivineBlessing, addedNumber: 1 },
    ],
  },
];
