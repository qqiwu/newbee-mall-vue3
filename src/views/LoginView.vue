<template>
  <div class="top center">
    <div class="logo center">
      <a href="" target="_blank"
        ><img src="https://tc.qqiwu.cn/img/login-logo-2.png" alt=""
      /></a>
    </div>
  </div>
  <div class="form center">
    <div class="login">
      <div class="login_center">
        <div class="login_top">
          <div class="left fl">会员登录</div>
          <div class="right fr">
            您还不是我们的会员？<a href="" target="_self">立即注册</a>
          </div>
          <div class="clear"></div>
          <div class="under-line center"></div>
        </div>
        <form @submit.prevent="submitForm">
          <div class="login_main center">
            <div class="login-info">
              手机号:&nbsp;<input
                class="login-info-input"
                v-model="form.loginName"
                type="text"
                name="loginName"
                id="loginName"
                placeholder="请输入你的手机号"
              />
            </div>
            <div class="login-info">
              密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;<input
                class="login-info-input"
                v-model="form.passwordMd5"
                id="passwordMd5"
                type="password"
                name="passwordMd5"
                placeholder="请输入你的密码"
              />
            </div>
          </div>
          <div class="login_submit">
            <button class="submit" type="submit">立即登录</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { login } from "@/service/user";
import md5 from "js-md5";
import { setLocal } from "@/common/js/utils";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

onMounted(() => {
  document.body.style.backgroundColor = "#14212a";
});

onBeforeUnmount(() => {
  document.body.style.backgroundColor = "";
});

const router = useRouter();

const form = {
  loginName: "",
  passwordMd5: "",
};

const submitForm = () => {
  // 对密码进行MD5加密
  const encryptedPwd = md5(form.passwordMd5);
  // 调用login方法
  login({ loginName: form.loginName, passwordMd5: encryptedPwd })
    .then((res) => {
      // 登录成功后，将用户信息存储到本地存储中
      console.log(res);
      // setLocal("token", JSON.stringify(res.data));
      setLocal("token", res.data);
      ElMessage("登录成功");
      // 跳转到首页
      console.log(res.data);
      // router.push("/");
      // 需要刷新页面，否则 axios.js 文件里的 token 不会被重置
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 100px;
  background: #fff;
}

.top .logo {
  width: 1130px;
  height: 160px;
}

.top .logo img {
  border: none;
  margin-top: -15px;
}

.form {
  width: 1130px;
  height: 588px;
  background: url("https://tc.qqiwu.cn/img/login_bg.png") no-repeat center
    center;
}

.form .login {
  width: 400px;
  height: 470px;
  margin: 30px auto;
  background: #444;
  color: #fff;
  margin-right: 0px;
  border-radius: 4px;
  font: 12px "宋体", Times New Roman;
}

.form .login .login_center {
  width: 360px;
  margin: 10px auto;
  padding: 30px 0;
}

.form .login .login_center.hide {
  display: none;
}

.form .login .login_center .login_top {
  margin: 10px 0;
}

.form .login .login_center .login_top .left {
  height: 40px;
  line-height: 40px;
  font-weight: bold;
  font-size: 20px;
}

.form .login .login_center .login_top .right {
  height: 40px;
  line-height: 40px;
  font-size: 13px;
}

.form .login .login_center .login_top .right a {
  color: #1baeae;
  font-weight: bold;
}

.form .login .login_center .login_top .right a:hover {
  color: #1baeae;
}

.form .login .login_center .login_top .under-line {
  height: 2px;
  background: #1baeae;
  margin: 8px 0;
}

.form .login .login_center .login_main {
  padding: 5px 0;
}

.form .login .login_center .login_main input:focus {
  border: 1px solid #1baeae;
}

.form .login .login_center .login-info {
  font: 16px Times New Roman;
  height: 40px;
  line-height: 40px;
  margin: 35px 0;
}

.form .login .login_center .login-info .login-info-input {
  width: 220px;
  height: 30px;
  border: 1px solid #ccc;
  padding: 5px 10px;
}

.form .login .login_center .login-info .verify-code {
  width: 100px;
  height: 30px;
  padding: 5px 10px;
}

.form .login .login_center .login-info .send {
  width: 100px;
  height: 42px;
  margin-left: 12px;
}

.form .login .login_center .login_submit .submit {
  border: none;
  width: 240px;
  height: 45px;
  margin-left: 55px;
  background: #1baeae;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
