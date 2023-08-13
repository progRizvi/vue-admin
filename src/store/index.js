import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isSidebarOpen: false,
    };
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export default store;
