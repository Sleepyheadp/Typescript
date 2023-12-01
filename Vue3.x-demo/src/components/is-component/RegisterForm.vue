<template>
    <div>
        <p>RegisterForm:</p>
        <form @submit.prevent>
            <label>手机号：<input type="number" /></label>
            <label>验证码：<input type="number" /><button class="sendSMSCodeBtn">
                    发送验证码
                </button></label>
        </form>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.sendSMSCodeBtn {
    margin-left: 24px;
}
</style>