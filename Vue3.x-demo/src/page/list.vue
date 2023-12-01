<template>
    <div>
        <MessageList class="messageList" data-title="消息列表" :test="test"></MessageList>
        <BaseLayout>
            <template v-slot:header>
                <nav>
                    <a href="#">首页</a>
                    <a href="#">关于</a>
                    <a href="#">联系</a>
                </nav>
            </template>
            <template v-slot:default>
                <p>这是内容</p>
            </template>
        </BaseLayout>
        <ComposablesMessageList></ComposablesMessageList>
        <UserTable></UserTable>
    </div>
</template>
<script setup>
import MessageList from '../components/messages/MessageList.vue'
import BaseLayout from '../components/BaseLayout.vue'
import ComposablesMessageList from '../components/composables/MessageList.vue'
import UserTable from '../components/composables/UserTable.vue'
import { ref } from 'vue'
const test = ref('test')
setTimeout(() => {
    test.value = 'test changed'
}, 2000);
</script>
<style scoped></style>