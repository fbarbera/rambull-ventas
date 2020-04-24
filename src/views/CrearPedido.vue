<template>
  <div>
    <Pedidos :productos="$route.params.productos" />
  </div>
</template>

<script>
import Pedidos from "@/components/Pedidos.vue";

export default {
  props: ["productos"],
  components: {
    Pedidos
  }
};
</script>

<style scoped>
.btnSubmit {
  border: none;
  background-color: #39b982;
  color: whitesmoke;
  height: 40px;
  width: 54px;
  font-size: 14px;
  border-radius: 40px;
}
.btnDisable {
  border: none;
  background-color: gray;
  color: black;
  height: 40px;
  width: 54px;
  font-size: 14px;
  border-radius: 40px;
}
</style>
