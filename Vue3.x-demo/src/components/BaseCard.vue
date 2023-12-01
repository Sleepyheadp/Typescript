<!-- <template>
    <div class="card">
        <div class="title">
            {{ title }}
        </div>
        <div id="content">
            <slot></slot>
        </div>
    </div>
</template> -->
<script>
import { h } from 'vue'
export default {
    props: ["title"],
    render() {
        return h('div', { class: 'card' }, [
            h('div', { class: 'title' }, this.title),
            h('div', { id: 'content' }, this.$slots.default()), // slot默认default
            [1, 2, 3, 4].map(item => h('h' + item, {}, item))
        ])
    }
};
</script>
<style scoped>
.card {
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 8px;
    padding: 12px;
    min-width: 240px;
}

.title {
    border-bottom: 2px solid hsl(280deg, 50%, 50%);
    padding-bottom: 8px;
}

.content {
    min-height: 20px;
    margin-top: 18px;
}
</style>
  