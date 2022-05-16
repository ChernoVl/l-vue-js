<template>
  <div>
    <hr>
    <div class="product-list">
      <div class="flex top-information">
        <h1>Work Table</h1>
        <MyInput @emitInput="myMethod" @searching="findSearchText"/>
        <!--        <input type="text" v-model="searchText">-->
        <button>Search</button>
      </div>

      <ul class="list-default flex">
        <li v-for="(product, index) in products" :key="index">
          <product-card
              :title="product.title"
              :price="product.price"
              :imgUrl="product.imgUrl"
              :count="product.count"
              @addToBasket="addToBasket(index)"
          />
          <br>
        </li>
      </ul>
    </div>
    <hr>
  </div>
</template>

<script lang="ts">
// v-model="searchText"
import {Options, Vue} from "vue-class-component";
import ProductCard from "@/components/lesson3/ProductCard.vue";
import MyInput from "@/components/lesson3/MyInput.vue";

@Options({
  name: 'ProductList',
  components: {MyInput, ProductCard},
  data() {
    return {
      products: [
        {
          title: 'Table Jim',
          price: 19999,
          imgUrl: 'https://www.ikea.com/us/en/images/products/moerbylanga-table-oak-veneer-brown-stained__0737108_pe740890_s5.jpg',
          count: 30,
        },
        {
          title: 'Table Monako',
          price: 17199,
          imgUrl: 'https://www.ikea.com/us/en/images/products/mammut-childrens-table-indoor-outdoor-blue__0735844_pe740211_s5.jpg?f=s',
          count: 20,
        },
        {
          title: 'Table with two shell MD 768',
          price: 10999,
          imgUrl: 'https://www.thespruce.com/thmb/mQb21Azh_rPkIZStWs4k2qbJLYw=/1500x1000/filters:fill(auto,1)/SPR-HOME-14-best-coffee-tables-4150638-3d2136d1b78340cdb192ea3360dd7a94.jpg',
          count: 23,
        },
      ],
      searchText: '',
    }
  },
  methods: {
    addToBasket(index: number) {
      console.log(index);
    },

    myMethod(event: any) {
      this.searchText = event;
    },

    findSearchText(){
      console.log(this.searchText);
    }
  }

})

export default class ProductList extends Vue {
}
// export default {
//   name: "ProductList"
// }
</script>

<style lang="scss" scoped>
li {
  margin-right: 20px;
}

.top-information {
  align-items: center;

  h1 {
    margin-bottom: 0;
  }

  button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-left: 10px;
  }

  margin-bottom: 22px;
}

.list-default {
  width: 500px;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}

</style>
