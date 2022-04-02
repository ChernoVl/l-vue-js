<template>
  <div id="App">
    <FirstComponent/>
    <hr/>
    <SecondComponent/>
  </div>
</template>

<script>
import FirstComponent from "@/components/FirstComponent";
import SecondComponent from "@/components/SecondComponent";

export default {
  name: 'App',
  components: {SecondComponent, FirstComponent},
}
</script>

<style>
</style>
