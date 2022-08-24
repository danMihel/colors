<template>
  <section>
    <h2 class="product-header__title">Краски</h2>
    <div class="product-header-container">
      <div>412 товаров</div>
      <select>
        <option>Сначала дорогие</option>
        <option>Сначала дешевые</option>
      </select>
    </div>
  </section>
</template>
<script>
export default {
  name: "product-heder",
};
</script>
<style>

.product-header-container {
  display: flex;
  margin-bottom: 2.7rem;
}
.product-header-container select {
  margin-left: auto;
}
.product-header__title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 88%;
  letter-spacing: -0.04em;
  margin-bottom: 3rem;
}
@media (max-width: 1030px) {
  .product-header-container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
