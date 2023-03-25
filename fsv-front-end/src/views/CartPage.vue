<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <ProductsList :products="cartItems" />
    <h3 id="total-price">Total: ${{ totalPrice }}</h3>
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>

<script>
// @2:51:30, Working on the 'CartPage.vue' using axios.
import axios from "axios";

// import { cartItem } from "../fake-data"; <--- Using the fake-data.js file
import ProductsList from "../components/ProductsList.vue";

export default {
  name: "CartPage",
  components: {
    ProductsList,
  },
  data() {
    return {
      // cartItems,
      cartItems: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },

  // @2:52:00, Applying Axios Logic
  async created() {
    const result = await axios.get("/api/users/12345/cart");
    const cartItems = result.data;
    this.cartItems = cartItems;
  },
  // @2:52:00, Applying Axios Logic
};
</script>
