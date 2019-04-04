<template>
    <el-menu :default-active="active" @select="activeMenu" background-color="lightsteelblue" text-color="black" active-text-color="yellow" unique-opened>
        <el-submenu v-for="menu in menus" :index="menu.id" :key="menu.id">
            <template slot="title"><i class="el-icon-menu"></i>{{menu.title}}</template>
            <el-menu-item v-for="item in menu.children" :index="item.id" :key="item.id">
                {{item.title}}
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
import vm from "@/event.js";
import { menus } from './mock.js';
export default {
    data() {
        return {
            active: '',
            menus,
        }
    },
    methods: {
        activeMenu(key, keyPath) {
            const parent = this.menus.find(x => x.id === keyPath[0]);
            const target = parent.children.find(y => y.id === key);
            this.active = key;
            vm.$emit('emit-openTab', target);
        }
    },
    created() {
        vm.$on('emit-selectMenu', res => {
            this.active = res;
        })
    }
}
</script>

<style lang="less">
</style>
