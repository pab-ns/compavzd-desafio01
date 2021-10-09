import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      login: false,
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      login: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      login: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// guard
// import Store para usar state
router.beforeEach((to, from, next) => {
  if (to.meta.login == true) {
    if (Store.state.usuarioActual) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
