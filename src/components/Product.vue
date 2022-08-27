<template>
  <div class="product-container">
    <img class="product-img" :src="product.image" />
    <div>
      <div class="product-title">{{ product.title }}</div>
      <div class="product-price-container">
        <div class="product-price">{{ product.price }} ₽</div>
        <div class="order-btn" @click="$store.commit('addToCart', product)"><img src="@/assets/img/plus.svg" /></div>
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
  min-height: 12.5rem;
  min-width: 12.5rem;
  margin: auto;
}
.product-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 24.5rem;
  width: 17rem;

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
.product-container:hover .order-btn {
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
.order-btn:active{
  background: #438564;
}
@media (max-width: 1030px) {
  .product-img {
    min-height: 7rem;
    min-width: 7rem;
  }
  .product-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 17rem;
    width: 10rem;
    padding: 1rem;
    margin: auto;
  }
  .order-btn {
    border-radius: 6px;
    background: #f2f2f2;
    height: 1.5em;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: all 0.5s ease;
  }
  .order-btn:active{
     background: #7bb899;
  }
  
   .order-btn img{
    width: 1rem;
    height: 1rem;
   }
}
</style>
