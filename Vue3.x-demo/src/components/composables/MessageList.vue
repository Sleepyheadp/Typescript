<template>
  <div>
    <ul>
      <MessageListItem v-for="msg in messages" :key="msg.id" :id="msg.id" :msg="msg.content" @remove='removeMessage'>
      </MessageListItem>
    </ul>
  </div>
</template>
<script setup>
import { ref, watch, watchEffect, isRef } from "vue";
import MessageListItem from "./MessageListItem.vue";
import useListData from '../../composables/useListData'
const { data: messages, removeItem: removeMessage } = useListData(
  [
    { id: 1, content: "这是一个bug1" },
    { id: 2, content: "这是一个bug2" },
    { id: 3, content: "这是一个bug3" },
    { id: 4, content: "这是一个bug4" },
  ]
)
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
  gap: 24px;
}

h2 {
  color: hsl(280deg, 50%, 70%);
}

p {
  margin: 12px 0 24px 0;
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
