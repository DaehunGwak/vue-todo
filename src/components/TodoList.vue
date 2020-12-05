<template>
  
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <span @click="toggleComplete(todoItem, index)" class="checkBtn">
          <i class="fas fa-check" :class="{checkBtnCompleted: todoItem.completed}"></i>
        </span>
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todoItems: Array,
  },
  methods: {
    removeTodo(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
    },
    toggleComplete(todoItem, index) {
      this.$emit('toggleItem', todoItem, index);
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
  line-height: 50px;
  color: #62acde;
  margin-right: 10px;
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

/* list item transition effect */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>