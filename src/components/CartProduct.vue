<template>
  <div>
    <div class="cart-product-container">
      <div>
        <div class="cart-product" :class="{ deleted:  deleted }">
          <img class="cart-product__img" :src="cartProduct.image" />
          <div class="cart-product-title-group">
            <div class="cart-product__title">{{ cartProduct.title }}</div>
            <div class="cart-product__prise">{{ cartProduct.price }} ₽</div>
          </div>
          <div class="cart-product-btn-group">
            <div
              class="cart-product__btn"
              @click.prevent="
                this.$store.commit('multiPriceDecrise', cartProduct)
              "
            >
              -
            </div>
            <div class="cart-product__counter">{{ cartProduct.amount }}</div>
            <div
              class="cart-product__btn"
              @click.prevent="
                this.$store.commit('multiPriceIncrise', cartProduct)
              "
            >
              +
            </div>
          </div>
        </div>
      </div>
      <div >
        <img
          v-if="deleted"
          @click.prevent="this.deleted = false"
          id="cart-product__repeat"
          src="@/assets/img/repeat.svg"
        />
        <img
          v-else
          class="cart-product__x"
          @click.prevent=" this.$store.commit('removeFromCart', cartProduct); this.deleted = true"
          src="@/assets/img/x.svg"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cart-product",
  data() {
    return {
      deleted: false,
    };
  },
  computed: {
    deleteProd() {
      console.log("asf");
      return (this.deleted = true);
    },
  },
  props: {
    cartProduct: {
      type: Object,
      require: true,
    },
  },
};
</script>
<style scoped>

  .deleted{
    opacity: 0.2;
  }
  .cart-product-container{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
.cart-product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
  width: 100%;
}
.cart-product__img {
  width: 6rem;
  height: 6rem;
  margin-bottom: 0.7rem;
  
}
.cart-product-title-group {
  margin-left: 0.5rem;
  max-width: 10rem;
}
.cart-product__title {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: 0.02em;
}
.cart-product__prise {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  margin-top: 1rem;
}
.cart-product__btn {
  background: #f2f2f2;
  border-radius: 4px;
  width: 3rem;
  height: 1.5rem;
  cursor: pointer;
}
.cart-product-btn-group {
  display: flex;
  align-items: baseline;
  text-align: center;
  font-weight: 400;
  font-size: 1rem;
  margin-left: 3.8rem;
}
.cart-product__counter {
  margin: 0 1rem;
}
.cart-product__x {
  opacity: 0.2;
  margin-left: 2rem;
  cursor: pointer;
}
#cart-product__repeat {
  opacity: 1 !important;
  margin-left: 2rem;
  cursor: pointer;
}
@media (max-width: 460px) {
  .cart-product-btn-group {
    margin-left: 1.5rem;
  }
  .cart-product__counter {
    margin: 0 0.3rem;
  }
  .cart-product__x {
    opacity: 0.2;
    margin-left: 0.5rem;
  }
  .cart-product-title-group {
    margin-left: 0.1rem;
  }
  .cart-product__title {
    font-size: 12px;
  }
  .cart-product__prise {
    font-size: 12px;
  }
}
</style>
