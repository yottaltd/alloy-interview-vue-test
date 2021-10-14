<template>
  <div id="home">
    <CharacterAvatar v-for="char in characters" :key="char.id" :character="char" />
  </div>
</template>

<script lang="ts">
import CharacterAvatar from '@/components/CharacterAvatar.vue'
import { CharacterModel } from '@/models/CharacterModel'
import { StateModel } from '@/store/StateModel'
import { computed, ComputedRef, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    CharacterAvatar
  },
  setup () {
    const store = useStore<StateModel>()

    const characters: ComputedRef<CharacterModel[]> = computed(() => store.state.characters)

    return {
      characters
    }
  }
})
</script>

<style lang="less">
#home {
  display: flex;
  justify-content: space-between;
}
</style>
