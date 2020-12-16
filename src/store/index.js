import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import { KEY_PREFIX } from "../constants";

import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex); // import to global vue plugin

const storage = {
  fetch() {
    const items = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes(KEY_PREFIX)) {
          continue;
        }
        const obj = JSON.parse(localStorage.getItem(key));
        items.push(obj);
      }
    }
    return _.sortBy(items, ["item"]);
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  getters,
  mutations
});
