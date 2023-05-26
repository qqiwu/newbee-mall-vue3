<template>
  <content id="content">
    <nav id="nav">
      <div class="banner_x center">
        <a href="" class="logo">
          <h1>新蜂商城</h1>
        </a>
        <div class="fr">
          <div class="search">
            <input class="text" type="text" id="keyword" autocomplete="off" />
            <div class="search_hot"></div>
          </div>
          <div class="button iconfont icon-search"></div>
        </div>
      </div>
    </nav>
    <div id="banner">
      <!-- 使用Aside组件 -->
      <Aside></Aside>
      <!-- 使用Swiper组件-->
      <Swiper></Swiper>
    </div>
    <!-- 使用HotImage组件-->
    <HotImage></HotImage>
    <!-- 使用NewProduct组件-->
    <NewProduct></NewProduct>
    <!-- 使用Recommend组件-->
    <Recommend></Recommend>
  </content>
</template>

<script setup>
import { defineComponent } from "vue";
import Aside from "@/components/index/Aside.vue";
import Swiper from "@/components/index/Swiper.vue";
import HotImage from "@/components/index/HotImage.vue";
import NewProduct from "@/components/index/NewProduct.vue";
import Recommend from "@/components/index/Recommend.vue";

// 注册组件
const components = {
  Recommend,
  Aside,
  Swiper,
  HotImage,
  NewProduct,
};
</script>

<style scoped></style>
