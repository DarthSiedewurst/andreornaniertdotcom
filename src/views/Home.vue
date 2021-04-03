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
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { Armour, Status },
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
}
</script>

<style lang="scss" scoped></style>
