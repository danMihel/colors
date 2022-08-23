<template>
  <div class="product-container">
    <img class="product-img" :src="product.image" />
    <div>
      <div class="product-title">{{ product.title }}</div>
      <div class="product-price-container">
        <div class="product-price">{{ product.price }} ₽</div>
        <div class="order-btn"><img src="@/assets/img/plus.svg" /></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product",
  props: {
    product: {
      type: Object,
      require: true,
    },
  },
};
</script>
<style scoped>
.product-img {
  min-height: 200px;
  min-width: 200px;
}
.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 24.5rem;
  width: 17rem;
  margin-bottom: 1rem;
}
.product-title {
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
}
.product-price-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-price-container:hover .order-btn {
  opacity: 1;
  transition: all 0.5s ease;
}

.product-price {
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
}
.order-btn {
  border-radius: 8px;
  background: #7bb899;
  height: 2rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
}
</style>
