<template>
    <section>
        <Switcher :text="'Новинки'" />
        <Switcher :text="'Есть в наличии'" />
        <Switcher :text="'Контрактные'" />
        <Switcher :text="'Эксклюзивные'" />
        <Switcher :text="'Распродажа'" />
    </section>
</template>
<script>
import Switcher from './UI/Switcher.vue';
    export default{
    name: "choice-bar",
    components: { Switcher }
}
</script>
<style>

</style>