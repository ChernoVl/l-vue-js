<template>
  <div>
    <counter-button msg="Counter Button HW"/>
    <search-form msg="Search Form HW"/>
    <cat-shawarma msg="Cat Shawarma"/>
    <product-list/>
    <myself-info/>
    <sign-up/>
    <user-page/>
    <text-editor/>
    <film-page/>

    <post/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import MyComponent from "@/components/MyComponent.vue";
import CounterButton from "@/components/lesson/CounterButton.vue";
import SearchForm from "@/components/lesson/SearchForm.vue";
import CatShawarma from "@/components/lesson/CatShawarma.vue";
import ProductList from "@/components/lesson3/ProductList.vue";
import Post from "@/components/posts/Post.vue";
import MyselfInfo from "@/components/lesson4/MyselfInfo.vue";
import SignUp from "@/components/lesson5/SignUp.vue";
// import UserPage from "@/components/lesson6/UserPage.vue";
import UserPage from "@/components/lesson7/UserPage.vue";
import TextEditor from "@/components/lesson7/TextEditor.vue";
import FilmPage from "@/components/lesson9/FilmPage.vue";

@Options({
  components: {
    FilmPage,
    TextEditor,
    UserPage,
    SignUp,
    MyselfInfo,
    Post,
    ProductList,
    CatShawarma,
    SearchForm,
    CounterButton,
    MyComponent,
    HelloWorld,
  },
})

export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
