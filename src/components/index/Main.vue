<template>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-click="clickTab" @tab-remove="removeTab">
        <el-tab-pane v-for="(item, index) in editableTabs" :key="item.id" :label="item.title" :name="item.id">
            <component :is="item.component"></component>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import vm from "@/event.js";
import { menus } from './mock.js';
export default {
    data() {
        return {
            menus,
            editableTabsValue: '',
            editableTabs: [],
        }
    },
    methods: {
        clickTab(tab) {
            this.editableTabsValue = tab.name;
            vm.$emit('emit-selectMenu', tab.name);
        },
        removeTab(id) {
            let removedIndex;
            this.editableTabs = this.editableTabs.filter((item, index) => {
                if(item.id === id) {
                    removedIndex = index;
                } else {
                    return true;
                }
            });
            if(id === this.editableTabsValue) { // 删除的是当前的tab
                if(removedIndex === this.editableTabs.length) { // 删除的是最后一项
                    if(this.editableTabs.length > 0) {// 非空处理
                        this.editableTabsValue = this.editableTabs[this.editableTabs.length - 1].id;
                    } else {
                        this.editableTabsValue = '';
                    }
                } else { // 删除的不是最后一项,就让当前tab选中删除后面的一项
                    this.editableTabsValue = this.editableTabs[removedIndex].id;
                }
                vm.$emit('emit-selectMenu', this.editableTabsValue);
            }
        }
    },
    created() {
        vm.$on('emit-openTab', res => {
            const { id } = res;
            this.editableTabsValue = id;
            const target = this.editableTabs.find(x => x.id === id);
            if(!target) {
                const tempComponent = require(`@/components/${res.src}.vue`).default;
                const resCopy = { ...res, component: tempComponent };
                this.editableTabs.push(resCopy);
            }
        })
    }
}
</script>

<style lang="less">
</style>
