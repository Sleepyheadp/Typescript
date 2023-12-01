<template>
  <div class="search">
    <input type="text" placeholder="搜索笔记" v-model="noteStore.searchTerm" />
  </div>
</template>
<script setup>
import { useNoteStore } from "../../stores/note";

const noteStore = useNoteStore();
</script>

<style scoped>
.search {
  margin-top: 24px;
  width: 100%;
}
</style>
