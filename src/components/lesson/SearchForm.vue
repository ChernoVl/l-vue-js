<template>
  <div>
    <hr>
    <h1>{{ msg }}</h1>

    <!--    <label>-->
    <!--      <input type="text" v-model="searchingName"/>-->
    <!--    </label>-->

    <!--    <br>-->
    <!--    Second way how to do it -->
    <p>Count of name: {{ names.length }}, coincidences: {{ getFilteredNames.length }}</p>
    <label>
      <input type="text" @input="searchingName = $event.target.value"/>
    </label>
    <ul>
      <li v-for="(name, index) in getFilteredNames" :key="index">{{ name }}</li>
    </ul>
    <hr>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  data() {
    return {
      names: ['Lad', 'Peter', 'Feder', 'Boris'],
      searchingName: '',
    }
  },
  // methods: {
  //   searchingNames() {
  //     return this.names
  //         .filter(name => name.toLowerCase().includes(this.searchingName.toLowerCase()));
  //   }
  // },
  // watch: {
  //   searchingName() {
  //     this.searchingNames();
  //   }
  // },
  computed: {
    getFilteredNames() {
      return this.names
          .filter((name: string) => name.toLowerCase().includes(this.searchingName.toLowerCase()));
    }
  },
  props: {
    msg: String,
  },
})

export default class SearchForm extends Vue {
  name = "SearchForm";
}
</script>

<style scoped>

</style>
