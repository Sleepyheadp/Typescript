<template>
  <div class="addNote">
    <h2>添加新笔记</h2>
    <form @submit.prevent="addNote">
      <input type="text" placeholder="请输入笔记标题" v-model="note.title" />
      <textarea rows="6" placeholder="请输入笔记内容" v-model="note.content"></textarea>
      <button type="submit">添加笔记</button>
    </form>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useNoteStore } from "../../stores/note";

const note = reactive({
  title: "",
  content: "",
});

const noteStore = useNoteStore();

function addNote() {
  noteStore.addNote(note.title, note.content)

  note.title = "";
  note.content = "";
}
</script>
<style scoped>
.addNote {
  width: 100%;
  border-top: 1px solid hsl(0, 0%, 95%);
  padding-top: 24px;
}

.addNote h2 {
  margin-bottom: 12px;
}

.addNote form {
  display: grid;
  gap: 24px;
}
</style>
