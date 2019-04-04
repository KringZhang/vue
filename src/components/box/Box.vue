<template>
    <!-- 盒子模型 -->
    <div class="layout-container">
        <div class="top">
            <div class="standard">标准盒模型</div>
        </div>
        <div class="bottom">
            <div class="unusual">怪异盒模型</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    },
    created() {
    }
}
</script>

<style lang="less" scoped>
.top,.bottom {
    position: relative;
    height: 50%;
    border: 1px solid lightgrey;
}
.standard {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    padding: 20px;
    border: 5px solid black;
    width: 300px;
    height: 200px;
    background-color: skyblue;
}
.unusual {
    box-sizing: border-box;
    .standard();
}
</style>
