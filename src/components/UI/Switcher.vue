<template>
  <div class="switcher-container">
    <div class="switcher" :class="{ on: isActive }" @click="switcher">
      <img src="@/assets/img/ellipse.svg" />
    </div>
    <div class="switcher-text">{{ text }}</div>
  </div>
</template>
<script>
export default {
  name: "Switcher",
  props: {
    text: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    switcher() {
      this.isActive ? (this.isActive = false) : (this.isActive = true);
    },
  },
};
</script>
<style scoped>
.switcher-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.switcher {
  height: 22px;
  width: 36px;
  border-radius: 40px;
  background: #f2f2f2;
  margin-right: 0.8rem;
  transition-property: background-color;
  transition-duration: 0.2s;
}
.switcher:hover{
    cursor:pointer
}
.switcher img {
  padding: 7px;
  transition-property: margin-left;
  transition-duration: 0.2s;
}
.on {
  background: #7bb899;
  transition-property: background-color;
  transition-duration: 0.2s;
}
.on img {
  margin-left: 0.85rem;
  transition-property: margin-left;
  transition-duration: 0.2s;
}
.switcher-text {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
</style>
