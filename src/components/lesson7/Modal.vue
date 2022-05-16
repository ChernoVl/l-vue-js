<template>
  <div class="modal fade show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ title }}
          </h5>
          <button
              type="button"
              class="close"
              aria-label="Close"
              @click="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div
            class="modal-body"
            @scroll="onScroll"
        >
<!--          <slot name="default"></slot>-->
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
<!--            если мы впишем какойто контент в наш слот и из вне мы не будем-->
<!--            ничего передавать в этот слот, то будет браться значие которое-->
<!--            записано в нем по умолчанию-->
            <button
                type="button"
                class="btn btn-secondary"
                @click="closeModal"
            >
              Decline
            </button>
            <button
                type="button"
                class="btn btn-primary"
                :disabled="!isRulesRead"
            >
              Approve
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import ScrollHandler from "@/components/lesson7/mixin/scrollHandler";

@Options({
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  mixins: [ScrollHandler],
  data(){
    return{
      isRulesRead: false,
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    onScrollEnd(){
      this.isRulesRead = true;
    },
  },
})


export default class Modal extends Vue {
}
</script>

<style scoped lang="scss">
.modal {
  display: block;

  &-body {
    height: 200px;
    overflow-y: scroll;
  }
}

</style>
