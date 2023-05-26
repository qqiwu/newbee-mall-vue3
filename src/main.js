import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
// 全局路径拼接
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith("http")) {
      return url;
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`;
      return url;
    }
  },
};
app.use(store).use(router).use(ElementPlus).mount("#app");
