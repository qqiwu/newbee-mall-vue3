<template>
  <div id="recommend">
    <h2>为你推荐</h2>
    <a href="" class="more">查看更多>></a>
    <ul>
      <li v-for="(recommend, index) in Recommend" :key="index">
        <a href="">
          <div class="info discount">{{ recommend.tag }}</div>
          <img
            :src="$filters.prefix(recommend.goodsCoverImg)"
            :alt="recommend.goodsName"
          />
          <p class="name">{{ recommend.goodsName }}</p>
          <p class="item_price">{{ recommend.sellingPrice }}</p>
          <p class="counter"></p>
          <div class="comment">
            <p>新蜂精选</p>
            <p>好物也可以不贵</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getHome } from "@/service/home";
export default {
  setup() {
    const Recommend = ref([]);
    onMounted(async () => {
      const { data } = await getHome();
      Recommend.value = data.recommendGoodses;
      console.log(Recommend.value);
    });
    return {
      Recommend,
    };
  },
};
</script>

<style scoped></style>
