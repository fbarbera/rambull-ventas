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
export default {
  data() {
    return {
      products: [
        { id: "1", estilo: "Rubia" },
        { id: "2", estilo: "Roja" },
        { id: "3", estilo: "Negra" },
        { id: "4", estilo: "IPA" }
      ]
    };
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
  width: 38px;
  font-size: 34px;
  border-radius: 40px;
}
</style>
