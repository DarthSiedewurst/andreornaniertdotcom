<template>
  <b-container class="mt-3">
    <b-row>
      <b-col cols="9">
        <h1>Armour</h1>
        <b-card>
          <armour
            :armourOptions="helmetList"
            :armourType="armourTypeConst.Helmet"
            @helmetChanged="helmetChanged"
            @helmetSlotsChanged="helmetSlotsChanged"
          ></armour>
        </b-card>
        <b-card class="mt-3">
          <armour
            :armourOptions="bodyList"
            :armourType="armourTypeConst.Body"
            @bodyChanged="bodyChanged"
            @bodySlotsChanged="bodySlotsChanged"
          ></armour>
        </b-card>
        <b-card class="mt-3">
          <armour
            :armourOptions="glovesList"
            :armourType="armourTypeConst.Gloves"
            @glovesChanged="glovesChanged"
            @glovesSlotsChanged="glovesSlotsChanged"
          ></armour>
        </b-card>
        <b-card class="mt-3">
          <armour
            :armourOptions="beltList"
            :armourType="armourTypeConst.Belt"
            @beltChanged="beltChanged"
            @beltSlotsChanged="beltSlotsChanged"
          ></armour>
        </b-card>
        <b-card class="mt-3">
          <armour
            :armourOptions="bootsList"
            :armourType="armourTypeConst.Boots"
            @bootsChanged="bootsChanged"
            @bootsSlotsChanged="bootsSlotsChanged"
          ></armour>
        </b-card>
        <b-card class="mt-3">
          <b-row>
            <b-col cols="3">Weapon Slots</b-col>
            <b-col v-for="(decoration, index) in 3" :key="index" cols="3">
              {{ index + 1 }}. Slot
              <decoration
                ref="form"
                :decoration="3"
                :slotPosition="index"
                @slot1Changed="weaponSlot1Changed"
                @slot2Changed="weaponSlot2Changed"
                @slot3Changed="weaponSlot3Changed"
              ></decoration> </b-col
          ></b-row>
        </b-card>
        <b-card class="mt-3">
          <b-row>
            <b-col cols="3">Talisman Slots</b-col>
            <b-col v-for="(decoration, index) in 3" :key="index" cols="3">
              {{ index + 1 }}. Slot
              <decoration
                ref="form"
                :decoration="3"
                :slotPosition="index"
                @slot1Changed="talismanSlot1Changed"
                @slot2Changed="talismanSlot2Changed"
                @slot3Changed="talismanSlot3Changed"
              ></decoration> </b-col
          ></b-row>
          <b-row class="mt-3">
            <b-col cols="3">Talisman Skills</b-col>
            <b-col
              ><talisman-skills
                @skill1Changed="talismanSkill1Changed"
                @skill2Changed="talismanSkill2Changed"
              ></talisman-skills
            ></b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col>
        <h1>Status</h1>
        <b-card>
          <status :skills="skills"></status>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Armour from '@/components/Armour.vue';
import Status from '@/components/Status.vue';
import { helmetList } from '@/modules/helmet';
import { bodyList } from '@/modules/body';
import { glovesList } from '@/modules/gloves';
import { beltList } from '@/modules/belt';
import { bootsList } from '@/modules/boots';
import { armourType, IArmour, ISkills } from '@/modules/interfaces';
import Decoration from '@/components/Decoration.vue';
import TalismanSkills from '@/components/TalismanSkills.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { Armour, Status, Decoration, TalismanSkills },
})
export default class Home extends Vue {
  private helmetList: IArmour[] = helmetList;
  private bodyList: IArmour[] = bodyList;
  private glovesList: IArmour[] = glovesList;
  private beltList: IArmour[] = beltList;
  private bootsList: IArmour[] = bootsList;

  private helmetSkills: ISkills[] = [];
  private bodySkills: ISkills[] = [];
  private glovesSkills: ISkills[] = [];
  private beltSkills: ISkills[] = [];
  private bootsSkills: ISkills[] = [];

  private decorationsHelmet: ISkills[] = [];
  private decorationsBody: ISkills[] = [];
  private decorationsGloves: ISkills[] = [];
  private decorationsBelt: ISkills[] = [];
  private decorationsBoots: ISkills[] = [];

  private weaponDecorationSlot1: ISkills = {
    skill: { name: '', maxNumber: 0 },
    addedNumber: 0,
  };
  private weaponDecorationSlot2: ISkills = {
    skill: { name: '', maxNumber: 0 },
    addedNumber: 0,
  };
  private weaponDecorationSlot3: ISkills = {
    skill: { name: '', maxNumber: 0 },
    addedNumber: 0,
  };
  private talismanDecorationSlot1: ISkills = {
    skill: { name: '', maxNumber: 0 },
    addedNumber: 0,
  };
  private talismanDecorationSlot2: ISkills = {
    skill: { name: '', maxNumber: 0 },
    addedNumber: 0,
  };
  private talismanDecorationSlot3: ISkills = {
    skill: { name: '', maxNumber: 0 },
    addedNumber: 0,
  };

  private talismanSkill1: ISkills = {
    skill: { name: '', maxNumber: 0 },
    addedNumber: 0,
  };
  private talismanSkill2: ISkills = {
    skill: { name: '', maxNumber: 0 },
    addedNumber: 0,
  };

  private get armourTypeConst() {
    return armourType;
  }

  private get skills(): ISkills[] {
    let skills: ISkills[] = [];
    skills = this.fillSkillList(skills, this.helmetSkills);
    skills = this.fillSkillList(skills, this.bodySkills);
    skills = this.fillSkillList(skills, this.glovesSkills);
    skills = this.fillSkillList(skills, this.beltSkills);
    skills = this.fillSkillList(skills, this.bootsSkills);

    skills = this.fillSkillList(skills, this.decorationsHelmet);
    skills = this.fillSkillList(skills, this.decorationsBody);
    skills = this.fillSkillList(skills, this.decorationsGloves);
    skills = this.fillSkillList(skills, this.decorationsBelt);
    skills = this.fillSkillList(skills, this.decorationsBoots);

    skills = this.fillSkillList(skills, this.weaponDecorationsSlots);
    skills = this.fillSkillList(skills, this.talismanDecorationsSlots);
    skills = this.fillSkillList(skills, this.talismanSkills);
    return skills;
  }

  private fillSkillList(newSkillList: ISkills[], skillList: ISkills[]): ISkills[] {
    const newSkillListCopy: ISkills[] = JSON.parse(JSON.stringify(newSkillList));
    const skillListCopy: ISkills[] = JSON.parse(JSON.stringify(skillList));
    if (newSkillListCopy.length === 0) {
      skillListCopy.forEach((element) => newSkillListCopy.push(Object.assign({}, element)));
    } else {
      skillListCopy.forEach((newElement) => {
        let alreadyIncluded = false;
        newSkillListCopy.forEach((element) => {
          if (element.skill.name === newElement.skill.name) {
            element.addedNumber += newElement.addedNumber;
            alreadyIncluded = true;
          }
        });
        if (!alreadyIncluded) newSkillListCopy.push(newElement);
        alreadyIncluded = false;
      });
    }
    return newSkillListCopy;
  }

  private helmetChanged(val: IArmour): void {
    this.helmetSkills = val.skills;
  }
  private bodyChanged(val: IArmour): void {
    this.bodySkills = val.skills;
  }
  private glovesChanged(val: IArmour): void {
    this.glovesSkills = val.skills;
  }
  private beltChanged(val: IArmour): void {
    this.beltSkills = val.skills;
  }
  private bootsChanged(val: IArmour): void {
    this.bootsSkills = val.skills;
  }

  private helmetSlotsChanged(val: ISkills[]): void {
    this.decorationsHelmet = val;
  }
  private bodySlotsChanged(val: ISkills[]): void {
    this.decorationsBody = val;
  }
  private glovesSlotsChanged(val: ISkills[]): void {
    this.decorationsGloves = val;
  }
  private beltSlotsChanged(val: ISkills[]): void {
    this.decorationsBelt = val;
  }
  private bootsSlotsChanged(val: ISkills[]): void {
    this.decorationsBoots = val;
  }

  private get weaponDecorationsSlots(): ISkills[] {
    const result: ISkills[] = [];
    if (this.weaponDecorationSlot1.skill.name !== '') result.push(this.weaponDecorationSlot1);
    if (this.weaponDecorationSlot2.skill.name !== '') result.push(this.weaponDecorationSlot2);
    if (this.weaponDecorationSlot3.skill.name !== '') result.push(this.weaponDecorationSlot3);
    return result;
  }
  private weaponSlot1Changed(val: ISkills) {
    this.weaponDecorationSlot1 = val;
  }
  private weaponSlot2Changed(val: ISkills) {
    this.weaponDecorationSlot2 = val;
  }
  private weaponSlot3Changed(val: ISkills) {
    this.weaponDecorationSlot3 = val;
  }

  private get talismanDecorationsSlots(): ISkills[] {
    const result: ISkills[] = [];
    if (this.talismanDecorationSlot1.skill.name !== '') result.push(this.talismanDecorationSlot1);
    if (this.talismanDecorationSlot2.skill.name !== '') result.push(this.talismanDecorationSlot2);
    if (this.talismanDecorationSlot3.skill.name !== '') result.push(this.talismanDecorationSlot3);
    return result;
  }
  private talismanSlot1Changed(val: ISkills) {
    this.talismanDecorationSlot1 = val;
  }
  private talismanSlot2Changed(val: ISkills) {
    this.talismanDecorationSlot2 = val;
  }
  private talismanSlot3Changed(val: ISkills) {
    this.talismanDecorationSlot3 = val;
  }

  private get talismanSkills(): ISkills[] {
    const result: ISkills[] = [];
    if (this.talismanSkill1.skill.name !== '') result.push(this.talismanSkill1);
    if (this.talismanSkill2.skill.name !== '') result.push(this.talismanSkill2);
    return result;
  }

  private talismanSkill1Changed(val: ISkills) {
    this.talismanSkill1 = val;
  }

  private talismanSkill2Changed(val: ISkills) {
    this.talismanSkill2 = val;
  }
}
</script>

<style lang="scss" scoped></style>
