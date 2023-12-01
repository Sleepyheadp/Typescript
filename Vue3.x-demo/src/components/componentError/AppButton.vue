<template>
    <button>
        <slot></slot>
    </button>
</template>
<script>
export default {
    mounted() {
        throw new Error("AppButton 组件异常");
    },
};
</script>
<style scoped>
button {
    border: none;
    background: linear-gradient(90deg,
            hsl(240deg, 50%, 50%),
            hsl(280deg, 50%, 50%));
    padding: 12px 18px;
    margin-top: 12px;
    border-radius: 4px;
    color: white;
}
</style>