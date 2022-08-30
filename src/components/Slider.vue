<template>
  <section>
    <div class="slider-text-wraper">
      <img class="slider-text-wraper__btn-prev" @click="prevSlide" src="@/assets/img/rigthArrow.svg"/>
      <div class="slider-text">
        <div class="slider-text__title">
          {{ this.$store.state.sliderItems[this.currentSlideIndex].title }}
        </div>
        <div class="slider-text__subtitle">
          {{ this.$store.state.sliderItems[this.currentSlideIndex].subtitle }}
        </div>
      </div>
      <img class="slider-text-wraper__btn-next" @click="nextSlide" src="@/assets/img/rigthArrow.svg"/>
    </div>
    <div class="slider-wraper">
      <div
        class="slider-container"
        :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
      >
        <SliderItem
          v-for="item in $store.state.sliderItems"
          :key="item.id"
          :itemData="item"
        />
      </div>
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
      currentSlideIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }else{
        this.currentSlideIndex = this.$store.state.sliderItems.length - 1
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.$store.state.sliderItems.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
  },
};
</script>
<style scoped>
.slider-text-wraper__btn-next {
    margin-top: 130px;
    margin-left: auto;
    cursor: pointer;
}
.slider-text-wraper__btn-prev {
    margin-top: 130px;
    transform: rotate(180deg);
    margin-right: auto;
    cursor: pointer;
}
.slider-wraper {
  overflow: hidden;
  background-color: rgb(27, 61, 31);
}
.slider-container {
  display: flex;
  max-width: 100%;
  transition: all ease-out 0.7s;
}
.slider-text-wraper {
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  text-align: center;
  top: calc(2rem + 14vw);
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 0 20%;
}

.slider-text__title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 88%;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1.5rem; 
}

.slider-text__subtitle {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  width: 30rem;
}
@media (max-width:900px) {
  .slider-wraper {
    display: none;
  }
  .slider-text-wraper{
    display: none;
  }
}
</style>
