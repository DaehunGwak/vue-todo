<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
        {{ todoItem }}
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TodoList',
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
    removeTodo(todoItem, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem);
    },
  }
}
</script>

<style scoped>
ul {
  display: inline-block;
  list-style-type: none;
  padding-left: 0;
  text-align: left;
  width: 100%;
  max-width: 600px;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: whitesmoke;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
  cursor: pointer;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}
</style>