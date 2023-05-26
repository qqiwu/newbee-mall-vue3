<template>
  <!--  公共头部的引用-->
  <malltop></malltop>
  <!--  商品详情的搜索行-->
  <div id="detail">
    <product></product>
    <div class="dc">
      <div class="content w">
        <div class="title fl">商品详情</div>
        <div class="clear"></div>
      </div>
    </div>
    <div class="intro mt20 w clearfix">
      <div class="left fl">
        <div class="swiper-container fl">
          <img :src="$filters.prefix(detail.goodsCoverImg)" alt="" />
        </div>
      </div>
      <div class="right fr">
        <div class="h3 ml20 mt20">{{ detail.goodsName }}</div>
        <div class="sub_title mr40 ml20 mt10">
          {{ detail.goodsIntro }}
        </div>
        <div class="item_price mr40 ml20 mt10">
          {{ detail.sellingPrice }} 元
          <del>{{ detail.originalPrice }}</del>
        </div>
        <div class="order">
          <input
            class="car"
            type="button"
            @click="saveAndGoCart(detail.goodsId)"
            value="立即选购"
          />
          <input
            class="car"
            type="button"
            @click="saveToCart(detail.goodsId)"
            value="加入购物车"
          />
        </div>
        <!--后期考虑-->
        <!--        <div class="tb-extra ml20" id="J_tbExtra">-->
        <!--          <dl>-->
        <!--            <dt>承诺</dt>-->
        <!--            <dd></dd>-->
        <!--          </dl>-->
        <!--          <dl></dl>-->
        <!--          <dl></dl>-->
        <!--        </div>-->
      </div>
      <div class="clear"></div>
    </div>
    <div class="goods mt20 w clearfix">
      <p>
        <img
          src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/goods-detail/05b406882a48787a.jpg"
          style="max-width: 100%"
          contenteditable="false"
        />
        <img
          src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/goods-detail/2c934a1d8fc57091.jpg"
          style="max-width: 100%"
          contenteditable="false"
        />
        <img
          src="https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/goods-detail/e9f22bbfc2bf5fc4.jpg"
          style="max-width: 100%"
          contenteditable="false"
        />
      </p>
    </div>
  </div>
  <!-- 脚部的引用-->
  <Footer></Footer>
</template>

<script setup>
import malltop from "@/components/index/MallTop.vue";
import product from "@/components/nav.vue";
import Footer from "@/components/index/Footer.vue";
import { getDetail } from "@/service/good";
import { addCart } from "@/service/cart";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const detail = ref({});

onMounted(() => {
  getDetail(route.params.id)
    .then((res) => {
      detail.value = res.data;
      console.log("res.data", res.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// 添加 saveAndGoCart 函数
const saveAndGoCart = (goodsId) => {
  const cartData = {
    goodsCount: 1, // 默认添加数量为1
    goodsId: goodsId,
  };

  addCart(cartData)
    .then((res) => {
      console.log("商品成功加入购物车", res);
      // 在这里可以执行其他操作，例如跳转到购物车页面
    })
    .catch((error) => {
      console.log("加入购物车失败", error);
      // 在这里可以执行错误处理逻辑，例如显示错误消息
    });
};

// 添加 saveToCart 函数
const saveToCart = (goodsId) => {
  const cartData = {
    goodsCount: 1,
    goodsId: goodsId,
  };

  addCart(cartData)
    .then((res) => {
      console.log("商品成功加入购物车", res);
      // 在这里可以执行其他操作，例如显示加入购物车成功的提示
    })
    .catch((error) => {
      console.log("加入购物车失败", error);
      // 在这里可以执行错误处理逻辑，例如显示错误消息
    });
};
</script>

<style scoped></style>
