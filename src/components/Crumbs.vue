<template>
  <section>
    <nav class="crumbs-container">
      <li>Главная</li>
      <li>Продукты</li>
      <li>Краски</li>
    </nav>
  </section>
</template>
<script>
export default {
  name: "Crumbs",
};
</script>
<style scoped>
.crumbs-container {
  position: absolute;
  margin-top: 2rem;
  margin-left: 2rem;
  display: flex;
}
.crumbs-container li {
  padding-left: 0.8rem;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 100%;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.3;
  color: #ffffff;
  cursor:pointer
}
.crumbs-container li:first-child {
  list-style-type: none;
}
@media (max-width: 1030px) {
  .crumbs-container li {
    color: #1f2020;
  }
  .crumbs-container {
    margin-top: 1rem;
    margin-left: 1.5rem;
  }
}
</style>
