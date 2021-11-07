<template>
  <div class="page-home">
    <router-view></router-view>
    <ul class="navBar">
      <li>
        <router-link to="/about">
          <i class="iconfont icon-dianpu"></i>
          <label>关于</label>
        </router-link>
      </li>
      <li>
        <router-link to="/cinema">
          <i class="iconfont icon-shoucang"></i>
          影院</router-link
        >
      </li>
      <li>
        <router-link to="/detail">
          <i class="iconfont icon-bianji"></i>
          详情</router-link
        >
      </li>
      <li>
        <router-link to="/login">
          <i class="iconfont icon-yijianfankui"></i>
          登陆</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style scoped>
html,
body {
  height: 100%;
}
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.page-home > div:first-child {
  flex: 1;
}
.navBar {
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  width: 100%;
}
.navBar li {
  width: 25%;
  text-align: center;
}
.router-link-exact-active {
  color: red;
}
</style>
