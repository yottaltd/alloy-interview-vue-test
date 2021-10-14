import { createStore } from 'vuex'
import { ApiMock } from './ApiMock'
import { StateModel } from './StateModel'

export default createStore<StateModel>({
  state: {
    characters: []
  },
  mutations: {
  },
  actions: {
    async loadCharacters () {
      const api = new ApiMock()

      this.state.characters = await api.getCharacters()
    }
  },
  modules: {
  }
})
