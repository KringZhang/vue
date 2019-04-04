<template>
    <el-container class="index-layout-box">
        <el-header class="layout-header">Vue Demo</el-header>
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
    }
}
</script>

<style lang="less">
.index-layout-box{
    height: 100%;
    .layout-header{
        background-color: yellowgreen;
    }
    .layout-aside{
        background-color: lightsteelblue;
    }
}
</style>
