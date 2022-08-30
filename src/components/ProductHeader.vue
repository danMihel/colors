<template>
  <section>
    <transition name="fade">
      <div class="choiceBar-filler" v-if="$store.state.showSwitcher"></div>
    </transition>
    <transition name="slide-fade">
      <div class="choiceBar-wraper" v-if="$store.state.showSwitcher">
        <div
          class="choiceBar-padding"
          @click.stop="$store.commit('setshowSwitcher')"
        ></div>
        <div class="choiceBar">
          <div
            class="choiceBar-forelock"
            @click.stop="$store.commit('setshowSwitcher')"
          >
            <img src="@/assets/img/forelock.svg" />
          </div>
          <ChoiceBar />
          <div
            class="choiceBar-forelock"
            @click.stop="$store.commit('setshowSwitcher')"
          >
          </div>
        </div>
      </div>
    </transition>
    <h2 class="product-header-title">Краски</h2>
    <div class="product-header-wraper">
      <div class="product-header-container">
        <div class="product-header-counter">{{ $store.state.products.length}} товаров</div>
        <div
          class="product-header-filter"
          @click.stop="$store.commit('setshowSwitcher')"
        >
          Фильтры
        </div>
      </div>
      <CustomSelect :options="$store.state.sortOptons"/>
    </div>
  </section>
</template>
<script>
import ChoiceBar from "./ChoiceBar.vue";
import CustomSelect from "./UI/CustomSelect.vue";
export default {
  name: "product-heder",
  components: { CustomSelect, ChoiceBar, CustomSelect },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(320px);
  opacity: 0;
}

.product-header-wraper {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

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
  display: none;
}

.choiceBar-wraper {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.choiceBar-filler {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.choiceBar-padding {
  position: static;
  height: 20vh;
}

.choiceBar {
  border-radius: 24px 24px 0px 0px;
  position: relative;
  background: #ffffff;
  padding-left: 1.5rem;
  z-index: 1;
  top: -2rem;
  height: 100%;
  transition-duration: 2s;
}

.choiceBar-forelock {
  display: flex;
  padding-top: 1rem;
  padding-bottom: 2rem;
  justify-content: center;
}

.product-header-filter {
  display: none;
  cursor: pointer;
}
.product-header-counter {
  text-align: left;
}

@media (max-width: 1030px) {
  .product-header-container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

@media (max-width: 743px) {
  .product-header-counter {
    display: none;
  }

  .product-header-filter {
    display: block;
  }

  .product-header-title {
    display: block;
  }
}
</style>
