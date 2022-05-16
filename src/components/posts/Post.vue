<template>
  <div id="idid">
    <PostForm/>
    <h1>{{ postsCount }}</h1>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {mapGetters, mapActions} from 'vuex'
import PostForm from "@/components/posts/PostForm.vue";

@Options({
  components: {
    PostForm
  },
  computed: mapGetters(['allPosts', 'postsCount', 'validPosts']),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    // this.$store.dispatch('fetchPosts');
    await this.fetchPosts(4);
  }
})

export default class Post extends Vue {}
</script>

<style scoped>
#idid {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>