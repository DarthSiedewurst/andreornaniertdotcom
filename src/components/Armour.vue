<template>
  <b-row>
    <b-col cols="8">
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
    <b-col v-for="decoration in armour.decorationsNumber" :key="decoration.index">
      <decoration></decoration>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { armourType, IArmour, ISkills } from '@/modules/interfaces';
import { decorationsList } from '@/modules/decorations';
import Decoration from '@/components/Decoration.vue';

@Component({ components: { Decoration } })
export default class Armour extends Vue {
  @Prop() private armourOptions!: IArmour[];
  @Prop() private armourType!: string;

  private armour: IArmour = { name: '', defense: 0, decorationsNumber: 0, slotLevel: 0, skills: [] };

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
  armourChanged(val: IArmour) {
    switch (this.armourType) {
      case armourType.Helmet:
        this.$emit('helmetChanged', val);
        break;
      case armourType.Body:
        this.$emit('bodyChanged', val);
        break;
      default:
        break;
    }
  }
}
</script>

<style lang="scss" scoped></style>
