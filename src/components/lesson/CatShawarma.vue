<template>
  <div class="container flex">
    <hr>
    <div class="img-wrapper">
      <img
          v-if="isCatVisible"
          :class="imgFilters"
          :style="imgStyle"
          src="../../assets/catshawarma.png"
          alt="catshawarma here"
      >
      <p v-else>Cat return soon</p>
      <p v-show="isCatVisible">v-show: You see this text only if you see cat</p>
    </div>
    <div class="controls">
      <h1>{{ msg }}</h1>
      <h2>Size</h2>
      <div class="btn-group">
        <label>Width: {{ imgSize.currentWidth }}
          <input
              type="range"
              :min="imgSize.minWidth"
              :max="imgSize.maxWidth"
              :value="imgSize.currentWidth"
              @input="imgSize.currentWidth = $event.target.value"
          >
          <input type="range" :min="imgSize.minWidth" :max="imgSize.maxWidth" v-model="imgSize.currentWidth">
        </label>
        <br>
        <label>Height: {{ imgSize.currentHeight }}
          <input type="range" :min="imgSize.minHeight" :max="imgSize.maxHeight" v-model="imgSize.currentHeight">
        </label>
      </div>
      <h2>Filters:</h2>
      <div class="btn-group flex">
        <button
            type="button"
            :class="imgFilters.sepia ? 'active' : ''"
            @click="imgFilters.sepia = !imgFilters.sepia">
          Sepia
        </button>
        <button type="button" :class="imgFilters.border ? 'active' : ''"
                @click="imgFilters.border = !imgFilters.border">Border
        </button>
        <button type="button" :class="imgFilters.small ? 'active' : ''" @click="imgFilters.small = !imgFilters.small">
          Reduce
        </button>
        <button type="button" :class="imgFilters.shadow ? 'active' : ''" @click="imgFilters.shadow = !imgFilters.shadow">
          Shadow
        </button>
      </div>
      <h2>Rotate</h2>
      <label>
        Angle: {{ rotate.value }}
        <input type="range" :min="rotate.min" :max="rotate.max" v-model="rotate.value">
      </label><br>
      <button @click="isCatVisible=!isCatVisible"> {{ isCatVisible ? "Disappear" : " Appear  " }}</button>
    </div>
    <hr>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
  data() {
    return {
      isCatVisible: true,
      imgFilters: {
        sepia: false,
        border: false,
        small: false,
        shadow: false,
      },
      imgSize: {
        maxWidth: 680,
        maxHeight: 480,
        minWidth: 100,
        minHeight: 100,
        currentWidth: 680,
        currentHeight: 480,
        currentAngle: 0,
        minAngle: 0,
        maxAngle: 360,
      },
      rotate:{
        min: 0,
        max: 360,
        value: 0,
      }
    }
  },
  computed:{
    imgStyle(){
      return{
        width: `${this.imgSize.currentWidth}px`,
        height: `${this.imgSize.currentHeight}px`,
        transform: `rotate(${this.rotate.value}deg)`,
      }
    }
  }
})


export default class CatShawarma extends Vue {
  name = "CatShawarma";
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 40px;
}

.controls {
  margin-left: 20px;
}

.img-wrapper {
  width: 640px;
  height: 480px;
  background-color: #cecece;
}

img {
  transition: 0.2s ease;

  &.sepia {
    filter: sepia(100%);
  }

  &.border {
    border: 5px dashed #464646;
  }

  &.small {
    width: 400px;
  }

  &.shadow {
    box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}

button {
  margin-right: 10px;

  &.active {
    background-color: #dbdbdb;
  }
}

h2 {
  margin-bottom: 10px;
}

.btn-group {
  margin-bottom: 20px;
}
</style>
