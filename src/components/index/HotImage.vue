<template>
  <div id="sub_banner">
    <div class="hot-image" v-for="(hotimages, index) in HotImage" :key="index">
      <router-link
        :to="{ name: 'ProductView', params: { id: hotimages.goodsId } }"
      >
        <img
          :src="$filters.prefix(hotimages.goodsCoverImg)"
          :alt="hotimages.goodsName"
        />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { getHome } from "@/service/home";

const HotImage = reactive([]);

async function loadHotImage() {
  const { data } = await getHome();
  HotImage.splice(0, HotImage.length, ...data.hotGoodses);
  console.log(HotImage);
}

loadHotImage();
</script>

<style scoped></style>
