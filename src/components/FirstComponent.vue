<template>
  <div>
    <h1>{{title}} {{ counter }}</h1>
    <div>
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
  </div>
</template>

<script src="../scripts/scriptFirstComponent.ts"></script>

<style scoped>
</style>