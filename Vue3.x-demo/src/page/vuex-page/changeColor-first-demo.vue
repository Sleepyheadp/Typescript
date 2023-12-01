<template>
    <div class="main">
        <button @click="changeColor">生成随机颜色</button>
    </div>
</template>

<script>
export default {
    computed: {
        bgColor() {
            const colors = this.$store.state.color
            return `rgb(${colors.join(',')})`
        }
    },
    methods: {
        changeColor() {
            this.$store.commit('randomColor')
        }
    }
}
</script>
<style scoped>
.main {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
    background-color: v-bind(bgColor);
}
</style>