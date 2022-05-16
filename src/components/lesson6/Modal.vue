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
            ref="modalBody"
            @scroll="onBodyScroll"
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

@Options({
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  data(){
    return{
      isRulesRead: false,
    }
  },
  mounted(){
    //FIXME hw to scroll down can be comment
    const modalBody = this.$refs.modalBody;
    modalBody.scrollTop = modalBody.scrollHeight - modalBody.clientHeight
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    onBodyScroll(e: any){
      //document.querySelector('.modal-body').scrollTop
      const modalBody = this.$refs.modalBody;
      if(modalBody.clientHeight + modalBody.scrollTop >= modalBody.scrollHeight){
        this.isRulesRead = true;
      }
    }
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
