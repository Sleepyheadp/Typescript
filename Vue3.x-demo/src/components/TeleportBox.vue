<template>
    <Teleport to="#root">
        <div v-if="show" class="alertBox">
            <div class="closeIcon" @click="show = false">X</div>
            <div class="content">
                <slot>消息提示框组件</slot>
            </div>
        </div>
    </Teleport>
</template>
<script>
export default {
    data() {
        return {
            show: true,
        };
    },
};
</script>
<style scoped>
.alertBox {
    width: 350px;
    height: 80px;
    border: 1px solid hsl(280, 100%, 50%);
    border-radius: 8px;
    padding: 24px;
    position: relative;
    /* position: absolute;
    right: 12px;
    bottom: 12px; */
}

.content {
    height: 100%;
    display: flex;
    align-items: center;
}

.closeIcon {
    position: absolute;
    right: 12px;
    top: 12px;
    font-size: 12px;
    font-weight: 900;
    cursor: pointer;
}
</style>