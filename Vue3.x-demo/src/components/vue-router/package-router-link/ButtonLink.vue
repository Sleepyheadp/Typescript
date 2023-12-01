<template>
    <div>
        <router-link custom v-bind="$props" v-slot="{ navigate }">
            <button @click="navigate">
                <slot />
            </button>
        </router-link>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    props: {
        ...RouterLink.props,
        // 其他额外属性
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