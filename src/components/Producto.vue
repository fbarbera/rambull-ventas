<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product">
        <h3>{{ product.estilo }}</h3>
        <button class="addToCart" @click="updateCart(product.id)">
          +
        </button>
        <button class="addToCart" @click="removeFromCart(product.id)">
          -
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import LocalServices from "@/services/LocalServices.js";
export default {
  data() {
    return { products: [] };
  },
  created() {
    LocalServices.getProductos()
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.log("There was an error: ", error.response);
      });
  },
  methods: {
    updateCart(id) {
      this.$emit("add-to-cart", id);
    },
    removeFromCart(id) {
      this.$emit("remove-from-cart", id);
    }
  }
};
</script>

<style scoped>
.addToCart {
  border: none;
  background-color: #39b982;
  color: whitesmoke;
  height: 40px;
  width: 100px;
  font-size: 14px;
  border-radius: 40px;
}
</style>
