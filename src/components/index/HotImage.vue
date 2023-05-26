<template>
  <div id="sub_banner">
    <div class="hot-image" v-for="(hotimages, index) in HotImage" :key="index">
      <a href="/goods/detail/10913">
        <img :src="hotimages.goodsCoverImg" :alt="hotimages.goodsName" />
      </a>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getHome } from "@/service/home";
export default {
  setup() {
    const HotImage = ref([]);
    onMounted(async () => {
      const { data } = await getHome();
      HotImage.value = data.data.hotGoodses;
      console.log(HotImage.value);
    });
    return {
      HotImage,
    };
  },
};
</script>

<style scoped></style>
