<template>
  <hr>
  <ul>
    {{ count }}
    <li
        v-for="reaction in reactions"
        :key="reaction.id"
    >
      <button type="button" class="btn btn-outline-dark">
        {{ reaction.title }}
      </button>
    </li>
  </ul>
  <hr>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {mapActions, mapGetters} from "vuex";

@Options({
  computed: {
    /**
     * см. mapActions
     */

    ...mapGetters({
      getReactions: 'reactions/getReactions',
      getCount: 'reactions/getCount'
    }),
    /**
     * Вызов getters
     * this.$store.getters.getReactions
     */
    reactions() {
      return this.getReactions;
    },
    count(){
      return this.getCount;
    }
  },
  methods: {
    /**
     * Более краткая запись метода dispatch
     * перед ним добавим spread operator (...)
     * т.е. mapActions отдает обект который мы можем разбить на свойства
     * Сюда мы можем указвать масив с названием екшена который мы хотим получить
     * ...mapActions(['loadReactions'])
     *
     * После этого у нас в методах появиться функция с таким же
     * названием как и наш action. И мы можем вызывать даную функцию
     *
     * Так же вместо масива мы можем передавать обект. Например если мы хотим
     * переименовать наш action и импользывать другое название фенкции
     *
     * таким же образом и используються Getters
     */
    ...mapActions({
      load: 'reactions/loadReactions'
    })
  },
  /**
   * Метод dispatch:
   * Вызов (одного или нескольких) actions
   * this.$store.dispatch('loadReactions', 2000);
   * В ету ф-ю мы передаем название екшена которого хотим вызвать и параметр payload
   */
  created() {
    // this.$store.dispatch('loadReactions', 2000);
    this.load(1000);
  }
})


export default class FilmPage extends Vue {
}
</script>

<style scoped lang="scss">

</style>
