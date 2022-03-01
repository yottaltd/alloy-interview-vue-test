<template>
  <div class="label-coloured-bar">
    <p class="label-coloured-bar__label">{{ label }}</p>
    <div class="label-coloured-bar__bar" >
      <div :style="activeBarStyle"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'

export default defineComponent({
  name: 'LabelColouredBar',
  props: {
    label: {
      type: String,
      required: true
    },
    activeBarWidth: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const activeBarStyle: ComputedRef<Record<string, string> | undefined> = computed(() => {
      return {
        width: props.activeBarWidth,
        float: 'left',
        backgroundColor: 'red',
        height: '100%'
      }
    })
    return {
      activeBarStyle
    }
  }

})

</script>

<style scoped lang="less">
.label-coloured-bar {
  display: block;
  margin-bottom: 20px;

  &__label {
    display: block;
    font-size: 16px;
    line-height: 20px;
  }

  &__bar {
    width: 100%;
    display: block;
    background-color: green;
    height: 40px;
  }

}
</style>
