<template>
    <div>这是登录页</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        setTimeout(() => {
            this.$router.push('/index')
        }, 2000)
    }
}
</script>

<style>

</style>
