<template>
  <nav class="globalNav">
    <router-link to="/login">登录</router-link>
    <!-- <ButtonLink to="/blogs">博客管理</ButtonLink> -->
    <!-- <PrivateLink to="/blogs">博客管理</PrivateLink> -->
    <button @click="redirectToManagementPage">博客管理</button>
  </nav>
</template>
<script>
import ButtonLink from '../../../components/vue-router/package-router-link/ButtonLink.vue'
import PrivateLink from '../../../components/vue-router/package-router-link/PrivateLink.vue'
import { isNavigationFailure, NavigationFailureType } from 'vue-router'
export default {
  components: { ButtonLink, PrivateLink },
  methods: {
    // cancelled
    // async redirectToManagementPage() {
    //   new Promise(async (resolve) => {
    //     const failure = await this.$router.push('/blogs')
    //     console.log(failure);
    //     console.log(isNavigationFailure(failure, NavigationFailureType.cancelled));
    //     resolve()
    //   })
    //   this.$router.push('/login')
    // }
    // duplicated
    // async redirectToManagementPage() {
    //   const failure = await this.$router.push('/')
    //   console.log(failure);
    //   console.log(isNavigationFailure(failure, NavigationFailureType.duplicated));
    // }
    // 重定向redirect
    async redirectToManagementPage() {
      await this.$router.push("/blogs")
      console.log(this.$router.currentRoute.value);
    }
  }
}
</script>
<style scoped>
.globalNav {
  height: 200px;
  align-self: start;
  justify-self: center;
  padding: 24px;
}

.globalNav a {
  padding: 12px;
}
</style>
