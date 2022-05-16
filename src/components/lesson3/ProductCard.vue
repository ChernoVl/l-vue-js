<template>
  <div class="product-card">
    <img
        :src="imgUrl"
        style="width: 100px"
        alt="imgUrl"
    >
    <div class="product-card__info">
      <h2>{{ title }}</h2>
      <p class="price"> {{ price }}$</p>
      <p class="count">Available to delivery {{ count }} count</p>
      <button type="button" @click="addToBasket">Add to basket</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: 'ProductCard',
  props: {
    title: {
      type: String,
      // функция валидирует наш props
      // принимает она значение которое ми передали
      // и вернуть должно булевое значение
      validator(value: string){
        return value.length < 50;
      }
    },
    price: {
      type: Number,
      require: true,
    },
    imgUrl: {
      type: String,
      // будет устанавливаться по умалчанию
      // если нам ничего не передали с родительского компонента
      default: 'https://cdn2.iconfinder.com/data/icons/smiling-face/512/Nothing_Face-512.png',
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods:{
    addToBasket(){
      this.$emit('addToBasket');
    }
  }
})

export default class ProductCard extends Vue {
}
</script>

<style lang="scss" scoped>
.product-card {
  border: 1px solid rgb(211, 211, 211);
  padding: 20px 15px;
  &__info {
    margin-top: 20px;
    h2, .price {
      font-weight: 500;
    }
    .count {
      color: rgb(143, 143, 143);
    }
    button {
      background-color: rgb(221, 56, 56);
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px 14px;
      display: block;
      cursor: pointer;
      margin-top: 20px;
    }
  }
}

</style>
