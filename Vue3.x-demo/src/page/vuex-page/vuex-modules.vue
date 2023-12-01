<template>
    <main>
        <div>
            <p>
                根模块 limit: <span>{{ limit }}</span>
            </p>
            <button @click="updateLimit({ limit: limit + 1 })">+1</button><button @click="updateLimit({ limit: limit - 1 })"
                style="margin-left: 12px">
                -1
            </button>
            <p>
                根模块 limitStr: <span>{{ limitStr }}</span>
            </p>
            <p>
                users 模块 users: <span>{{ usersModules.list }}</span>
            </p>
            <p>
                users 模块 limitedUserCountStr: <span>{{ limitedUserCountStr }}</span>
            </p>
            <p>
                users 模块 limitedUsers: <span>{{ limitedUsers }}</span>
            </p>
            <button @click="addUser({ user: 'u' + (usersModules.list.length + 1) })">
                添加用户
            </button>
            <button @click="addUserAsync({ user: 'u' + (usersModules.list.length + 1) })" style="margin-left: 12px">
                添加用户（异步）
            </button>
            <p>
                blogs 模块 blogs: <span>{{ blogsModules.list }}</span>
            </p>
            <p>
                blogs 模块 limitedBlogCountStr: <span>{{ limitedBlogCountStr }}</span>
            </p>
            <p>
                blogs 模块 limitedBlogs: <span>{{ limitedBlogs }}</span>
            </p>
            <button @click="addBlog({ blog: 'blog' + (blogsModules.list.length + 1) })">
                添加博客
            </button>
            <button @click="addBlogAsync({ blog: 'blog' + (blogsModules.list.length + 1) })" style="margin-left: 12px">
                添加博客（异步）
            </button>
            <button @click="addBlogGlobal({ blog: 'blog' + (blogsModules.list.length + 1) })" style="margin-left: 12px">
                添加博客（全局）
            </button>
        </div>
    </main>
</template>
<script>
import { computed } from 'vue'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const usersModules = computed(() => store.state.usersModules);
        const blogsModules = computed(() => store.state.blogsModules);
        const limit = computed(
            () => store.state.limit
        )
        const limitStr = computed(
            () => store.getters.limitStr
        );
        const limitedUserCountStr = computed(
            () => store.getters.limitedUserCountStr
        );
        const limitedUsers = computed(
            () => store.getters.limitedUsers
        );

        const limitedBlogCountStr = computed(
            () => store.getters["blogsModules/limitedBlogCountStr"]
        );
        const limitedBlogs = computed(
            () => store.getters["blogsModules/limitedBlogs"]
        );
        const updateLimit = (payload) => store.commit('updateLimit', payload)
        const addUser = (payload) => store.commit("addUser", payload);
        const addUserAsync = (payload) => store.dispatch("addUserAsync", payload);
        const addBlogGlobal = (payload) => store.dispatch('addBlogGlobal', payload)
        const addBlog = (payload) => store.commit("blogsModules/addBlog", payload);
        const addBlogAsync = (payload) => store.dispatch('blogsModules/addBlogAsync', payload)
        return {
            limit, usersModules, blogsModules, limitStr, limitedUserCountStr, limitedUsers, limitedBlogCountStr, limitedBlogs, addUser, updateLimit, addUserAsync, addBlogGlobal, addBlog, addBlogAsync
        }
    },
    // computed: {
    //     ...mapState(["limit", "usersModules", "blogsModules"]),
    //     ...mapGetters([
    //         "limitStr",
    //         "limitedUserCountStr",
    //         "limitedUsers",
    //     ]),
    //     ...mapGetters("blogsModules", ["limitedBlogCountStr", "limitedBlogs"])
    // },
    // methods: {
    //     ...mapMutations(["updateLimit", "addUser"]),
    //     ...mapMutations('blogsModules', ["addBlog"]),
    //     ...mapActions(["addUserAsync", 'addBlogGlobal']),
    //     ...mapActions('blogsModules', ['addBlogAsync'])
    // },
};
</script>
<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
    background-color: #0f141c;
    opacity: 1;
    background-image: radial-gradient(#212943 0.6000000000000001px,
            #0f141c 0.6000000000000001px);
    background-size: 12px 12px;
    color: white;
}

/* #app {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
  } */

main {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
}

p {
    margin: 12px 0;
}

p>span {
    color: hsl(280deg, 100%, 80%);
}

button {
    border: none;
    background: linear-gradient(90deg,
            hsl(240deg, 50%, 50%),
            hsl(280deg, 50%, 50%));
    padding: 0.8em 1.4em;
    font-size: 16px;
    border-radius: 4px;
    color: white;
    margin-bottom: 36px;
    margin-top: 8px;
}
</style>