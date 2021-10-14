<template>
  <router-link class="character-avatar" :to="route" :title="name">
    <img class="character-avatar__image" :src="image" :alt="name" width="150" height="130" />
    <span class="character-avatar__name">{{ name }}</span>
  </router-link>
</template>

<script lang="ts">
import { CharacterModel } from '@/models/CharacterModel'
import { computed, ComputedRef, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'CharacterAvatar',
  props: {
    character: {
      type: Object as PropType<CharacterModel>,
      required: true
    }
  },
  setup (props) {
    const image: ComputedRef<string> = computed(() => props.character.image)
    const name: ComputedRef<string> = computed(() => props.character.name)
    const route: ComputedRef<string> = computed(() => `/character/${props.character.id}`)

    return {
      image,
      name,
      route
    }
  }
})
</script>

<style scoped lang="less">
.character-avatar {
  display: block;
  width: 150px;
  height: 150px;
  overflow: hidden;
  color: #dc3d00;

  &__image {
    display: block;
    object-fit: cover;
  }

  &__name {
    display: block;
    height: 20px;
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
  }
}
</style>
