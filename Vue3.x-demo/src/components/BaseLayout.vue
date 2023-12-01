<!-- <template>
    <div>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template> -->
<script>
import { h } from 'vue'
export default {
    setup(props, { slots }) {
        return () => [
            // 第一个参数是slots名，第二个是传递的参数，
            h('header', {}, slots.header()),
            h('main', {}, slots.default())
        ];
    }
};
</script>
<style scoped></style>