<template>
  <el-container class="home-container">
    <!-- 头部区域开始 -->
    <el-header>
    </el-header>
    <!-- 头部区域结束 -->

    <!--主体区域开始 -->
    <el-container>
      <!-- 侧边栏区域开始 -->
      <home-aside></home-aside>
      <!-- 侧边栏区域结束 -->

      <!-- 内容区域开始 -->
      <el-main>Main</el-main>
      <!-- 内容区域结束 -->
    </el-container>
    <!-- 主体区域结束 -->
  </el-container>
</template>

<script>
// @ is an alias to /src
import HomeAside from './HomeAside.vue'
import HomeHeader from './HomeHeader.vue'
export default {
  name: 'Home',
  components: {
    HomeAside, HomeHeader
  },

}
</script>

<style lang="scss">

</style>
