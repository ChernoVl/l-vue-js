<template>
  <hr>
  <h2>Myself Info:</h2>
  <div
      class=""
      v-for="(value, label, index) in selfInfo"
      :key="index"
  >
    <label :for="label">{{ label }}:</label>
    <input
        class=""
        :id="label"
        v-model="selfInfo[label]"
    />
  </div>
  <button type="submit" class="">Save</button>

  <h2>Review:</h2>
  <p
      class=""
      v-for="(value, label, index) in selfInfo"
      :key="index"
  >
    {{ `${label}:  ${selfInfo[label]}` }}
  </p>

  <label :for="additionalField">Additional Field</label>
  <input
      class=""
      id="additionalField"
      v-model="additionalField"
  />
  <button
      type="button"
      class=""
      @click="addNewField"
  >
    Add
  </button>
  <p
      v-for="(item, index) in array"
      :key="index"
  >
    {{ item }}
    <input type="text" v-model="newText[index]"/>
    <button @click="changeText(index)">Change text</button>
  </p>
  {{newText}}
  <hr>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  data() {
    return {
      selfInfo: {
        firstName: '',
        secondName: '',
        lastName: '',
      },
      additionalField: '',
      array: [1, 2, 3, 4, 5],
      newText: [''],
    }
  },
  methods: {
    addNewField() {
      this.selfInfo[this.additionalField] = '';
      // this.$set(this.selfInfo, this.additionalField, '');
      this.additionalField = ''
    },

    changeText(value: number){
      this.array[value] = this.newText[value];
    }
  }
})


export default class MyselfInfo extends Vue {
}
</script>

<style scoped lang="scss">

</style>
