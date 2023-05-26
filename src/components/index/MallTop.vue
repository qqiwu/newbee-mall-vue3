<template>
  <header id="header">
    <div class="center">
      <ul class="fl">
        <li><a href="">新蜂商城</a></li>
        <li><a href="">后台管理系统</a></li>
        <li><a href="">课程视频</a></li>
        <li><a href="">课程文档</a></li>
        <li><a href="">问题反馈</a></li>
      </ul>
      <div class="fr">
        <ul class="login">
          <li v-if="!token">
            <router-link to="/login">登录</router-link>
          </li>
          <li v-if="!token">
            <router-link to="/register">注册</router-link>
          </li>
          <li v-if="token">
            <a @click="logout">退出登录</a>
          </li>
        </ul>
        <div class="shopcart" @click.prevent="goToCart">
          <a style="color: white" href="">
            <i class="iconfont icon-cart"></i>
            购物车({{ cartItemCount }})
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";

const token = ref(localStorage.getItem("token"));
const store = useStore();
const router = useRouter();

const goToCart = () => {
  router.push("/shop-cart");
};

// 使用计算属性获取购物车数量
const cartItemCount = computed(() => {
  return store.state.list.length;
});

const logout = () => {
  localStorage.removeItem("token"); // 清除 token
  // 清除其他需要清除的内容
  ElMessage({ message: "退出成功" });
  // 跳转到登录页面
  router.push("/login");
};
</script>

<!-- 使用 "scoped" 属性将 CSS 样式限制在本组件内 -->
<style scoped></style>
