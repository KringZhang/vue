<template>
    <el-container class="index-layout-box">
        <el-header class="layout-header">
            <div class="title">Vue Demo</div>
            <el-dropdown @command="handleCommand" class="user">
                <span class="el-dropdown-link" style="line-height:18px">zks<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
                    <el-dropdown-item command="logout">注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-container>
            <el-aside class="layout-aside" width="200px">
                <v-menu></v-menu>
            </el-aside>
            <el-main class="layout-main">
                <v-main></v-main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Menu from './Menu.vue';
import Main from './Main.vue';
export default {
    components: {
        'v-menu': Menu,
        'v-main': Main,
    },
    data() {
        return {

        }
    },
    methods: {
        handleCommand(command) {
            if(command === 'changePwd') {

            } else if(command === 'logout') {

            }
        }
    }
}
</script>

<style lang="less" scoped>
.index-layout-box{
    height: 100%;
    .layout-header{
        background-color: yellowgreen;
        line-height: 60px;
        .title {
            float: left;
            font-weight: bold;
        }
        .user {
            float: right;
            font-size: 20px;
            color: #fff;
            cursor: pointer;
        }
    }
    .layout-aside{
        background-color: lightsteelblue;
    }
}
</style>
