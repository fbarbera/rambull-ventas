<template>
  <div>
    <button class="button" @click="updateCart">Agregar al carrito</button>
    <p>{{ producto }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      producto: 0
    };
  },
  methods: {
    updateCart() {
      this.producto++;
      this.$emit('add-to-cart', this.producto.id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
