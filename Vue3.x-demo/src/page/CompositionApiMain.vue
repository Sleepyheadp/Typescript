<template>
    <div>
        <MessageList :compositionApiProps="compositionApiProps"></MessageList>
    </div>
</template>
<script>
import MessageList from '../components/compositionAPI/MessageList.vue'
import { ref } from 'vue'
export default {
    components: { MessageList },
    setup(props) {
        const compositionApiProps = ref('props-father')
        return { compositionApiProps }
    }
}
</script>
<style lang="">
    
</style>