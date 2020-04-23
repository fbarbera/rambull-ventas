<template>
  <div>
    <ul>
      <li v-for="product in productos" :key="product.id">
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
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("fetchProductos");
  },
  computed: mapState(["productos"]),
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
  width: 38px;
  font-size: 14px;
  border-radius: 40px;
}
</style>
