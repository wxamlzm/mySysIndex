<template>
    <el-aside :width="iscollapse ? '65px' : '200px'">
        <div class="toggle-button"  @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
            background-color="#373D41"
            text-color="#fff"
            active-text-color="#409EFF"
            unique-opened
            :collapse="iscollapse"
            :collapse-transition="false"
            router>
            <!-- 一级菜单 -->
            <!-- 为什么一级菜单不会受router影响 -->
            <el-submenu :index="item.id.toString()" v-for="(item) in menuList" :key="item.id">
                <!-- 一级菜单的模板区域 -->
                <template slot="title">
                    <!-- <i class="el-icon-menu"></i> -->
                    <i>
                        <img :src="require(`@/assets/icon/${item.pic}.svg`)" alt="">
                    </i>
                    <span>{{item.authName}}</span>
                </template>
                <!-- 二级菜单项 -->
                <el-menu-item :index="`/${subItem.path}`" v-for="(subItem) in JSON.parse(item.children)" :key="subItem.id">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>{{subItem.authName}}</span>
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
            subMenuList: {},
            iscollapse: false
        }
    },
    methods: {
        async getMenuList(){
            const {data: res} = await this.$axios.get('/')
            res.forEach((element,i) => {
                element = {pic:i, ...element}
                console.log(element)
                this.menuList.push(element)
            });

            console.log(this.menuList)
        },
        // 点击按钮实现菜单的折叠与展开
        toggleCollapse(){
            this.iscollapse = !this.iscollapse
        }
    },
    mounted(){
        this.getMenuList();
    }
}
</script>

<style lang="scss">
.el-aside{
    .toggle-button {
        color: #FFF;
        font-size: 10px;
        line-height: 24px;
        letter-spacing: 0.2em;
        text-align: center;
        cursor: pointer;
        &::selection {
            background-color: transparent;
        }
    }
    .el-menu {
        border: none;
        .el-submenu__title{
            i {
                display: inline-block;
                margin-right: 5px;
                width: 24px;
                img {
                    width: 100%;
                }
            }
        }
    }
}

</style>