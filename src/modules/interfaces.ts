export interface IArmour {
  name: string;
  defense: number;
  decorationsNumber: number;
  slotLevel: number;
  skills: ISkills[];
}
export interface ISkill {
  name: string;
  maxNumber: number;
}

export interface ISkills {
  skill: ISkill;
  addedNumber: number;
}

export const armourType = {
  Helmet: 'helmet',
  Body: 'body',
};
