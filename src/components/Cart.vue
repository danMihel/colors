<template>
  <section>
   <transition name="fade-cart">
    <div class="cart-filler" v-if="$store.state.showCart">
    </div>
    </transition>
    <transition name="slide-cart">
      <div class="cart-wraper" v-if="$store.state.showCart" @click.self="$store.commit('setShowCart')">
        <div class="cart-container">
          <div>
            <div class="cart-header">
              <div class="cart-title">Корзина</div>
              <div class="cart-header__x" @click.stop="$store.commit('setShowCart')">
                <img src="@/assets/img/x.svg" />
              </div>
            </div>
            <div class="cart-product-wraper">
              <div class="cart-row">
                <div class="cart-product__counter">{{ $store.state.cartCount }} товара</div>
                <div class="cart-product__clear" @click="$store.commit('clearCart')">очистить список</div>
              </div>
              <transition-group name="list">
              <div class="cart-row" v-for="item in $store.state.cart" :key="item.id">
                <CartProduct :cartProduct="item" :key="item.id" />
              </div>
            </transition-group>
            </div>
          </div>
          <div class="cart-footer-wraper">
            <div class="cart-footer">
              <div class="cart-footer__title">
                Итого
              </div>
              <div class="cart-footer__price">
                {{ $store.state.cartTotalPrice.toLocaleString('ru-RU') }}₽
              </div>
            </div>
            <div class="cart-footer__btn">
              Оформить заказ
            </div>
          </div>
        </div>
      </div>
    </transition>
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
      default: true,
    },
  },

  mounted() {
    this.$store.commit('cartTotalPrice');
    this.$store.commit("setCartCount");
  },
  components: { CartProduct },
};
</script>
<style>
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to  {
    opacity: 0;
    transform: translateX(100px);
  }
.slide-cart-enter-active {
  transition: all 0.2s ease;
}

.slide-cart-leave-active {
  transition: all 0.2s ease;
}

.slide-cart-enter-from,
.slide-cart-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-cart-enter-active,
.fade-cart-leave-active {
  transition: opacity 0.5s ease;
}
.fade-cart-enter-from,
.fade-cart-leave-to {
  opacity: 0;
}

.cart-filler {
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
}

.cart-wraper {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  position: absolute;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
 min-width: 100%;
}

.cart-row:last-child {
  border-bottom: none;
}

.cart-footer {
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
  cursor: pointer;
}

.cart-footer-wraper {
  display: flex;
  justify-content: space-between;
}

.cart-footer__btn {
  padding: 1.2rem 3.5rem;
  margin: 0 5px;
  background: #7BB899;
  border-radius: 4px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #1F2020;
  cursor: pointer;
}

.cart-footer__title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  color: #1F2020;
}

.cart-footer__price {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: #1F2020;
}

@media (max-width: 800px) {
  .cart-container {
    padding: 0.5rem;
  }
}

@media (max-width: 525px) {
  .cart-wraper {
    background: #ffffff;
  }
}
</style>
