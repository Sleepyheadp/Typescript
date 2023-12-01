<template>
    <div>
        <h2>标题：{{ options.title }}</h2>
        <div>用户:{{ options.user.name }}</div>
        <div>活跃：{{ options.user.active ? "是" : "否" }}</div>
        <div>年龄：{{ refInfo.user.age }}</div>
        <div>性别：{{ refInfo.user.sex }}</div>
        <div>个人信息：{{ refInfo.info }}</div>
        <input type="text" v-model="searchTerm">
        <ul>
            <li v-for="msg in searchedMessages" :key="msg.id">{{ msg.content }}</li>
        </ul>
        <button @click="messages = []">删除全部</button>
        <button @click="options.title = '我是标题'">修改标题</button>
        <button @click="options.user.name = '李四'">修改用户</button>
        <button @click="refInfo.info = '修改了个人信息...'">修改个人信息</button>
        <button @click="refInfo.user.age = 25">修改年龄</button>
        <button @click="refInfo.user.sex = '女'">修改性别</button>
        <ToRefsComp v-for="tel in tels" :key="tel.id" :id='tel.id' :msg="tel.number" :propsArr="propsArr"></ToRefsComp>
        <button @click="propsArr.pop()">删除role</button>
    </div>
</template>
<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'
import ToRefsComp from './toRefsComp.vue';
export default {
    props: ['compositionApiProps'],
    components: { ToRefsComp },
    setup(props) {
        console.log('compositionApiProps：', props.compositionApiProps);
        const messages = ref([
            { id: 1, content: "这是一条消息提醒1" },
            { id: 2, content: "这是一条消息提醒2" },
            { id: 3, content: "这是一条消息提醒3" },
            { id: 4, content: "这是一条消息提醒4" },
        ]);
        const options = reactive({
            title: '消息列表',
            user: {
                name: '张三',
                active: true
            }
        })
        const refInfo = ref({
            info: 'info...',
            user: {
                age: 18,
                sex: '男'
            }
        })
        const tels = ref([
            { id: 1, number: 110 },
            { id: 2, number: 120 },
            { id: 3, number: 119 },
        ])
        const propsArr = ref([
            { id: 1, role: 'Tom' },
            { id: 2, role: 'Jerry' }
        ])
        setTimeout(() => {
            tels.value[1].number = 114
        }, 1500);
        // 在setup中访问需要通过value属性，模版语法中则直接取值就可以。
        // console.log('ref.value:', messages.value)
        // console.log('reactive', options.title);
        // computed计算属性
        const searchTerm = ref('')
        const searchedMessages = computed(() => {
            if (searchTerm.value === '') return messages.value
            return messages.value.filter((msg) => {
                return msg.content.includes(searchTerm.value)
            })

        })
        // 直接监听ref(监听不到对象中属性的变化，也获取不到新值X)
        // watch(searchTerm, (newVal, oldVal) => {
        //     console.log('搜索词：', newVal, oldVal);
        // })
        // 监听ref的value属性
        // onInvalidate()在第一次监听的数据发生变化时不会执行，而是在第二次变化时执行一次
        watch(() => searchTerm.value, (newVal, oldVal, onInvalidate) => {
            console.log('搜索词：', newVal, oldVal);
            onInvalidate(() => {
                console.log('watch-做一些清理操作');
            })
        })
        // 监听reactive响应性数据
        watch(() => options.title, (newVal, oldVal) => {
            console.log('options.title:', newVal, oldVal);
        })
        // 改为深拷贝的形式，可以监听到ref响应性数据中对象属性的变化。
        // 也可以使用第三方插件
        watch(
            () => JSON.parse(JSON.stringify(refInfo.value)),
            (newVal, oldVal) => {
                // console.log('refInfo.value.user', newVal, oldVal, newVal === oldVal);
            },
        )
        // watch监听多个数据
        watch([() => refInfo.value.info, () => refInfo.value.user.age, () => refInfo.value.user.sex], (newVal, oldVal) => {
            console.log('refInfo.value.multiple', newVal, oldVal);
        })
        watchEffect((onValidate) => {
            // 页面加载完之后就会执行一次
            console.log(refInfo.value.info);
            console.log(refInfo.value.user.age);
            console.log(refInfo.value.user.sex);
            onValidate(() => {
                console.log('watchEffect-做一些清理操作...');
            })
        })
        return { messages, refInfo, options, searchTerm, searchedMessages, tels, propsArr };
    },
};
</script>
<style scoped>
div {
    display: grid;
    place-items: center;
}

ul {
    list-style: none;
    display: grid;
    gap: 24px;
}

li {
    display: flex;
    align-items: center;
    gap: 12px;
}

li::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: hsl(280deg, 100%, 70%);
    border-radius: 100%;
}
</style>