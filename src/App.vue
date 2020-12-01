<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @addTodoItem="addOneItem"></todo-input>
    <todo-list :todoItems="todoItems"></todo-list>
    <todo-footer @clearAll="clearItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
import TodoFooter from './components/TodoFooter.vue';
import Constants from './constants/index.js';

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes(Constants.KEY_PREFIX)) {
          continue;
        }
        const obj = JSON.parse(localStorage.getItem(key));
        this.todoItems.push(obj);
      }
    }
    this.sortItems();
  },
  methods: {
    addOneItem(newTodoItem) {
      const key = `${Constants.KEY_PREFIX}${newTodoItem}`
      const newItemObj = {
        completed: false,
        item: newTodoItem,
      };
      localStorage.setItem(key, JSON.stringify(newItemObj));
      this.todoItems.push(newItemObj);
      this.sortItems();
    },
    clearItems() {
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (!key.includes(Constants.KEY_PREFIX)) {
            continue;
          }
          localStorage.removeItem(key);
        }
      }
      this.todoItems = [];
    },
    sortItems() {
      this.todoItems.sort((a, b) => a.item.localeCompare(b.item));
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  text-align: center;
  background: rgb(2,0,36);
  background: linear-gradient(332deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  font-family: Avenir, 'Nanum Gothic', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input {
  font-family: Avenir, 'Nanum Gothic', Helvetica, Arial, sans-serif;
  border-style: solid;
  width: inherit;
}
button {
  border-style: solid;
}
.shadow {
  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
}
</style>
