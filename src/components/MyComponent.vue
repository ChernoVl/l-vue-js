<template>
  <div v-text="template">
  </div>
</template>

<script lang="ts">
// import Vue from 'vue'
import {Options, Vue} from 'vue-class-component'

// The @Component decorator indicates the class is a Vue component
@Options({
  // All component options are allowed in here
  template: '<button @click="onClick">Click!</button>'
})

export default class MyComponent extends Vue {
  // Initial data can be declared as instance properties
  message = 'Hello!'

  // Component methods can be declared as instance methods
  onClick(): void {
    console.log("onClick");
    window.alert(this.message)
  }
}
</script>

<style scoped>

</style>
