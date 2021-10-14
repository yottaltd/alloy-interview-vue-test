<template>
  <div class="trait">
    {{ trait.type }}
  </div>
</template>

<script lang="ts">
import { TraitModel } from '@/models/TraitModel'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Trait',
  props: {
    trait: {
      type: Object as PropType<TraitModel>,
      required: true
    }
  }
})
</script>

<style lang="less">
.trait {
  display: block;
}
</style>
