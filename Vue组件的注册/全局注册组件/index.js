// 示例：全局注册组件
const app = Vue.createApp({});

app.component("WordCount", {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
  template: `
    <div>
      <input v-model="content" />
      <p>你共输入了 {{ count }} 个字符</p>
    </div>
  `,
});

app.component("WordCountApp", {
  template: `<div>
    <h1>字符统计应用</h1>
    <WordCount />
  </div>`,
});

const vm = app.mount("#app");
