<template>
  <section>
    <div class="header-container">
      <img class="heder-bourger" src="@/assets/img/burger.svg" />
      <img class="header-logo" src="@/assets/img/logo.svg" />
      <nav class="header-nav">
        <li>ПРОДУКТЫ</li>
        <li>ЦВЕТА</li>
        <li>ВДОХНОВЕНИЕ</li>
        <li>СОВЕТЫ</li>
        <li>НАЙТИ МАГАЗИН</li>
      </nav>
      <div class="spaser"></div>
      <div class="header-phone">
        <a class="header-phone__number" href="tel:+7(495)221-77-69">
          +7 (495) 221-77-69
        </a>
        <div class="header-phone__subtitle">Заказать звонок</div>
      </div>
      <div class="header-icons">
        <img src="@/assets/img/search.svg" />
        <img src="@/assets/img/profile.svg" />
        <img src="@/assets/img/heart.svg" />
        <div class="header-icons__cart">4</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "My-header",
  components: {},
};
</script>

<style>
li {
  list-style-type: none;
  margin-right: 1.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #1f2020;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.header-container {
  display: flex;
  padding: 2rem 2.7rem;
  align-items: center;
}
.heder-bourger {
  height: 1.5rem;
  width: 1.5rem;
}

.header-nav {
  display: flex;
  margin: 0 auto;
}
.spaser {
  margin: 0 auto;
}
.header-phone {
  text-align: start;
}
.header-phone__number {
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: #1f2020;
}
.header-phone__subtitle {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #1f2020;
  opacity: 0.3;
}
.header-icons {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.header-icons img {
  margin-right: 1.5rem;
}

.header-icons__cart {
  display: flex;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  background-color: #7bb899;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #1f2020;
}
.heder-bourger{
  display: none;
}
@media (max-width: 1160px) {
  .header-nav li {
    margin-right: 0.7rem;
  }
  .spaser {
    display: none;
  }
  .header-nav {
    margin-left: auto;
  }
}
@media (max-width: 1030px) {
  .heder-bourger{
    display: block;
  }
  .header-nav {
    display: none;
  }
  .header-phone {
    display: none;
  }
  .header-logo {
    margin: auto;
    height: 1.5rem;
  }
  .header-icons {
    margin-left: 0;
  }
  .header-icons img {
    display: none;
  }
  .header-containser {
    padding: 1.5rem 1.5rem;
    align-items: center;
  }
}
</style>
