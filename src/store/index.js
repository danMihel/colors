import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [
      {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        image: require("@/assets/products/2.png")
      },
      {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        image: require("@/assets/products/3.png")
      },
      {
        id: 4,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/4.png")
      },
    ],
    products: [
      {
        id: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        image: require("@/assets/products/1.png")
      },
      {
        id: 2,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        image: require("@/assets/products/2.png")
      },
      {
        id: 3,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        image: require("@/assets/products/3.png")
      },
      {
        id: 4,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/4.png")
      },
      {
        id: 5,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/5.png")
      },
      {
        id: 6,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        image: require("@/assets/products/4.png")
      },
      {
        id: 7,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        image: require("@/assets/products/2.png")
      },
      {
        id: 8,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        image: require("@/assets/products/3.png")
      },
      {
        id: 9,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/4.png")
      },
      {
        id: 10,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/5.png")
      },
    ],
    showCart: false,
  },
  getters: {
  },
  mutations: {
    setShowCart(state) {
      console.log(state.showCart)
      state.showCart? state.showCart = false:state.showCart = true;
    },
  },
  actions: {
  },
  modules: {
  }
})
