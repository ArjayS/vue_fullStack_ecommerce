<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <ProductsList :products="cartItems" />
    <h3 id="total-price">Total: ${{ totalPrice }}</h3>
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>

<script>
import { cartItems } from "../fake-data";
import ProductsList from "../components/ProductsList.vue";

export default {
  name: "CartPage",
  components: {
    ProductsList,
  },
  data() {
    return {
      cartItems,
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
};
</script>
