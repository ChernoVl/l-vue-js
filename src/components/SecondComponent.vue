<template>
  <div>
    <h1>{{ title }}</h1>
    <input
        type="text"
        v-bind:placeholder="placeholder"
        v-model="inputValue"
        v-on:keypress.enter="addNote"
    />

    <!--    Dynamic style-->
    <h2>inputValue:
      <samp :style="{
        color: inputValue.length > 5 ? 'red' : 'blue',
        fontSize: inputValue.length > 5 ? '2rem' : '1.5rem'
      }">
        {{ inputValue }}
      </samp>
    </h2>

    <button @click="addNote">Add Note</button>
    <br><br>
    <ul v-if="notes.length !== 0">
      <li v-for="(note, index) in notes" :key="index">
        <span :class="note.length > 5 ? 'primary' : 'bold'">{{ index }}. {{ toUpperCase(note) }}</span>
        <button @click="deleteNote(index)">-Del</button>
      </li>
      <br>
      <li>
        <strong>Count of notes: {{ notes.length }}</strong> | x2: {{ doubleCountComputed }}
      </li>
    </ul>
    <div v-else>
      Notes not exist. Add your first note
    </div>
  </div>
</template>

<script src="../scripts/scriptSecComponent.ts"></script>

<style scoped>
ul {
  list-style-type: none;
}
</style>