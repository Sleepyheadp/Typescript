<template>
    <div>
        <p>ProfileForm:</p>
        <form @submit.prevent>
            <label>昵称：<input type="text" /></label>
            <label>生日：<input type="date" /></label>
            <label>地址：<input type="text" /></label>
        </form>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
</style>