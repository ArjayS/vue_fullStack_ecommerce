<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
// @2:41:15, Using Axios in the ProductsPage.vue view page
import axios from "axios";

// import { products } from "../fake-data"; <--- Using the fake-data.js file
import ProductsGrid from "../components/ProductsGrid.vue";

export default {
  name: "ProductsPage",
  components: {
    ProductsGrid,
  },
  data() {
    return {
      products: [],
    };
  },

  // @2:41:15, Specific code using Axios Call
  async created() {
    const result = await axios.get("/api/products");
    const products = result.data;
    this.products = products;
  },
  // @2:41:15, Specific code using Axios Call
};
</script>
