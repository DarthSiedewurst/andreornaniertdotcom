<template>
  <div>
    <b-row>
      <b-col
        ><multiselect
          v-model="skill1"
          :options="skills"
          placeholder="Select one"
          :allow-empty="true"
          label="name"
          :internal-search="true"
          selectedLabel=""
          selectLabel=""
          deselectLabel=""
        ></multiselect
      ></b-col>
      <b-col>
        <b-form-radio-group v-model="addedSkill1Number" :options="addedNumber" class="mb-3"></b-form-radio-group>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col
        ><multiselect
          v-model="skill2"
          :options="skills"
          placeholder="Select one"
          :allow-empty="true"
          label="name"
          :internal-search="true"
          selectedLabel=""
          selectLabel=""
          deselectLabel=""
        ></multiselect
      ></b-col>
      <b-col>
        <b-form-radio-group v-model="addedSkill2Number" :options="addedNumber" class="mb-3"></b-form-radio-group>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { ISkill, ISkills } from '@/modules/interfaces';
import { skills } from '@/modules/skills';
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({})
export default class TalismanSkills extends Vue {
  private skills: ISkill[] = Object.values(skills);

  private skill1: ISkill = { name: '', maxNumber: 0 };
  private skill2: ISkill = { name: '', maxNumber: 0 };

  private addedSkill1Number = 0;
  private addedSkill2Number = 0;

  private addedNumber: number[] = [1, 2, 3];

  private get skill1Changed() {
    return JSON.stringify(this.skill1) + this.addedSkill1Number;
  }
  private get skill2Changed() {
    return JSON.stringify(this.skill2) + this.addedSkill2Number;
  }

  @Watch('skill1Changed')
  private emitSkill1() {
    const skills: ISkills = { skill: { name: '', maxNumber: 0 }, addedNumber: 0 };

    if (this.skill1 !== null && this.addedSkill1Number !== 0) {
      skills.skill = this.skill1;
      skills.addedNumber = this.addedSkill1Number;
    }

    this.$emit('skill1Changed', skills);
  }

  @Watch('skill2Changed')
  private emitSkill2() {
    const skills: ISkills = { skill: { name: '', maxNumber: 0 }, addedNumber: 0 };
    skills.skill = this.skill2;
    skills.addedNumber = this.addedSkill2Number;
    this.$emit('skill2Changed', skills);
  }
}
</script>

<style lang="scss" scoped></style>
