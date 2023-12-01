<template>
    <input type="text" v-model="inputText" ref="inputControl" />
</template>  
<script>
import { ref, onMounted } from 'vue'
export default {
    // data() {
    //     return {
    //         inputText: ''
    //     }
    // },
    setup() {
        const inputText = ref('')
        const inputControl = ref(null)
        onMounted(() => {
            inputControl.value.focus()
        })
        return { inputText, inputControl }
    },
    //vue2.x
    // mounted() {
    //     // 页面加载完后自动获取焦点
    //     this.$refs.inputControl.focus()
    // },
    methods: {
        // 子组件的方法
        inputBlur() {
            this.$refs.inputControl.blur()
        }
    }
};
</script>
<style scoped>
input {
    padding: 8px 14px;
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    outline: none;
    background: hsl(280deg, 50%, 30%, 0.2);
    color: white;
}
</style>