<template>
  <div class="character">
    <LabelText label="ID" :text="routeId" />
    <LabelText v-if="name" label="Name" :text="name" />
    <LabelImage v-if="image" label="Image" :image="image" />
    <Trait v-for="trait in traits" :key="JSON.stringify(trait)" :trait="trait" />
  </div>
</template>

<script lang="ts">
import LabelImage from '@/components/LabelImage.vue'
import LabelText from '@/components/LabelText.vue'
import Trait from '@/components/Trait.vue'
import { CharacterModel } from '@/models/CharacterModel'
import { TraitModel } from '@/models/TraitModel'
import { StateModel } from '@/store/StateModel'
import { computed, ComputedRef, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Character',
  components: { LabelText, LabelImage, Trait },
  setup () {
    const route = useRoute()
    const store = useStore<StateModel>()

    const routeId: ComputedRef<string> = computed(() =>
      Array.isArray(route.params.id)
        ? route.params.id[0] || ''
        : route.params.id
    )
    const character: ComputedRef<CharacterModel | null> = computed(() =>
      store.state.characters.find(character => character.id === routeId.value) ?? null
    )
    const name: ComputedRef<string | null> = computed(() => character.value?.name || null)
    const image: ComputedRef<string | null> = computed(() => character.value?.image || null)
    const traits: ComputedRef<TraitModel[]> = computed(() => character.value?.traits || [])

    return {
      routeId,
      name,
      image,
      traits
    }
  }
})
</script>
