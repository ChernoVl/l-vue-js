<template>
  <input
      type="text"
      class="search"
      @input="$emit('emitInput', $event.target.value)"
  >
  <button type="button" @click="$emit('searching')">Search</button>
</template>

<script lang="ts">
//

import {Options, Vue} from "vue-class-component";

@Options({
  // model: {
  //   prop: 'value', //куда оно одает значение
  //   event: 'input', //соботые которое оно слушает
  // },
  data() {
    return {
      text: '',
    }
  },
})

export default class MyInput extends Vue {
}
</script>

<style lang="scss" scoped>
input {
  height: 25px;
  margin-left: 40px;
}
</style>
