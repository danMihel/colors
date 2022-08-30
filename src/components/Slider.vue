<template>
  <section>
    <div class="slider-text-liner">
      <div class="slider-text-wraper__btn-prev">
        <img
          @click="prevSlide"
          src="@/assets/img/rigthArrow.svg"
          v-if="this.currentSlideIndex > 0"
        />
      </div>
      <div class="slider-text-wraper">
        <div class="slider-text">
          <div class="slider-text__title">
            {{ this.$store.state.sliderItems[this.currentSlideIndex].title }}
          </div>
          <div class="slider-text__subtitle">
            {{ this.$store.state.sliderItems[this.currentSlideIndex].subtitle }}
          </div>
          <div class="slider-indicator">
            <div v-for="number in this.$store.state.sliderItems.length">
              <div class="active" v-if="number === currentSlideIndex + 1"></div>
              <div class="passive" v-else></div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-text-wraper__btn-next">
        <div
          v-if="
            this.currentSlideIndex < this.$store.state.sliderItems.length - 1
          "
        >
          <img @click="nextSlide" src="@/assets/img/rigthArrow.svg" />
        </div>
      </div>
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
.active {
  width: 6px;
  height: 6px;
  background: #ffffff;
  border-radius: 50%;
}
.passive {
  width: 6px;
  height: 6px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 0.2;
}
.slider-indicator {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 124px;
  height: 32px;
  left: 905px;
  top: 593px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  margin-top: calc(1rem + 4vw);
}

.slider-text-wraper__btn-next {
  position: relative;
  top: 135px;
  margin-right: auto;
  cursor: pointer;
  width: 24px;
}
.slider-text-wraper__btn-prev {
  position: relative;
  top: 130px;
  transform: rotate(180deg);
  margin-left: auto;
  cursor: pointer;
  width: 24px;
}
.slider-text-liner {
  position: absolute;
  display: flex;
  align-items: baseline;
  top: calc(2rem + 14vw);
  left: 0;
  width: 100%;
  z-index: 1;
}
.slider-text {
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.slider-wraper {
  overflow: hidden;
}
.slider-container {
  display: flex;
  max-width: 100%;
  transition: all ease-out 0.7s;
}
.slider-text-wraper {
  left: 0;
  z-index: 1;
  padding: 0 10%;
  top: 300px;
}
.slider-text__title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: calc(2rem + 3vw);
  line-height: 88%;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
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
@media (max-width: 1030px) {
  .slider-text-wraper {
    top: calc(3rem + 13vw);
  }
}
@media (max-width: 900px) {
  .slider-wraper {
    display: none;
  }
  .slider-text-wraper {
    display: none;
  }
  .liner {
    display: none;
  }
}
</style>
