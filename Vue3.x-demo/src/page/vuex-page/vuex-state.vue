<template>
    <div>
        <div>{{ name }}</div>
        <p>{{ age }}</p>
        <p>{{ work }}</p>
        <p>{{ tip }}</p>
        <p>{{ bgColor }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        // 1、对单个state数据进行computed监听(冗余)
        // computed: {
        //     name() {
        //         return this.$store.state.name
        //     },
        //     age() {
        //         return this.$store.state.age
        //     }
        // },
        // 2、使用mapState
        // computed: mapState({
        //     color: (state) => state.color,
        //     name: 'name',
        //     age: 'age'
        // })
        // 3、需要对个别数据进行处理
        bgColor() {
            const colors = this.$store.state.color
            return `rgb(${colors.join(',')})`
        },
        ...mapState(['name', 'age', 'work', 'tip']),
    }
}

</script>
<style scoped></style>