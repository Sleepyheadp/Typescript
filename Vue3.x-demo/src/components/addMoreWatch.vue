<template>
    <div>
        <p>当前页：{{ currentPage }}</p>
        <button v-for="i in totalPage" @click="currentPage = i" :key="i">{{ i }}</button>
    </div>
</template>
<script>
export default {
    props: ['totalPage', 'currentPageProps'],
    data() {
        return {
            currentPage: this.currentPageProps
        }
    },
    watch: {
        totalPage(newVal, oldVal) {
            // 子组件不能改变父组件传递过来的currentPage,所以要创建新变量
            this.currentPage = newVal
        }
    }
}
</script>
<style scoped></style>