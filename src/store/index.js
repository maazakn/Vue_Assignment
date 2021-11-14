import { createStore } from 'vuex';
import { url } from '@/utils/constants';

export default createStore({
  state: {
    loading: false,
    error: false,
    cards: [],
    iscalled: false,
  },
  mutations: {
    fetchCards: (state, payload) => {
      state.cards = payload;
      state.loading = false;
    },
    addCard: (state, newCard) => {
      state.cards.push(newCard);
    },
  },
  actions: {
    // fetch cards
    async fetchCards({ commit }) {
      try {
        this.state.loading = true;
        const response = await fetch(url),
          cards = await response.json();
        commit('fetchCards', cards);

        // avoid redundent data
        this.state.iscalled = true;
      } catch (error) {
        this.state.loading = false;
        this.state.error = true;
        console.error(error);
      }
    },
    // add cards
    addCard({ commit }, payload) {
      commit('addCard', payload);
    },
  },
  modules: {},
  getters: {
    allCards: state => state.cards,
    isloading: state => state.loading,
    error: state => state.error,
    isCalled: state => state.iscalled,
  },
});
