<template >
    <div>
        <!-- slot插槽简单用法 -->
        <HelloWorld msg="Vite + Vue" version=3>
            <template v-slot:more>
                <!-- v-slot:more可以简写为#more -->
                <div>slot插槽内容:父组件template中添加div</div>
            </template>
        </HelloWorld>
        <!-- 在传递的slot模版中访问子组件的属性 -->
        <slot-son-attr>
            <!-- 简写：<template #contact="props"> -->
            <template v-slot:contact="props">
                <p>{{ props.contact.name }}</p>
                <p>{{ props.contact.email }}</p>
            </template>
            <!-- 解构：
                <template #contact="{ contact }"> 
                <p>{{ contact.name }}</p>
                <p>{{ contact.email }}</p>
            -->
        </slot-son-attr>
        <!-- $emit用法 -->
        <son-to-father @handleAdd="addMore" :count='count'></son-to-father>
        <!-- 在组件中使用watch监听动态属性 -->
        <addMoreWatch :totalPage="totalPage" :currentPageProps="currentPage"></addMoreWatch>
        <button @click="totalPage += 1">增加页数</button>
        <!-- props的高级版 => provide/inject的使用 -->
        电影描述：<movieCard></movieCard>
        <!-- css modules -->
        <cssModule></cssModule>
        <!-- :deep的用法 -->
        <deepStyle></deepStyle>
        <!-- slotted的用法 -->
        <slottedStyle>
            <div class="desc"> slot中的文本：slotted的使用</div>
        </slottedStyle>
        <!-- 动态绑定样式 -->
        <dynamicStyle></dynamicStyle>
        <!-- 让组件支持v-model指令 -->
        <searchInput v-model:searchTerm="searchTerm" v-model:category="category"></searchInput>
        <p>搜索词：{{ searchTerm }}</p>
        <p>类别：{{ category }}</p>
        <!-- refs:通过调用子组件的方法 -->
        <span>自动获取焦点，ref：</span>
        <autoFoucs ref="autofocus"></autoFoucs>
        <!-- 自定义指令 -->
        <customDirective></customDirective>
        <!-- 动态 HTML 元素  -->
        <TextHeading level="1">一级标题</TextHeading>
        <TextHeading level="2">二级标题</TextHeading>
        <TextHeading level="3">三级标题</TextHeading>
        <!-- is动态切换组件 -->
        <!-- keep-alive缓存组件：防止数据丢失 -->
        <keep-alive>
            <component :is='currentForm'></component>
        </keep-alive>
        <div class="buttons">
            <button v-if="currentForm === 'RegisterForm'" @click="currentForm = 'ProfileForm'">下一步</button>
            <div v-else-if="currentForm === 'ProfileForm'">
                <button @click="currentForm = 'RegisterForm'">上一步</button>
                <button>完成</button>
            </div>
        </div>
        <!--
            teleport：子绝父相的时候，子元素就算设置了定位，也是相对父元素的位置。
            假如我们想要固定一个弹窗，绑定到指定的元素上就可以用teleport。
            疑问：为啥不直接用fixed定位？
            fixed是固定到当前视口的位置，不随滚动而滚动。teleport是绑定到指定的组件上
        -->
        <button @click="msgs.push(`这是一段消息${msgs.length + 1}`)">
            添加消息
        </button>
        <TeleportBox v-for="(msg, index) in msgs" :key="index">{{ msg }}</TeleportBox>
        <!-- 渲染模版JSX用法 -->
        <BaseCard title="卡片标题">这是卡片内容</BaseCard>
        <!-- mixin使用 -->
        <PaginationMixin :totalPage="totalPage" :defaultCurrentPage="currentPage"></PaginationMixin>
        <PaginationMixin2 :totalPage="totalPage" :defaultCurrentPage="currentPage" showTotal="true"></PaginationMixin2>
        <!-- 全局mixins使用 -->
        {{ siteTitle }}
        <!-- async component -->
        <a href="#" @click.prevent="currentPlace = 'HomePage'">首页</a>
        <a href="#" @click.prevent="currentPlace = 'ProductPage'">产品页</a>
        <component :is="currentPlace" />
        <!-- 全局错误处理 -->
        <AppListGlobalError :globalError="globalError"></AppListGlobalError>
        <!-- 组件内错误处理 -->
        <p v-if="errorComp">我是顶部的错误信息（根组件</p>
        <template v-else>
            <div>
                <AppButton></AppButton>
                <AppListComponentError :componentError="componentError"></AppListComponentError>
            </div>
        </template>
    </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
import sonToFather from '../components/sonToFather.vue'
import addMoreWatch from '../components/addMoreWatch.vue'
import movieCard from '../components/movies-provide-inject/MovieCard.vue'
import slotSonAttr from '../components/slotSonAttrs.vue'
import cssModule from '../components/cssModule.vue'
import deepStyle from '../components/deepStyle.vue'
import slottedStyle from '../components/slottedStyle.vue'
import dynamicStyle from '../components/dynamicStyle.vue'
import searchInput from '../components/searchInput.vue'
import autoFoucs from '../components/autoFoucs.vue'
import customDirective from '../components/customDirective.vue'
import TextHeading from '../components/textHeading.vue'
import ProfileForm from '../components/is-component/ProfileForm.vue'
import RegisterForm from '../components/is-component/RegisterForm.vue'
import TeleportBox from '../components/TeleportBox.vue'
import BaseCard from '../components/BaseCard.vue'
import PaginationMixin from '../components/PaginationMixin.vue'
import PaginationMixin2 from '../components/PaginationMixin2.vue'
import HomePage from '../components/asyncComponent/HomePage.vue'
import ProductPage from '../components/asyncComponent/ProductPage.vue'
import AppListGlobalError from '../components/globalError/AppList.vue'
import AppListComponentError from '../components/componentError/AppList.vue'
import AppButton from '../components/componentError/AppButton.vue'
// 使用ES6的异步加载方法引入组件
// import { defineAsyncComponent } from 'vue'
// const ProductPage = defineAsyncComponent(() => {
//     import('../components/asyncComponent/ProductPage.vue')
// })
export default {
    components: { HelloWorld, sonToFather, addMoreWatch, movieCard, slotSonAttr, cssModule, deepStyle, slottedStyle, dynamicStyle, searchInput, autoFoucs, customDirective, TextHeading, ProfileForm, RegisterForm, TeleportBox, BaseCard, PaginationMixin, PaginationMixin2, HomePage, ProductPage, AppListGlobalError, AppListComponentError, AppButton },
    data() {
        return {
            count: 0,
            totalPage: 6,
            currentPage: 4,
            searchTerm: '',
            category: 'default',
            currentForm: 'RegisterForm',
            msgs: [],// 添加的消息
            currentPlace: 'HomePage',
            globalError: ['ge1', 'ge2', 'ge3'],
            componentError: ['ce1', 'ce2', 'ce3'],
            errorComp: false
        }
    },
    methods: {
        addMore() {
            this.count++
        }
    },
    mounted() {
        setTimeout(() => {
            console.log(this.$refs.autofocus.inputText);
            this.$refs.autofocus.inputBlur()
        }, 5000);
    },
    errorCaptured(err, vm, info) {
        this.errorComp = true;
        return false
    },
}
</script>
<style lang="scss" scoped>
.splitLine {
    width: 100%;
    height: 2px;
    color: #ccc;
}

.title :deep(p) {
    background: hsl(220deg, 100%, 60%);
    font-size: 24px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
    background-color: #0f141c;
    opacity: 1;
    background-image: radial-gradient(#212943 0.6000000000000001px,
            #0f141c 0.6000000000000001px);
    background-size: 12px 12px;
    color: white;
}

#app {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
}

input {
    padding: 8px 14px;
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    outline: none;
    background: hsl(280deg, 50%, 30%, 0.2);
    color: white;
}

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

form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
}

.buttons {
    display: grid;
    grid-template-columns: 80px 80px;
    grid-gap: 12px;
    justify-content: space-between;
}

#messages {
    position: absolute;
    right: 12px;
    bottom: 12px;
    display: flex;
    flex-direction: column-reverse;
    gap: 12px;
}
</style>