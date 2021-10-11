<template>
    <el-aside width="200px">
        <!-- 侧边栏菜单区域 -->
        <el-menu
            background-color="#373D41"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!-- 一级菜单 -->
            <el-submenu index="1">
                <!-- 一级菜单的模板区域 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <!-- 二级菜单项 -->
                <el-menu-item index="1-4-1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>       
    </el-aside>
</template>

<script>
export default {
    name:'HomeAside'
}
</script>

<style lang="scss">
.el-menu {
    border: none;
}
</style>