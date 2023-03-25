<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img :src="product.imageUrl" alt="" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">{{ product.price }}</h3>
      <p>Average Rating: {{ product.averageRating }}</p>
      <button
        id="add-to-cart"
        v-on:click="addToCart"
        v-if="!showSuccessMessage"
      >
        Add to Cart
      </button>
      <button id="add-to-cart" class="green-button" v-if="showSuccessMessage">
        Successfully added item to cart!
      </button>
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

      // @2:58:00, Adding styling to the user interface
      showSuccessMessage: false,
    };
  },

  // @2:54:00, Adding events to be able to make POST call using Axios. 'v-on:click="addToCart"'
  methods: {
    async addToCart() {
      await axios.post("/api/users/12345/cart", {
        productId: this.$route.params.id,
      });

      // @2:58:00, Adding styling to the user interface
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.$router.push("/products");
      }, 1500);
    },
  },
  // @2:54:00, Adding events to be able to make POST call using Axios

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

.green-button {
  background-color: green;
}
</style>
