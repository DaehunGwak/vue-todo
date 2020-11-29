<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodoItem: '',
    };
  },
  methods: {
    addTodo() {
      if (!this.newTodoItem) {
        return;
      }
      const newItemObj = {
        completed: false,
        item: this.newTodoItem,
      };
      localStorage.setItem(this.newTodoItem, JSON.stringify(newItemObj));
      this.clearInput();
      this.$emit('add');
    },
    clearInput() {
      this.newTodoItem = '';
    },
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  display: inline-block;
  background: whitesmoke;
  height: 50px;
  line-height: 50px;
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
}

.inputBox input {
  background: inherit;
  border-style: none;
  width: calc(100% - 5rem);
  font-size: 1rem;
}

.addContainer {
  float: right;
  background: linear-gradient(128deg, rgba(0,212,255,1) 22%, rgb(0, 110, 255) 72%, rgb(63, 63, 238) 100%);
  display: block;
  width: 3rem;
  border-radius: 0 4px 4px 0;
  cursor: pointer
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>