<template>
  <section>
    <h2 class="product-header-title">Краски</h2>
    <div class="product-header-container">
      <div class="product-header-counter">412 товаров</div>
      <div class="product-header-filter">Фильтры</div>
        <MySelect/>
    </div>
  </section>
</template>
<script>
import MySelect from './UI/MySelect.vue';
export default {
    name: "product-heder",
    components: { MySelect }
};
</script>
<style>
.product-header-container {
  display: flex;
  margin-bottom: 2.7rem;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.product-header-title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 88%;
  letter-spacing: -0.04em;
  margin-bottom: 3rem;
  margin-left: 1rem;
}
.product-header-filter {
  display: none;
}
@media (max-width: 1030px) {
  .product-header-container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
@media (max-width: 700px) {
  .product-header-counter {
    display: none;
  }
  .product-header-filter {
    display: block;
  }
}
</style>
