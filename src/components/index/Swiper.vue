<template>
  <div
    class="swiper-container fl swiper-container-initialized swiper-container-horizontal"
  >
    <swiper
      :autoplay="swiperOptions.autoplay"
      :loop="swiperOptions.loop"
      :speed="swiperOptions.speed"
      :pagination="swiperOptions.pagination"
      :navigation="swiperOptions.navigation"
      :options="swiperOptions"
    >
      <swiper-slide v-for="(pic, index) in bannPic" :key="index">
        <img :src="pic.carouselUrl" alt="banner" />
      </swiper-slide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";
SwiperCore.use([Autoplay, Pagination, Navigation]);
import { onMounted, ref } from "vue";
import { getHome } from "@/service/home";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const bannPic = ref([]);

    const swiperOptions = {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 1000,
      pagination: {
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };

    onMounted(async () => {
      const { data } = await getHome();
      bannPic.value = data.carousels;
      console.log(bannPic.value);
    });
    return {
      bannPic,
      swiperOptions,
    };
  },
};
</script>

<style scoped></style>
