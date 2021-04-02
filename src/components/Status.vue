<template>
  <div>
    <div v-for="skill in skills" :key="skill.index">
      {{ skill.skill.name }} : {{ skill.addedNumber }} / {{ skill.skill.maxNumber }}
    </div>
  </div>
</template>

<script lang="ts">
import { ISkills } from '@/modules/interfaces';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Status extends Vue {
  @Prop() private skills!: ISkills[];
}
</script>

<style lang="scss" scoped></style>
