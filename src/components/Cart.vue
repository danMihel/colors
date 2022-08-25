<template>
  <section>
    <div class="cart-wraper" v-if="show" @click.stop="hideForm">
      <div class="cart-container" @click.stop>
        <div class="cart-headr">
                 <div class="cart-title">Корзина</div>
                 <div>+</div>
        </div>
      </div>
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
  max-width: 80vw;
  min-width: 30vw;
  height: 100%;
  background: #ffffff;
  opacity: 1;
  padding: 2.5rem;
}
.cart-title {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 88%;
  letter-spacing: -0.04em;
}
.cart-headr{
    display: flex;
    justify-content: space-between;
}
</style>
