<template>
  <MyHeader />
  <Crumbs />
  <Slider />
  <div class="product-wraper">
    <div class="chois-bar-container">
      <ChoiceBar />
    </div>
    <div class="product-container">slots</div>
  </div>
</template>
<script>
import MyHeader from "./MyHeader.vue";
import Slider from "./Slider.vue";
import Crumbs from "./Crumbs.vue";
import ChoiceBar from "./ChoiceBar.vue";
export default {
  name: "Shop",
  components: {
    MyHeader,
    Slider,
    Crumbs,
    ChoiceBar,
  },
};
</script>
<style>
.product-wraper {
  margin-top: 4.7rem;
  display: flex;
}
.chois-bar-container{
    margin-left: 4rem;
    margin-right: 8.5rem;
    height: 100%;
}
.product-container{
   width: 100%;
}
</style>
