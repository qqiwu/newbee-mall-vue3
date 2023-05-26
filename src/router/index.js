import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { ElMessage } from "element-plus";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/product/:id",
    name: "ProductView",
    component: () => import("../components/product.vue"),
    meta: { requiresAuth: true }, // 添加meta字段，表示该路由需要鉴权
  },
  {
    path: "/shop-cart",
    name: "shop-cart",
    component: () => import("../views/ShopCart.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 添加导航守卫，用于检查用户是否已经登录并具有有效的token
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const token = localStorage.getItem("token");

  if (requiresAuth && !token) {
    // 如果用户未登录并且路由需要鉴权，则重定向到登录页面
    ElMessage("请进行登录操作!");
    next("/login");
  } else {
    // 如果用户已经登录或者路由不需要鉴权，则允许访问路由
    next();
  }
});

export default router;
