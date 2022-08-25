<template>
  <section>
    <div class="cart-wraper" v-if="show" @click.stop="hideForm">
      <div class="cart-container" @click.stop>
        <div class="cart-header">
          <div class="cart-title">Корзина</div>
          <div class="cart-header__x">
            <img src="@/assets/img/x.svg" />
          </div>
        </div>
        <div class="cart-product-wraper">
          <div class="cart-row">
            <div class="cart-product__counter">4 товара</div>
            <div class="cart-product__clear">очистить список</div>
          </div>
          <div
            class="cart-row"
            v-for="item in $store.state.cart"
            :key="item.id"
          >
            <CartProduct :product="item" :key="item.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CartProduct from "./CartProduct.vue";
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
      default: false ,
    },
  },
  methods: {
    hideForm() {
      alert("hide");
      this.$emit("update:show", false);
    },
  },
  components: { CartProduct },
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
  overflow-y: scroll;
}
.cart-wraper::-webkit-scrollbar {
  width: 0;
}
.cart-container {
  float: right;
  max-width: 600px;
  min-width: 40vw;
  min-height: 100vh;
  background: #ffffff;
  opacity: 1;
  padding: 2rem 2.5rem;
}
.cart-title {
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 88%;
  letter-spacing: -0.04em;
}
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
}
.cart-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.cart-row:last-child {
  border-bottom: none;
}
.cart-product-wraper {
  display: flex;
  flex-direction: column;
}
.cart-product__counter {
  padding-bottom: 0.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 112%;
}
.cart-product__clear {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 112%;
  color: #1f2020;
  opacity: 0.4;
  cursor: pointer;
}
.cart-header__x {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  padding: 18px;
  display: flex;
  align-items: center;
}
@media (max-width: 800px) {
  .cart-container {
    padding: 15px;
  }
}
</style>
