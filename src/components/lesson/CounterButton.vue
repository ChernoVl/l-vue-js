<template>
  <div>
    <hr>
    <h1>{{ msg }}</h1>
    <button @click="decreaseCounter">-</button>
    <input type="number" v-model="counter" />
    <button @click="increaseCounter">+</button>
    <hr>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
  data(){
    return{
      counter: 0,
      message: String,
    }
  },
  methods:{
    increaseCounter(){
      this.counter++;
    },

    decreaseCounter(){
      this.counter--;
    }
  }
})

export default class CounterButton extends Vue {
  name = "CounterButton";
}
</script>

<style scoped>

</style>
