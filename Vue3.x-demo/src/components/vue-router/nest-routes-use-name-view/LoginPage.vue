<template>
  <form class="loginForm">
    <h2>登录</h2>
    <label for="username">用户名：</label>
    <input id="username" type="text" />
    <label for="password">密码：</label>
    <input id="password" type="password" />
    <button>登录</button>
  </form>
</template>
<style scoped>
.loginForm {
  display: grid;
  gap: 12px;
}

.loginForm h2 {
  justify-self: center;
}

.loginForm label {
  margin-top: 12px;
}
</style>
