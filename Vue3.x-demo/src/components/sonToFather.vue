<template>
    <div>
        count:{{ count }}
        <!-- 第一种写法 行内直接$emit -->
        <!-- <button @click="$emit('handleAdd')">增加</button> -->
        <button @click="changeNumber">增加</button>
    </div>
</template>
<script>
export default {
    props: ['count'],
    // emits: ['handleAdd']
    methods: {
        changeNumber() {
            // 第二种通过this.$emit
            // this.$emit('handleAdd')
            // 第三种通过$parent.父元素方法
            this.$parent.addMore()
        }
    },
}

</script>
<style></style>