<template>
  <div id="nav">
    <router-link id="home" to="/">OPM Encyclopedia</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  setup () {
    const store = useStore()

    // start loading characters async
    store.dispatch('loadCharacters')
  }
})
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #ffdbfe;
}

#app {
  width: 800px;
  margin: 20px auto;
}

#nav {
  display: block;
  margin-bottom: 20px;
}

#home {
  color: #dc3d00;
  font-size: 26px;
  font-weight: 700;
}
</style>
