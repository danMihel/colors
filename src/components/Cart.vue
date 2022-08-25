<template>
  <section>
    <div class="cart-wraper" v-if="show" @click.stop="hideForm">
      <div class="cart-container" @click.stop></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "cart",
  data() {
    return {
      body: "",
    };
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    hideForm() {
      alert("hide");
      this.$emit("update:show", false);
    },
  },
};
</script>
<style>
.cart-wraper {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
}
.cart-container {
  float: right;
  max-width: 37.5rem;
  min-width: 19rem;
  height: 100%;
  background: #ffffff;
  opacity: 1;
}
</style>
