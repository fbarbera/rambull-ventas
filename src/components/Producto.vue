<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product">
        <h3>{{ product.estilo }} </h3>
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
        { id: "1", estilo: "Rubia", cantidad:0 },
        { id: "2", estilo: "Roja", cantidad:0},
        { id: "3", estilo: "Negra", cantidad:0 },
        { id: "4", estilo: "IPA", cantidad:0 }
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
 width: 100px;
 font-size: 14px;
 border-radius: 40px;}
</style>
