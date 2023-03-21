<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img :src="product.imageUrl" alt="" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">{{ product.price }}</h3>
      <p>Average Rating: {{ product.averageRating }}</p>
      <button id="add-to-cart">Add to Cart</button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
  </div>
  <NotFoundPage v-else />
</template>

<script>
// @2:49:10, Working on the ProductDetailPage.vue and using axios
import axios from "axios";

// import { products } from "../fake-data"; <--- Using the fake-data.js file
import NotFoundPage from "./NotFoundPage";
export default {
  name: "ProductDetailPage",
  components: {
    NotFoundPage,
  },
  data() {
    return {
      // specifically looking for the exactid for the specific item :id
      // product: products.find((p) => p.id === this.$route.params.id), <--- Using the fake-data.js file

      product: {},
    };
  },

  // @2:50:00, Applying the Axios logic
  async created() {
    const result = await axios.get(`/api/products/${this.$route.params.id}`);
    const product = result.data;
    this.product = product;
  },
  // @2:50:00, Applying the Axios logic
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
</style>
