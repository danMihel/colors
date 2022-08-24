<template>
<section>
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
export default{
    name:'product-heder',
}

</script>
<style>
.product-header-container{
    display: flex;
    margin-bottom: 2.7rem;
}
.product-header-container select{
    margin-left: auto;
}
@media (max-width: 1030px) {
 .product-header-container {
    margin-left: 1rem;
    margin-right: 1rem;
 }
}
</style>