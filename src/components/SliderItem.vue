<template>
    <img :src="require('../assets/img/' + itemData.img)" />
</template>
<script>
export default {
  name: "slider-item",
  props: {
    itemData: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style scoped>
img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
