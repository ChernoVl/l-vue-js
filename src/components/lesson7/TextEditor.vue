<template>
  <hr>
  <div class="text-editor">
    <textarea v-model="text"></textarea>
    <div class="output-text">
      {{ emoji(upperCase(text)) }}
    </div>
  </div>
  <hr>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  data() {
    return {
      text: '',
    }
  },
  computed: {
    upperCase() {
      return (v: string) => v.toUpperCase();
    },
    emoji(){
      return (v: string) => v.replace(':)', '😀')
    }
  }
})

export default class TextEditor extends Vue {
}
</script>

<style scoped lang="scss">
textarea {
  width: 500px;
  height: 200px;
}
</style>
