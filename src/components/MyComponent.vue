<template>
  <div v-cloak>
    <u>v-text="title"</u>
    <h2 v-text="title"></h2>
    <u>v-once</u>
    <h2 v-once>{{ title }}</h2>
    <button @click="title = 'Other name'">Change title</button>

    <br><br><u>v-pre</u>
    <h2 v-pre>{{ title }}</h2>

    <u>v-html</u>
    <div v-html="myHtml"></div>
    <hr>

    <u>Lists. With number. With Object. With Array</u>
    <ul>
      <li v-for="(item, idx) in 3" :key="idx">{{ item }}</li>
    </ul>

    <ul>
      <li v-for="(value, key) in person" :key="key">{{ key }}: {{ value }}</li>
    </ul>

    <u>Lists rendering</u>
    <ul class="list" v-if="items.length">
      <li
          v-for="(item, i) in items"
          :key="item"
          @click.right.prevent="items.splice(i, 1), log(item)"
      >
        <strong >{{ item }}</strong>&nbsp;
        <input type="text" @click.stop>
      </li>
    </ul>
    <h3 v-show="!items.length">empty</h3>
    <hr>

    <div>
      <input type="text" @keyup.shift.enter="addItem" ref="myInput">
    </div>

  </div>
</template>

<script src="../scripts/scriptMyComp.ts"></script>
<style scoped src="../styles/style.css"></style>