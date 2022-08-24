<template>
  <select class="select">
    <option class="option">Сначала дорогие</option>
    <option>Сначала недорогие</option>
    <option>Сначала популярные</option>
    <option>Сначала новые</option>
  </select>
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
  border: none;
  position: relative;
  outline: none;
}
.option {
  padding: 1rem;
}
</style>
