<template>
  <div class="label-image">
    <p class="label-image__label">{{ label }}</p>
    <img class="label-image__image" :src="image" alt="Photo of the character" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LabelImage',
  props: {
    label: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="less">
.label-image {
  display: block;
  margin-bottom: 20px;

  &__label {
    display: block;
    font-size: 16px;
    line-height: 20px;
  }

  &__image {
    display: block;
    max-height: 300px;
    object-fit: cover;
    margin-top: 5px;
  }
}
</style>
