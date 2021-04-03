<template>
  <div>
    <b-row>
      <b-col cols="3">{{ armourType }}</b-col>
      <b-col>
        <multiselect
          v-model="armour"
          :options="searchableArmourOptions"
          placeholder="Select one"
          label="name"
          track-by="name"
          :allow-empty="false"
          :internal-search="false"
          :custom-label="customLabel"
          @search-change="searchForSkillOrName"
          selectedLabel=""
          selectLabel=""
          deselectLabel=""
        >
          <template slot="singleLabel" slot-scope="props">
            <div class="option__desc">
              <span class="option__title">
                {{ props.option.name }}
                <span v-if="props.option.decorationsNumber > 0">{{ props.option.decorationsNumber }} Slots</span>
              </span>
              <div class="float-right">
                <span v-for="skill in props.option.skills" :key="skill.index" class="option__title">
                  {{ skill.skill.name }} {{ skill.addedNumber }}
                </span>
              </div>
            </div>
          </template>
          <template slot="option" slot-scope="props">
            <div class="option__desc">
              <span class="option__title">
                {{ props.option.name }}
                <span v-if="props.option.decorationsNumber > 0">{{ props.option.decorationsNumber }} Slots</span>
              </span>
              <div class="float-right">
                <span v-for="skill in props.option.skills" :key="skill.index" class="option__title">
                  {{ skill.skill.name }} {{ skill.addedNumber }}
                </span>
              </div>
            </div>
          </template>
        </multiselect>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col cols="3">{{ armourType }} Slots</b-col>
      <b-col v-for="decoration in armour.decorationsNumber" :key="decoration.index" cols="3">
        {{ decoration }}. Slot (Level {{ armour.slotLevel }})
        <decoration
          ref="form"
          :slotLevel="armour.slotLevel"
          :slotPosition="decoration"
          @slot1Changed="slot1Changed"
          @slot2Changed="slot2Changed"
          @slot3Changed="slot3Changed"
        ></decoration>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { armourType, IArmour, ISkills } from '@/modules/interfaces';
import Decoration from '@/components/Decoration.vue';

@Component({ components: { Decoration } })
export default class Armour extends Vue {
  @Prop() private armourOptions!: IArmour[];
  @Prop() private armourType!: string;

  private armour: IArmour = { name: '', defense: 0, decorationsNumber: 0, slotLevel: 0, skills: [] };
  private decorationSlot1: ISkills = { skill: { name: '', maxNumber: 0 }, addedNumber: 0 };
  private decorationSlot2: ISkills = { skill: { name: '', maxNumber: 0 }, addedNumber: 0 };
  private decorationSlot3: ISkills = { skill: { name: '', maxNumber: 0 }, addedNumber: 0 };

  private get decorationsSlots(): ISkills[] {
    const result: ISkills[] = [];
    if (this.decorationSlot1.skill.name !== '') result.push(this.decorationSlot1);
    if (this.decorationSlot2.skill.name !== '') result.push(this.decorationSlot2);
    if (this.decorationSlot3.skill.name !== '') result.push(this.decorationSlot3);
    return result;
  }

  private searchableArmourOptions = this.armourOptions;

  private customLabel(armour: IArmour): string {
    let skills = '';
    armour.skills.forEach((skill) => {
      skills += ' ' + skill.skill.name;
    });
    return armour.name + skills;
  }

  private searchForSkillOrName(query: string) {
    if (query.length === 0) {
      this.searchableArmourOptions = this.armourOptions;
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const result: IArmour[] = [];
    this.armourOptions.forEach((element) => {
      if (element.name.toLowerCase().includes(lowerCaseQuery)) {
        result.push(element);
      } else {
        element.skills.forEach((skill) => {
          if (skill.skill.name.toLowerCase().includes(lowerCaseQuery)) {
            result.push(element);
          }
        });
      }
    });
    this.searchableArmourOptions = result;
  }

  @Watch('armour')
  armourChanged(val: IArmour, oldVal: IArmour) {
    for (let index = 0; index < oldVal.decorationsNumber; index++) {
      (this.$refs.form as any)[index].clearSlot();
    }
    switch (this.armourType) {
      case armourType.Helmet:
        this.$emit('helmetChanged', val);
        break;
      case armourType.Body:
        this.$emit('bodyChanged', val);
        break;
      case armourType.Gloves:
        this.$emit('glovesChanged', val);
        break;
      case armourType.Belt:
        this.$emit('beltChanged', val);
        break;
      case armourType.Boots:
        this.$emit('bootsChanged', val);
        break;
      default:
        break;
    }
  }

  @Watch('decorationsSlots')
  decorationsSlotsChanged(val: ISkills[]) {
    switch (this.armourType) {
      case armourType.Helmet:
        this.$emit('helmetSlotsChanged', val);
        break;
      case armourType.Body:
        this.$emit('bodySlotsChanged', val);
        break;
      case armourType.Gloves:
        this.$emit('glovesSlotsChanged', val);
        break;
      case armourType.Belt:
        this.$emit('beltSlotsChanged', val);
        break;
      case armourType.Boots:
        this.$emit('bootsSlotsChanged', val);
        break;
      default:
        break;
    }
  }

  private slot1Changed(val: ISkills) {
    this.decorationSlot1 = val;
  }
  private slot2Changed(val: ISkills) {
    this.decorationSlot2 = val;
  }
  private slot3Changed(val: ISkills) {
    this.decorationSlot3 = val;
  }
}
</script>

<style lang="scss" scoped></style>
