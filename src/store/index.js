import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    products: [
      {
        id: 1,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        image: require("@/assets/products/1.png"),
        cash: 0,
      },
      {
        id: 2,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        image: require("@/assets/products/2.png"),
        cash: 0,
      },
      {
        id: 3,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        image: require("@/assets/products/3.png"),
        cash: 0,
      },
      {
        id: 4,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/4.png"),
        cash: 0,
      },
      {
        id: 5,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/5.png"),
        cash: 0,
      },
      {
        id: 6,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        image: require("@/assets/products/4.png"),
        cash: 0,
      },
      {
        id: 7,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        image: require("@/assets/products/2.png"),
        cash: 0,
      },
      {
        id: 8,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        image: require("@/assets/products/3.png"),
        cash: 0,
      },
      {
        id: 9,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/4.png"),
        cash: 0,
      },
      {
        id: 10,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/5.png"),
        cash: 0,
      },
    ],
    showCart: false,
    cartTotalPrice: 0,
    cartCount: 0,
    showSwitcher: false,
    selectedSort: "",
    sortOptons: [
      { name: "Сначала дорогие" },
      { name: "Сначала недорогие" },
      { name: "Сначала популярные" },
      { name: "Сначала новые" },
    ],
    sliderItems: [
      {id: 1, name: 'img1', img: 'slide1.png' },
      {id: 2, name: 'img2', img: 'slide2.png'},
      {id: 3, name: 'img3', img: 'slide3.png'},
      {id: 4, name: 'img4', img: 'slide2.png'}

    ],
  },
  getters: {
    sortedProducts(state) {
      if (state.selectedSort === "Сначала недорогие")
        return [...state.products].sort((prod1, prod2) => {
          return prod1.price - prod2.price;
        });
      if (state.selectedSort === "Сначала дорогие")
        return [...state.products]
          .sort((prod1, prod2) => {
            return prod1.price - prod2.price;
          })
          .reverse();
      else return state.products;
    },
  },
  mutations: {
    setSelectedSort(state, newValue) {
      console.log("setSelectedSort", newValue);
      state.selectedSort = newValue;
    },

    setshowSwitcher(state) {
      state.showSwitcher
        ? (state.showSwitcher = false)
        : (state.showSwitcher = true);
      state.showSwitcher
        ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
        : (document.getElementsByTagName("body")[0].style.overflow = "auto");
    },

    setShowCart(state) {
      state.showCart ? (state.showCart = false) : (state.showCart = true);
      state.showCart
        ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
        : (document.getElementsByTagName("body")[0].style.overflow = "auto");
      this.commit("setCartCount");
    },
    clearCart(state) {
      state.cart = [];
      for (let i of state.products) {
       i.amount = 1;
       i.cash = 0;
      }
      this.commit("cartTotalPrice");
      this.commit("setCartCount");
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
        total += item.amount;
      }
      state.cartCount = total;
    },
    multiPriceIncrise(state, item) {
      let found = state.cart.find((i) => i.id == item.id);
      if (found.cash > 0) {
      } else {
        found.amount += 1;
        this.commit("cartTotalPrice");
        this.commit("setCartCount");
      }
    },
    multiPriceDecrise(state, item) {
      let found = state.cart.find((i) => i.id == item.id);
      if (found.cash > 0) {
      } else {
        if (found.amount > 0) {
          found.amount -= 1;
          this.commit("cartTotalPrice");
          this.commit("setCartCount");
        }
      }
    },
    removeFromCart(state, item) {
      let index = state.cart.indexOf(item);
      if (index > -1) {
        let product = state.cart[index];
        state.cartCount -= product.quantity;
      }
      item.cash = item.amount;
      item.amount = 0;
      this.commit("setCartCount");
      this.commit("cartTotalPrice");
    },
    addToCart(state, item) {
      let index = state.products.indexOf(item);
      let prod = state.products[index];
      if (state.cart.includes(prod)) {
      } else {
        state.cart.push(prod);
        this.commit("cartTotalPrice");
        this.commit("setCartCount");
      }
    },
    rebotCartProduct(state, item) {
      item.amount = item.cash;
      item.cash = 0;
      this.commit("cartTotalPrice");
      this.commit("setCartCount");
    },
  },
  actions: {},
  modules: {},
});
