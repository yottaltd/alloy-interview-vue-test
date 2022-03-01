<template>
  <LabelText class="trait" v-if="strengthValue" label="Strength" :text="strengthValue" />
  <div class="trait" v-else-if="speedValue">
    <p>Speed</p>
    <div class="speed" >
      <div :style="speedValue"/>
    </div>
  </div>
</template>

<script lang="ts">

import { StrengthValueType } from '@/models/StrengthValueType'
import { TraitModel } from '@/models/TraitModel'
import { TraitGuards } from '@/utils/TraitGuards'
import { computed, ComputedRef, defineComponent, PropType } from 'vue'
import LabelText from '@/components/LabelText.vue'
import { SpeedValueType } from '@/models/SpeedValueType'

export default defineComponent({
  name: 'Trait',
  components: { LabelText },
  props: {
    trait: {
      type: Object as PropType<TraitModel>,
      required: true
    }
  },
  setup (props) {
    const strengthValue: ComputedRef<string | undefined> = computed(() => {
      if (TraitGuards.isTraitStrengthGuard(props.trait)) {
        switch (props.trait.value) {
          case StrengthValueType.Weak:
            return '💪'
          case StrengthValueType.Average:
            return '💪💪'
          case StrengthValueType.SuperStrong:
            return '💪💪💪'
        }
      }
      return undefined
    })

    const speedValue: ComputedRef<Record<string, string> | undefined> = computed(() => {
      if (TraitGuards.isTraitSpeedGuard(props.trait)) {
        let width = ''
        switch (props.trait.value) {
          case SpeedValueType.Tortoise:
            width = '10%'
            break
          case SpeedValueType.Goat:
            width = '30%'
            break
          case SpeedValueType.SpeedOfLight:
            width = '60%'
            break
          case SpeedValueType.SpeedOfSound:
            width = '100%'
            break
          default:
            throw Error('unknown speed value type')
        }

        return {
          width,
          float: 'left',
          backgroundColor: 'red',
          height: '100%'
        }
      }
      return undefined
    })

    return {
      strengthValue,
      speedValue
    }
  }
})
</script>
<style lang="less">
.trait {
  display: block;
  margin-bottom:10px;
}
.speed {
  width: 100%;
  display: block;
  background-color: green;
  height: 40px;
}
</style>
