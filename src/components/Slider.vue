<template>
  <section>
    <div class="slider-wraper">
      <div class="slider-container" :style="{ 'margin-left': '-' + (100 * currentSlideInde) + '%'}">
        <SliderItem
          v-for="item in $store.state.sliderItems"
          :key="item.id"
          :itemData="item"
         
        />
      </div>
      <button @click="prevSlide">prev</button>
      <button @click="nextSlide">next</button>
    </div>
  </section>
</template>
<script>
import SliderItem from "./SliderItem.vue";
export default {
  name: "slider",
  components: { SliderItem },
  data() {
    return {
      currentSlideInde: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideInde > 0) {
        this.currentSlideInde--;
      }
    },
    nextSlide() {
      this.currentSlideInde++;
    },
  },
};
</script>
<style scoped>
.slider-wraper {
  overflow: hidden;
  background-color: rgb(27, 61, 31);
}
.slider-container {
  display: flex;
  max-width: 100%;
}
@media (max-width: 743px) {
  .slider-wraper {
    display: none;
  }
}
</style>
