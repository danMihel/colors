<template>
  <div class="custom-select-filler" :class="{  hide:open}"></div>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open; ">
      {{ selected.name }}
    </div>
    <div class="items" :class="{ selectHide: !open }" >
      <div  v-for="(option, i) of options" :key="option.name" 
      @click=" selected = option; open = false; $emit('input', option);">
       <div @click="changeOptions"> {{ option.name }}</div> 
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default ? this.default : this.options.length > 0 ? this.options[0] : null,
      open: false,
    };
  },
  methods: {
    changeOptions(event) {
        this.$store.commit('setSelectedSort', event.target.innerHTML);
      },
    },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
 
.open {
  opacity: 0;
}
.hide{
  display:block !important;
}

.custom-select-filler {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
  display: none;
}

.custom-select {
  position: relative;
  width: 17.5rem;
  text-align: left;
  outline: none;
  height: 47px;
  line-height: 47px;
  z-index: 3;
}

.custom-select .selected {
  border-radius: 6px;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  text-align: center;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  margin-left: 1rem;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: rgb(0, 0, 0) transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  overflow: hidden;
  position: absolute;
  background-color: #FFFFFF;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #1F2020;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background: #7BB899;
}

.selectHide {
  display: none;
}
</style>

