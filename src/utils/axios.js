/**
 * @name: axios.js
 * @author: JiuYue
 * @date: 2023-04-28 13:08
 * @description：axios.js
 * @update: 2023-04-28 13:08
 */

import axios from "axios";
import { setLocal } from "@/common/js/utils";
import router from "../router";
import { ElMessage } from "element-plus";

// newbell默认接口  (发现登录不上,不知原因,后端问题)
// // axios.defaults.baseURL = "//backend-api-01.newbee.ltd/api/v1";
// 自己搭建的接口,图片目前需要拼接路径,后端待改动
axios.defaults.baseURL = "//mall.qqiwu.cn/api/v1";
axios.defaults.withCredentials = true;
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["token"] = localStorage.getItem("token") || "";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.response.use((res) => {
  // if (typeof res.data != "object") {
  //   ElMessage("服务端异常！");
  //   return Promise.reject(res);
  // }
  if (res.data.resultCode != 200) {
    if (res.data.message) ElMessage(res.data.message);
    if (res.data.resultCode == 416) {
      router.push({ path: "/login" });
    }
    if (res.data.data && window.location.hash == "#/login") {
      setLocal("token", res.data.data);
      axios.defaults.headers["token"] = res.data.data;
    }
    return Promise.reject(res.data);
  }

  return res.data;
});

export default axios;
