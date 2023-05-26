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
            您还不是我们的会员？<a href="register.html" target="_self"
              >立即注册</a
            >
          </div>
          <div class="clear"></div>
          <div class="under-line center"></div>
        </div>
        <form id="loginForm" @submit.prevent="submitForm">
          <div class="login_main center">
            <div class="login-info">
              手机号:&nbsp;<input
                class="login-info-input"
                type="text"
                name="loginName"
                id="loginName"
                placeholder="请输入你的手机号"
                v-model="formData.phone"
              />
            </div>
            <div class="login-info">
              密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;<input
                class="login-info-input"
                id="password"
                type="password"
                name="password"
                placeholder="请输入你的密码"
                v-model="formData.password"
              />
            </div>
          </div>
          <div class="login_submit">
            <input class="submit" type="submit" value="立即登录" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import md5 from "js-md5";
import { login } from "@/service/user";

export default {
  setup() {
    onMounted(() => {
      document.body.style.backgroundColor = "#14212a";
    });

    const formData = {
      phone: "",
      password: "",
    };

    // 登录函数
    const handleLogin = () => {
      // 获取表单数据
      const loginName = document.getElementById("loginName").value;
      const password = document.getElementById("password").value;

      // 对密码进行加密
      const passwordMd5 = md5(password);

      // 调用后端登录接口
      login(loginName, passwordMd5)
        .then((res) => {
          // 登录成功，跳转到首页
          window.location.href = "/index.html";
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      handleLogin,
      formData,
    };
  },
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
