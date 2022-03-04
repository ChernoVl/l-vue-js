<template>
  <div id="App">
    <TodoList :todos="todos" @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  data(){
    return {
      todos: ['Fixing', 'Breakfast']
    }
  },
  components: {
    TodoList
  },
  methods:{
    deleteTodo(index){
      this.todos.splice(index, 1);
    }
  }
}
</script>

<style>
</style>
