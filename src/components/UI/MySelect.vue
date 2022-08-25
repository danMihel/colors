<template>
  <div class="select">
    <div class="option">Сначала дорогие</div>
    <div>Сначала недорогие</div>
    <div>Сначала популярные</div>
    <div>Сначала новые</div>
  </div>
</template>
<script>
export default {
  name: "my-select",

};
</script>
<style scoped>
.select {
  margin-left: auto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.option {
  padding: 1rem;
}
</style>
