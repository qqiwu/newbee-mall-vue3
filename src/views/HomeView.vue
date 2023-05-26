<template>
  <div class="home">
    <malltop></malltop>
    <contentmain></contentmain>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import malltop from "@/components/index/MallTop.vue";
import contentmain from "@/components/index/contentMain.vue";
import Footer from "@/components/index/Footer.vue";

export default {
  components: {
    malltop,
    contentmain,
    Footer,
  },
};
</script>
