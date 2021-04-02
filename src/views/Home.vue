<template>
  <b-container class="mt-5">
    <b-row>
      <b-col cols="10">
        <h1>Armour</h1>
        <armour
          :armourOptions="helmetList"
          :armourType="armourTypeConst.Helmet"
          @helmetChanged="helmetChanged"
        ></armour>
        <armour :armourOptions="bodyList" :armourType="armourTypeConst.Body" @bodyChanged="bodyChanged"></armour>
      </b-col>
      <b-col>
        <h1>Status</h1>
        <status :skills="skills"></status
      ></b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Armour from '@/components/Armour.vue';
import Status from '@/components/Status.vue';
import { bodyList, helmetList } from '@/modules/armour';
import { armourType, IArmour, ISkills } from '@/modules/interfaces';
import { skills } from '@/modules/skills';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { Armour, Status },
})
export default class Home extends Vue {
  private helmetList: IArmour[] = helmetList;
  private bodyList: IArmour[] = bodyList;

  private helmetSkills: ISkills[] = [];
  private bodySkills: ISkills[] = [];

  private get armourTypeConst() {
    return armourType;
  }

  private get skills(): ISkills[] {
    let skills: ISkills[] = [];
    this.helmetSkills.forEach((element) => skills.push(Object.assign({}, element)));
    skills = this.fillSkillList(skills, this.bodySkills);
    return skills;
  }

  private fillSkillList(newSkillList: ISkills[], skillList: ISkills[]): ISkills[] {
    if (newSkillList.length === 0) {
      skillList.forEach((element) => newSkillList.push(Object.assign({}, element)));
    } else {
      skillList.forEach((newElement) => {
        let alreadyIncluded = false;
        newSkillList.forEach((element) => {
          if (element.skill.name === newElement.skill.name) {
            element.addedNumber += newElement.addedNumber;
            alreadyIncluded = true;
          }
        });
        if (!alreadyIncluded) newSkillList.push(newElement);
        alreadyIncluded = false;
      });
    }
    return newSkillList;
  }

  private helmetChanged(val: IArmour): void {
    this.helmetSkills = val.skills;
  }

  private bodyChanged(val: IArmour): void {
    this.bodySkills = val.skills;
  }
}
</script>

<style lang="scss" scoped></style>
