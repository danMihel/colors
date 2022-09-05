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
        new: false,
        stock: false,
        sale: true,
      },
      {
        id: 2,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        image: require("@/assets/products/2.png"),
        cash: 0,
        new: false,
        stock: false,
      },
      {
        id: 3,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        image: require("@/assets/products/3.png"),
        cash: 0,
        new: false,
        stock: true,
        sale: true,
      },
      {
        id: 4,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/4.png"),
        cash: 0,
        new: false,
        stock: false,
        sale: true,
      },
      {
        id: 5,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/5.png"),
        cash: 0,
        new: false,
        stock: true,
      },
      {
        id: 6,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 6000,
        image: require("@/assets/products/4.png"),
        cash: 0,
        new: false,
        stock: true,
      },
      {
        id: 7,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 4800,
        image: require("@/assets/products/2.png"),
        cash: 0,
        sale: true,
      },
      {
        id: 8,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 5290,
        image: require("@/assets/products/3.png"),
        cash: 0,
        new: true,
        stock: true,
      },
      {
        id: 9,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/4.png"),
        cash: 0,
        new: true,
        stock: true,
        sale: true,
      },
      {
        id: 10,
        amount: 1,
        title: "Краска Wallquest, Brownsone MS90102",
        price: 2800,
        image: require("@/assets/products/5.png"),
        cash: 0,
        new: true,
        stock: true,
        sale: true,
      },
    ],
    showCart: false,
    cartTotalPrice: 0,
    cartCount: 0,
    showSwitcher: false,
    selectedSort: "",
    switcherOptons: [
      { name: "Новинки", statys: false },
      { name: "ЕСТЬ В НАЛИЧИИ", statys: false },
      { name: "РАСПРОДАЖА", statys: false },
    ],
    sortOptons: [
      { name: "Сначала дорогие" },
      { name: "Сначала недорогие" },
      { name: "Сначала популярные" },
      { name: "Сначала новые" },
    ],
    sliderItems: [
      {
        id: 1,
        title: "Краски ",
        subtitle:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        img: "slide1.png",
      },
      {
        id: 2,
        title: "Слайд №2",
        subtitle:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        img: "slide2.png",
      },
      {
        id: 3,
        title: "Изображение",
        subtitle:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        img: "slide3.png",
      },
      {
        id: 4,
        title: "Слайд №4",
        subtitle:
          "Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!",
        img: "slide2.png",
      },
    ],
  },
  getters: {
    sortedProducts(state, getters) {
      if (state.selectedSort === "Сначала недорогие")
        return getters.filterProducts.sort((prod1, prod2) => {
          return prod1.price - prod2.price;
        });
      if (state.selectedSort === "Сначала дорогие")
        return getters.filterProducts
          .sort((prod1, prod2) => {
            return prod1.price - prod2.price;
          })
          .reverse();
      else return getters.filterProducts;
    },
    filterProducts(state) {
      if (
        state.switcherOptons[1].statys &&
        state.switcherOptons[2].statys &&
        state.switcherOptons[0].statys
      ) {
        return state.products.filter((prod) => prod.stock && prod.sale && prod.new)
      } 
      if (state.switcherOptons[0].statys && state.switcherOptons[1].statys) {
        return state.products.filter((prod) => prod.new && prod.stock);
      }
      if (state.switcherOptons[0].statys && state.switcherOptons[2].statys) {
        return state.products.filter((prod) => prod.new && prod.sale);
      }
      if (state.switcherOptons[1].statys && state.switcherOptons[2].statys) {
        return state.products.filter((prod) => prod.stock && prod.sale);
      }
      else if (state.switcherOptons[1].statys) {
        return state.products.filter((prod) => prod.stock);
      } else if (state.switcherOptons[2].statys) {
        return state.products.filter((prod) => prod.sale);
      } else if (state.switcherOptons[0].statys) {
        return state.products.filter((prod) => prod.new);
      } else return state.products;
    },
  },
  mutations: {
    setSelectedSort(state, newValue) {
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
    rebotCartProduct(item) {
      item.amount = item.cash;
      item.cash = 0;
      this.commit("cartTotalPrice");
      this.commit("setCartCount");
    },
  },
  actions: {},
  modules: {},
});
