<template>
  <Cart :show="true" />
  <MyHeader />
  <Crumbs />
  <Slider :sliderData="$store.state.sliderItems"/>
  <div class="product-wraper">
    <div class="chois-bar-container">
      <ChoiceBar />
    </div>
    <div class="products-container">
      <ProductHeader />
      <div class="products-list">
        <transition-group name="flip-list">
          <div v-for="item in $store.getters.sortedProducts" :key="item.id">
            <Product :product="item" :key="item.title" />
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "./MyHeader.vue";
import Slider from "./Slider.vue";
import Crumbs from "./Crumbs.vue";
import ChoiceBar from "./ChoiceBar.vue";
import Product from "./Product.vue";
import ProductHeader from "./ProductHeader.vue";
import Cart from "./Cart.vue";
export default {
  name: "Shop",
  components: {
    MyHeader,
    Slider,
    Crumbs,
    ChoiceBar,
    Product,
    ProductHeader,
    Cart,
  },
};
</script>
<style>
.flip-list-move {
  transition: transform 0.5s;
}

.products-container {
  width: 100%;
}

.product-wraper {
  margin-top: 4.7rem;
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
}

.chois-bar-container {
  margin-right: 8.5rem;
  height: 100%;
  min-width: 170px;
}

.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 10px;
}

@media (max-width: 1030px) {
  .product-wraper {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

@media (max-width: 743px) {
  .chois-bar-container {
    display: none;
  }
}
</style>
