<template>
  <div>
    <ul>
      <li v-for="product in productos" :key="product.id">
        <h3>{{ product.estilo }}</h3>
        <img src="../../public/img/suma.jpg" @click="updateCart(product.id)" />
        <img
          src="../../public/img/resta.jpg"
          @click="removeFromCart(product.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  created() {
    this.$store.dispatch("fetchProductos");
    //this.productos=ProductosActivos();
  },
  computed: {
    ProductosActivos() {
      return this.$store.getters.ProductosActivos;
    },
    ...mapState(["productos"])
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
  background-color: #39b982;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: whitesmoke;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
img {
  width: 8%;
}
</style>
