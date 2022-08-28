import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [

    ],
    products: [
      {
        id: 1,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        image: require("@/assets/products/1.png")
      },
      {
        id: 2,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        image: require("@/assets/products/2.png")
      },
      {
        id: 3,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        image: require("@/assets/products/3.png")
      },
      {
        id: 4,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/4.png")
      },
      {
        id: 5,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/5.png")
      },
      {
        id: 6,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        image: require("@/assets/products/4.png")
      },
      {
        id: 7,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        image: require("@/assets/products/2.png")
      },
      {
        id: 8,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        image: require("@/assets/products/3.png")
      },
      {
        id: 9,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/4.png")
      },
      {
        id: 10,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/5.png")
      },
    ],
    showCart: false,
    cartTotalPrice: 0,
    cartCount: 0,
    showSwitcher: false,
  },
  getters: {
  },
  mutations: {
    setshowSwitcher(state) {
      state.showSwitcher ? state.showSwitcher = false : state.showSwitcher = true;
      state.showSwitcher ? document.getElementsByTagName('body')[0].style.overflow = 'hidden' : document.getElementsByTagName('body')[0].style.overflow = 'auto'
    },

    setShowCart(state) {
      state.showCart ? state.showCart = false : state.showCart = true;
      state.showCart ? document.getElementsByTagName('body')[0].style.overflow = 'hidden' : document.getElementsByTagName('body')[0].style.overflow = 'auto'
    },
    clearCart(state) {
      state.cart = []
      this.commit("cartTotalPrice")
    },
    cartTotalPrice(state) {
      state.cartTotalPrice = 0;
      for (let item of state.cart) {
        state.cartTotalPrice += item.price * item.amount;
      }
      return state.cartTotalPrice.toFixed(2);
    },
    setCartCount(state) {
      let total = 0;
      for (let item of state.cart) {
        total += item.amount
      }
      state.cartCount = total;
    },
    multiPriceIncrise(state, item) {
      let found = state.cart.find((i) => i.id == item.id);
      found.amount += 1;
      this.commit("cartTotalPrice")
      this.commit("setCartCount")
    },
    multiPriceDecrise(state, item) {
      let found = state.cart.find((i) => i.id == item.id);
      if (found.amount > 0) {
        found.amount -= 1;
        this.commit("cartTotalPrice")
        this.commit("setCartCount")
      }
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      if (index > -1) {
        let product = state.cart[index];
        state.cartCount -= product.quantity;
        state.cart.splice(index, 1);
      }
      item.amount = 0
      this.commit("setCartCount")
      this.commit("cartTotalPrice")
    },
    addToCart(state, item) {
      let index = state.products.indexOf(item);
      let prod = state.products[index];
      if(state.cart.includes(prod)){
        alert('Товар уже в корзине')
      }else{
        state.cart.push(prod);
        this.commit("cartTotalPrice");
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
