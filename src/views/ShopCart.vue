<template>
  <div id="cart">
    <div class="banner_x center">
      <a href="/index" target="_blank">
        <div class="logo fl">
          <img src="http://mall.newbee.ltd/mall/image/new-bee-logo-3.png" />
        </div>
      </a>

      <div class="wdgwc fl ml20">购物车</div>
      <div class="wxts fl ml20">
        温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
      </div>
      <div class="clear"></div>
    </div>
    <div class="cart_line"></div>
    <div class="cart_bg">
      <div class="list center" v-if="state.list.length">
        <div class="top2 center">
          <div class="sub_top fl"></div>
          <div class="sub_top fl">商品名称</div>
          <div class="sub_top fl">单价</div>
          <div class="sub_top fl">数量</div>
          <div class="sub_top fl">小计</div>
          <div class="sub_top fr">操作</div>
          <div class="clear"></div>
        </div>

        <div class="content2 center" v-for="(item, index) in state.list">
          <div class="sub_content fl"></div>
          <div class="sub_content cover fl">
            <img :src="$filters.prefix(item.goodsCoverImg)" />
          </div>
          <div class="sub_content fl ft20">{{ item.goodsName }}</div>
          <div class="sub_content fl">{{ item.sellingPrice }}</div>
          <div class="sub_content fl">
            <input
              class="goods_count"
              :id="item.goodsId"
              type="number"
              @input="updateItem(item, $event)"
              :value="item.goodsCount"
              step="1"
              min="1"
              max="5"
            />
          </div>
          <div class="sub_content fl">{{ calculatePrice(item) }}元</div>
          <div class="sub_content fl">
            <a href="##" @click.prevent="deleteItem(item.cartItemId)">×</a>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <div class="list center" v-if="!state.list.length">
        <img
          style="position: absolute; margin-top: 16px; left: 45%"
          src="http://mall.newbee.ltd/mall/image/null-content.png"
        />
      </div>
      <div class="pre_order mt20 center">
        <div class="tips fl ml20">
          <ul>
            <li>
              <router-link to="/" @click.prevent="continueShopping"
                >继续购物
              </router-link>
            </li>
            <li>|</li>
            <li>
              共<span>{{ state.list.length }}</span
              >件商品
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="order_div fr">
          <div class="order_total fl">
            合计（不含运费）：<span>{{ totalAmount }}元</span>
          </div>
          <div class="order_button fr">
            <input
              class="order_button_c"
              type="button"
              name="tip"
              onclick="tip()"
              value="去结算"
            />
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import Footer from "@/components/index/Footer.vue";
import { ElMessage } from "element-plus";
import { getCart, deleteCartItem, modifyCart } from "@/service/cart";
import { useRouter } from "vue-router";
import { useStore } from "vuex"; //++++

// 定义方法

// const state = reactive({
//   checked: false,
//   list: [],
//   all: false,
//   result: [],
//   checkAll: true,
// });

// 将数据暴露为 ref 对象。
const state = ref({
  checked: false,
  list: [],
  all: false,
  result: [],
  checkAll: true,
});

const store = useStore(); //++++

// 组件挂载时运行的代码
onMounted(() => {
  init();
});

const init = async () => {
  ElMessage({ message: "加载中...", forbidClick: true });
  const { data } = await getCart({ pageNumber: 1 });
  console.log("获取购物车数据", data);
  state.value.list = data;
  store.commit("updateList", data);
};

// 更新商品
const updateItem = (item, event) => {
  const goodsCountInput = event.target;
  const value = goodsCountInput.value;

  // 修改数量
  const params = {
    cartItemId: item.cartItemId,
    goodsCount: value,
  };
  modifyCart(params)
    .then(() => {
      console.log("数量修改成功");

      // 更新价格
      item.goodsCount = parseInt(value); // 更新商品数量
      item.totalPrice = calculatePrice(item); // 更新商品总价
    })
    .catch((error) => {
      console.error("数量修改失败", error);
    });
};

// 计算价格
const calculatePrice = (item) => {
  return item.sellingPrice * item.goodsCount;
};

// 计算合计金额:
const totalAmount = computed(() => {
  let sum = 0;
  // for (const item of state.value.list) {
  //   sum += calculatePrice(item);
  // }
  for (const item of store.state.list) {
    sum += calculatePrice(item);
  }
  return sum.toFixed(2);
});

// 删除商品的方法
const deleteItem = async (id) => {
  console.log("id", id);
  await deleteCartItem(id);
  init();
};

// 继续购物函数
const continueShopping = () => {
  const router = useRouter();
  if (router) {
    router.push("/"); // 跳转到指定路由路径
  }
};
</script>

<style scoped>

</style>
