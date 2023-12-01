<template>
    <div class="main">
        <p>{{ num }}</p>
        <button @click="increment">增加数量</button>
        <!-- <button @click="$store.commit('increament')">增加数量</button> -->
        {{ arr }}
        <!-- <button @click="pushToArr({ ele: arr.length + 1 })">追加元素1</button> -->
        <!-- 如果使用$store.commit传递payload -->
        <!-- <button @click="$store.commit('pushToArr', { ele: arr.length + 1 })">追加元素2</button> -->
        <button @click="$store.commit({ type: 'pushToArr', ele: arr.length + 1 })">追加元素3</button>
        <p>user: <span>{{ user }}</span></p>
        <button @click="changeUserName({ name: '张三' })">修改用户名1</button>
        <!-- <button @click="$store.commit({ type: 'changeUserName', name: '张三' })">修改用户名2</button> -->
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { INCREMENT } from "../../mutations_type"
export default {
    computed: {
        ...mapState(['num', 'arr', 'user']),
    },
    methods: {
        ...mapActions(['increment']),
        ...mapMutations(['pushToArr', 'changeUserName'])
    },
    // 测试：为什么mutations中的方法是同步执行的？
}
</script>
<style scoped>
.main {
    display: flex;
    flex-direction: column;
}

button {
    width: 150px;
    height: 50px;
}
</style> 