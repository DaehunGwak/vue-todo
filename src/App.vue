<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @add="loadTodoItems"></todo-input>
    <todo-list :todoItems="todoItems"></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
import TodoFooter from './components/TodoFooter.vue';

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
    this.loadTodoItems();
  },
  methods: {
    loadTodoItems() {
      console.log("load");
      this.todoItems = [];
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          const storageValue = localStorage.key(i);
          if (storageValue.includes('webpack')) {
            continue;
          }
          this.todoItems.push(storageValue);
        }
      }
    },
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
