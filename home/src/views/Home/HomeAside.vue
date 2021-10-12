<template>
    <el-aside width="200px">
        <!-- 侧边栏菜单区域 -->
        <el-menu
            background-color="#373D41"
            text-color="#fff"
            active-text-color="#ffd04b">
            <!-- 一级菜单 -->
            <el-submenu index="item.id" v-for="(item) in menuList" :key="item.id">
                <!-- 一级菜单的模板区域 -->
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.authName}}</span>
                </template>
                <!-- 二级菜单项 -->
                <el-menu-item index="itm.id" v-for="(itm) in JSON.parse(item.children)" :key="itm.id">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{itm.authName}}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>       
    </el-aside>
</template>

<script>
export default {
    name: 'HomeAside',
    data(){
        return {
            menuList: [],
            subMenuList: {}
        }
    },
    props: ['list'],
    methods: {
        async getMenuList(){
            const {data: res} = await this.$axios.get('/')
            this.menuList = res
        }
    },
    mounted(){
        this.getMenuList();
    }
}
</script>

<style lang="scss">
.el-menu {
    border: none;
}
</style>