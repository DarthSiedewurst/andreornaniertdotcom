<template>
  <div>
    <multiselect
      v-model="decorationSlot"
      :options="decorationsList()"
      placeholder="Select one"
      label="skill"
      :custom-label="customLabel"
      track-by="skill"
      :allow-empty="true"
      :internal-search="true"
      selectedLabel=""
      selectLabel=""
      deselectLabel=""
    ></multiselect>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { decorationsLevel1List, decorationsLevel2List, decorationsLevel3List } from '@/modules/decorations';
import { ISkills } from '@/modules/interfaces';

@Component({})
export default class Decoration extends Vue {
  @Prop() private decoration!: number;
  @Prop() private slotPosition!: number;

  private decorationsList(): ISkills[] {
    let result: ISkills[] = [];
    switch (this.decoration) {
      case 1:
        result = decorationsLevel1List;
        break;
      case 2:
        result = decorationsLevel2List;
        break;
      case 3:
        result = decorationsLevel3List;
        break;
      default:
        break;
    }
    return result;
  }
  private decorationSlot: ISkills = { skill: { name: '', maxNumber: 0 }, addedNumber: 0 };

  private customLabel(skill: ISkills): string {
    return skill.skill.name;
  }

  @Watch('decorationSlot')
  armourChanged(val: ISkills) {
    if (val === null) val = { skill: { name: '', maxNumber: 0 }, addedNumber: 0 };
    switch (this.slotPosition) {
      case 0:
        this.$emit('slot1Changed', val);
        break;
      case 1:
        this.$emit('slot2Changed', val);
        break;
      case 2:
        this.$emit('slot3Changed', val);
        break;
      default:
        break;
    }
  }

  public clearSlot() {
    this.decorationSlot = { skill: { name: '', maxNumber: 0 }, addedNumber: 0 };
    this.armourChanged({ skill: { name: '', maxNumber: 0 }, addedNumber: 0 });
  }
}
</script>

<style lang="scss" scoped></style>
