import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    places: [],
    categories: [],
    activePlace: {
      id: '',
      name: '',
      nameSpanish: '',
      phone: '',
      address: '',
      categories: [],
      subcategories: [],
      latitude: 0,
      longitude: 0,
      url: '',
      email: '',
      hours: '',
      description: ''
    }
  },
  mutations: {
    SET_ACTIVE_PLACE(state, data) {
      state.activePlace = data;
    },
    SET_PLACES(state, data) {
      state.places = data;
    },
    SET_CATEGORIES(state, data) {
      state.categories = data;
    }
  },
  strict: true
})
