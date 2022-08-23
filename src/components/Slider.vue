<template>
<section>
    <div class="slider-container">

    </div>
</section>

</template>
<script>
export default{
    name: 'slider',
}
</script>
<style scoped>
.slider-container{
    height: 560px;
    width: 100%;
    background-color: rgb(27, 61, 31);
}
@media (max-width: 1030px) {
    .slider-container{
        display: none;
    }
}
</style>