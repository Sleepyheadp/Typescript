<template>
    <Component :is="heading">
        <slot></slot>
    </Component>
</template>
<script>
export default {
    props: ["level"],
    computed: {
        heading() {
            return `h${this.level}`;
        },
    },
};
</script>
<style scoped>
h1 {
    font-size: 3em;
}

h2 {
    font-size: 2.4em;
}

h3 {
    font-size: 1.8em;
}

h4 {
    font-size: 1.4em;
}

h5 {
    font-size: 1.2em;
}

h6 {
    font-size: 1em;
}
</style>