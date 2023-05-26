<template>
  <div id="flash">
    <h2>新品上线</h2>
    <ul>
      <li v-for="(newproduct, index) in Newproduct" :key="index">
        <a>
          <img :src="$filters.prefix(newproduct.goodsCoverImg)" alt="" />
          <p class="name">{{ newproduct.goodsName }}</p>
          <p class="discount">{{ newproduct.goodsIntro }}</p>
          <p class="item_price">{{ newproduct.sellingPrice }}</p>
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
    const Newproduct = ref([]);
    onMounted(async () => {
      const { data } = await getHome();
      Newproduct.value = data.newGoodses;
      console.log(Newproduct.value);
    });
    return {
      Newproduct,
    };
  },
};
</script>

<style scoped></style>
