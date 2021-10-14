<template>
  <div class="label-text">
    <p class="label-text__label">{{ label }}</p>
    <p class="label-text__text">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LabelText',
  props: {
    label: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="less">
.label-text {
  display: block;
  margin-bottom: 20px;

  &__label {
    display: block;
    font-size: 16px;
    line-height: 20px;
  }

  &__text {
    display: block;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
}
</style>
