/* eslint-disable */
export interface IArmour {
  name: string;
  defense: number;
  decorations: number[];
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
  Helmet: 'Helmet',
  Body: 'Body',
  Gloves: ' Gloves',
  Belt: ' Belt',
  Boots: 'Boots',
};
