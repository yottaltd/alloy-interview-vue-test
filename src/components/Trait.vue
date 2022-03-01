<template>
  <LabelText  v-if="strengthValue" label="Strength" :text="strengthValue" />
  <LabelColouredBar  v-else-if="speedValue" label="Speed" :activeBarWidth="speedValue" />
</template>

<script lang="ts">

import { StrengthValueType } from '@/models/StrengthValueType'
import { TraitModel } from '@/models/TraitModel'
import { TraitGuards } from '@/utils/TraitGuards'
import { computed, ComputedRef, defineComponent, PropType } from 'vue'
import LabelText from '@/components/LabelText.vue'
import { SpeedValueType } from '@/models/SpeedValueType'
import LabelColouredBar from '@/components/LabelColouredBar.vue'

export default defineComponent({
  name: 'Trait',
  components: { LabelText, LabelColouredBar },
  props: {
    trait: {
      type: Object as PropType<TraitModel>,
      required: true
    }
  },
  setup (props) {
    const strengthValue: ComputedRef<string | null> = computed(() => {
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
      return null
    })

    const speedValue: ComputedRef<string | null> = computed(() => {
      if (TraitGuards.isTraitSpeedGuard(props.trait)) {
        switch (props.trait.value) {
          case SpeedValueType.Tortoise:
            return '10%'
          case SpeedValueType.Goat:
            return '30%'
          case SpeedValueType.SpeedOfLight:
            return '60%'
          case SpeedValueType.SpeedOfSound:
            return '100%'
          default:
            throw Error('unknown speed value type')
        }
      }
      return null
    })

    return {
      strengthValue,
      speedValue
    }
  }
})
</script>
