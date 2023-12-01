<template>
    <div class="main">
        <!-- <p v-for="user in $store.getters.usersOlderThan26" :key="user.id">
            user: <span>{{ user }}</span>
        </p> -->
        <p>年龄大于26的：</p>
        <p v-for="user in usersOlderThan26" :key="user.id">
            user: <span>{{ user }}</span>
        </p>
        <p>
            年龄大于26的总计： <span>{{ numberOfUsersOlderThan26 }}</span>
        </p>
        <p>年龄大于25的：</p>
        <p v-for="user in usersOlderThan(25)" :key="user.id">
            user: <span>{{ user }}</span>
        </p>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    computed: {
        ...mapGetters(['usersOlderThan26', 'numberOfUsersOlderThan26', 'usersOlderThan'])
    },
}
</script>
<style scoped></style>