<template>
    <div>
        <router-link v-if="!private || isLoggedIn()" v-bind="$props">
            <slot />
        </router-link>
    </div>
</template>

<script>
import { RouterLink } from "vue-router"
export default {
    props: {
        ...RouterLink.props,
        private: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        isLoggedIn() {
            // localStorage,getItem("user") !== null
            return false
        }
    }
}
</script>
<style scoped></style>