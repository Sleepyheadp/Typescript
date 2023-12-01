<template>
  <li>
    {{ msg }}
    <button @click="$emit('remove', id)">删除</button>
  </li>
</template>
<script setup>
import { ref, watch, watchEffect, toRefs } from "vue";
//props: ["msg", 'id'],
//emits: ['remove'],
const props = defineProps(['msg', 'id'])
const emits = defineEmits(["remove"])
</script>
<style scoped>
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
