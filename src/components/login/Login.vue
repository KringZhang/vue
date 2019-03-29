<template>
    <div>
        <el-input v-model="vin"></el-input>
        <el-button size="mini" @click="getInfo">确定</el-button>
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

<style>

</style>
