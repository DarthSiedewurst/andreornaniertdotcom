<template>
  <div>
    <multiselect
      v-model="decoration"
      :options="decorationsList"
      placeholder="Select one"
      label="skill"
      track-by="skill"
      :allow-empty="false"
      :internal-search="false"
      selectedLabel=""
      selectLabel=""
      deselectLabel=""
    ></multiselect>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { decorationsList } from '@/modules/decorations';
import { ISkills } from '@/modules/interfaces';

@Component({})
export default class Decoration extends Vue {
  private decorationsList: ISkills[] = decorationsList;
  private decoration: ISkills = { skill: { name: '', maxNumber: 0 }, addedNumber: 0 };
}
</script>

<style lang="scss" scoped></style>
