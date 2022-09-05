<template>
    <section v-for="item in $store.state.switcherOptons" :key="item.name">
        <Switcher :filter="item" :key="item.name" />
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