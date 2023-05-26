<template>
  <header id="header">
    <div class="center">
      <ul class="fl">
        <li><a href="">新蜂商城</a></li>
        <li><a href="">后台管理系统</a></li>
        <li><a href="">课程视频</a></li>
        <li><a href="">课程文档</a></li>
        <li><a href="">问题反馈</a></li>
      </ul>
      <div class="fr">
        <ul class="login">
          <li>
            <a href="">登录</a>
          </li>
          <li>
            <a href="">注册</a>
          </li>
        </ul>
        <div class="shopcart">
          <a style="color: white" href="">
            <i class="iconfont icon-cart"></i>
            购物车(0)</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "@/assets/common.css";
#header {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: #333;
}

#header .center {
  width: 1226px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*background-color: pink;*/
}

#header .center .fl {
  flex-shrink: 0;
  display: flex;
  width: 680px;
}
#header .center ul li a {
  display: flex;
  align-items: center;
  height: 12px;
  font-size: 14px;
  color: #b0b0b0;
  padding: 0 8px;
  border-right: 1px solid #b0b0b0;
}
#header .center ul li:last-of-type a {
  border-right: none;
}

#header .center .fr {
  display: flex;
  height: 40px;
}

#header .center .fr .login {
  display: flex;
  align-items: center;
  width: 98px;
  height: 40px;
}

#header .center .fr .login li a {
  display: flex;
  align-items: center;
  height: 12px;
  font-size: 12px;
  color: #b0b0b0;
  padding: 0 8px;
  border-right: 1px solid #b0b0b0;
}

#header .center .fr .login li:last-of-type a {
  border-right: none;
}

#header .center .fr .shopcart {
  display: flex;
  width: 120px;
  font-size: 12px;
  color: #fff;
  margin: 0 20px;
  justify-content: center;
  align-items: center;
  background-color: #1baeae;
}
</style>
