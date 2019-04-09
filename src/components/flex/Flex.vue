<template>
    <!-- 弹性布局 -->
    <div class="flex-container">
        <div class="top">
            <div class="box1">flex居中</div>
        </div>
        <div class="bottom">
            <div class="container">
                <div class="left">
                    <div class="box2">以下内容可供选择(超长显示)</div>
                    <div class="box2">看报</div>
                    <div class="box2">听音乐</div>
                    <div class="box2">看演唱会</div>
                    <div class="box2">看电影</div>
                    <div class="box2">滑冰</div>
                </div>
                <div class="right">
                    <div class="box3">以下内容可供选择(超长显示)</div>
                    <div class="box3">看报</div>
                    <div class="box3">听音乐</div>
                    <div class="box3">看演唱会</div>
                    <div class="box3">看电影</div>
                    <div class="box3">滑冰</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style lang="less" scoped>
.flex-container {
    font-size: 18px;
    display: flex;
    flex-direction: column;
    height: 100%;
    & > .top {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        width: 100%;
        border: 1px solid red;
        box-sizing: border-box;
        & > .box1 {
            width: 200px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            background-color: yellowgreen;
        }
    }
    & > .bottom {
        flex: 1;
        width: 100%;
        border: 1px solid red;
        box-sizing: border-box;
        & > .container {
            display: flex;
            height: 200px;
            & > .left {
                display: flex;
                flex: 1;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-content: flex-start;
                padding: 10px;
                background-color: skyblue;
                & > .box2 {
                    box-sizing: border-box;
                    margin: 0 5% 5% 0;
                    width: 20%;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    background-color: purple;
                    border: 1px solid lightgrey;
                }
                & > :nth-child(4n) {
                    margin-right: 0;
                }
                & > :nth-child(4n + 1) {
                    margin-left: 2.5%;
                }
            }
            & > .right {
                display: flex;
                flex: 1;
                flex-wrap: wrap;
                justify-content: space-between;
                align-content: flex-start;
                padding: 10px;
                background-color: lightcoral;
                & > .box3 {
                    box-sizing: border-box;
                    margin: 0 10px 10px 0;
                    width: 100px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    background-color: purple;
                    border: 1px solid lightgrey;
                }
            }
        }
    }
}
</style>
