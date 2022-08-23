<template>

<MyHeader/>
<Crumbs/>
<Slider/>
<ChoiceBar/>

</template>
<script>
import MyHeader from './MyHeader.vue';
import Slider from './Slider.vue';
import Crumbs from './Crumbs.vue';
import ChoiceBar from './ChoiceBar.vue';
export default{
    name: 'Shop',
    components: {
    MyHeader,
    Slider,
    Crumbs,
    ChoiceBar
}
}
</script>
<style>

</style>