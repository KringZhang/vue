<template>
    <div>
        <el-input v-model="vin"></el-input>
        <el-button size="mini" @click="getInfo">确定</el-button>
        <div class="box">
            <div class="box-child1"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            vin: ''
        }
    },
    methods: {
        getInfo() {
            const param = {
                vin: this.vin,
                currentPage: 1,
                pageSize: 10,
            }
            this.$axios.get('/da', param).then((res) => {

            }).catch(() => {
                this.$message.error('接口报错')
            })
        }
    },
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.box{
    transform: translateX(50px);
    width: 200px;
    height: 50px;
    border: 1px solid grey;
    box-sizing: border-box;
    .box-child1{
        width: 50%;
        height: 50%;
        background-color: blue;
    }
}
</style>
