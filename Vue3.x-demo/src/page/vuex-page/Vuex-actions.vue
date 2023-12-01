<template>
    <div>
        <div v-if="loading">loading...</div>
        <div v-else>
            <p v-for="user in users" :key="user.id">
                user: <span>{{ user }}</span>
            </p>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
    created() {
        // this.$store.dispatch("fetchUsers")
        // this.fetchUsers()
        // this.fetchUsers({ limit: 2 })
        this.fetchUsersAndBlogs()
    },
    computed: mapState(["users", 'loading']),
    methods: mapActions(['fetchUsers', 'fetchUsersAndBlogs'])
}
</script>
<style scoped></style>