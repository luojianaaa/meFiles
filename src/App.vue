<template>
  <div id="app">
    <!-- 底部导航 -->
    <FooterNav></FooterNav>
    <!-- 路由容器 -->
    <router-view />
  </div>
</template>

<script>
// 导入组件
import FooterNav from "@/components/FooterNav";

export default {
  components: {
    FooterNav,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  // 当触控事件发生在元素上时，不进行任何操作。
  touch-action: none;
  height: 100%;
  ul,
  li {
    list-style: none;
  }
}
</style>


