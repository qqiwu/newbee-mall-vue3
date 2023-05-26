import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      checked: false,
      list: [],
      all: false,
      result: [],
      checkAll: true,
    };
  },
  mutations: {
    updateList(state, newList) {
      state.list = newList;
    },
    // 其他mutations...
  },
  actions: {
    // 定义actions...
  },
});

export default store;
