<template>
    <div>
        <h1>我的笔记本</h1>
        <SearchNote></SearchNote>
        <NoteList></NoteList>
        <AddNote></AddNote>
        <p>当前登陆的用户：{{ userStore.user.name }}</p>
    </div>
</template>

<script setup>
import AddNote from "../../components/piniaPages/AddNote.vue"
import NoteList from "../../components/piniaPages/NoteList.vue"
import SearchNote from "../../components/piniaPages/SearchNote.vue"
import { useUserStore } from "../../stores/user"
const userStore = useUserStore()
console.log('pinia-page/theme:', userStore.theme);
</script>
<style scoped></style>