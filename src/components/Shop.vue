<template>
  <MyHeader />
  <Crumbs />
  <Slider />
  <div class="product-wraper">
    <div class="chois-bar-container">
      <ChoiceBar />
    </div>
    <div class="products-container">
      <div  v-for="item in $store.state.products" :key="item.id">
        <Product :product="item" :key="item.title"/>
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
export default {
  name: "Shop",
  components: {
    MyHeader,
    Slider,
    Crumbs,
    ChoiceBar,
    Product ,
  },
};
</script>
<style>
.product-wraper {
  margin-top: 4.7rem;
  display: flex;
}
.chois-bar-container {
  margin-left: 4rem;
  margin-right: 8.5rem;
  height: 100%;
  min-width: 170px;
}
.products-container {
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}
</style>
