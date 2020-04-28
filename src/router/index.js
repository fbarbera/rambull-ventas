import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CrearPedido from "../views/CrearPedido.vue";
import CrearProducto from "../views/CrearProducto.vue";
import ListaPedidos from "../views/ListaPedidos.vue";
import PedidoDetalle from "../views/PedidoDetalle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/Pedidos",
    name: "Pedidos",
    props: { productos: [] }, //true,
    component: CrearPedido //require('@/components/Pedidos')
  },
  {
    path: "/CrearProducto",
    name: "CrearProducto",
    component: CrearProducto
  },
  {
    path: "/ListaPedidos",
    name: "ListaPedidos",
    component: ListaPedidos,
    props: true
  },
  {
    path: "/PedidoDetalle",
    name: "PedidoDetalle",
    component: PedidoDetalle,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
