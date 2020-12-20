import _ from "lodash";
import { KEY_PREFIX } from "@/constants";

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

const state = {
  todoItems: storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
};

const mutations = {
  addOneItem(state, todoItem) {
    const key = `${KEY_PREFIX}${todoItem}`;
    const newItemObj = {
      completed: false,
      item: todoItem
    };
    localStorage.setItem(key, JSON.stringify(newItemObj));
    state.todoItems.push(newItemObj);
    state.todoItems = _.sortBy(state.todoItems, ["item"]);
  },
  removeOneItem(state, todoItem) {
    const key = `${KEY_PREFIX}${todoItem.item}`;
    localStorage.removeItem(key);
    state.todoItems.splice(todoItem.index, 1);
  },
  toggleOneItem(state, todoItem) {
    const key = `${KEY_PREFIX}${todoItem.item}`;
    const { index } = todoItem;
    localStorage.setItem(key, JSON.stringify(todoItem));
    state.todoItems[index].completed = !state.todoItems[index].completed;
  },
  clearItems(state) {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes(KEY_PREFIX)) {
          continue;
        }
        localStorage.removeItem(key);
      }
    }
    state.todoItems = [];
  }
};

export default {
  state,
  getters,
  mutations
};
