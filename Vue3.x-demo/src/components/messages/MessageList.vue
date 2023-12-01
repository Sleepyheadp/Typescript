<template>
  <div>
    <div v-if="loading">loading...</div>
    <ul v-else>
      {{ this.$attrs.test }}
      <MessageListItem v-for="msg in messages" :key="msg.id" :msg="msg.content" :id="msg.id" @remove="removeMessage">
      </MessageListItem>
    </ul>
  </div>
</template>
<script>
import { ref, onMounted, watch, watchEffect } from "vue";
import MessageListItem from "./MessageListItem.vue";
export default {
  components: { MessageListItem },
  setup(props, { attrs }) {
    const messages = ref([]);
    const loading = ref(false);
    onMounted(() => {
      loading.value = true;
      setTimeout(() => {
        messages.value = [
          { id: 1, content: "这是一条消息提醒1" },
          { id: 2, content: "这是一条消息提醒2" },
          { id: 3, content: "这是一条消息提醒3" },
          { id: 4, content: "这是一条消息提醒4" },
        ];
        loading.value = false;
      }, 2000);
    });
    // emits
    function removeMessage(id) {
      // 当点击的id和messages的id相等时，则删除，不想等满足filter条件，则保留
      messages.value = messages.value.filter((msg) => msg.id !== id);
    }
    // attrs
    console.log("attrs:", attrs);
    console.log("attrs.test", attrs.test);
    console.log("attrs.class", attrs.class);
    console.log("attrs[data-title]", attrs["data-title"]);
    // 解构出来，不再具有响应性
    // const { test } = attrs
    watch(() => {
      console.log(attrs.test, "in MessageList");
      // console.log(test, 'in MessageList.vue');
    });
    return { removeMessage, messages, loading };
  },
};
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
