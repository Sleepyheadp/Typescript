<template>
    <ul>
        <li v-for="contact in contacts" :key="contact.id">
            <slot contact="contact" name="contact" />
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: "John Doe",
                    email: "johndoe@domain.com",
                },
                {
                    id: 2,
                    name: "Karen Williams",
                    email: "kwill@domai.com",
                },
                {
                    id: 3,
                    name: "Steve Rogers",
                    email: "stevrog@domain.com",
                },
            ],
        };
    },
};
</script>
<style scoped>
ul {
    list-style: none;
}

ul li {
    padding: 1em 0;
}
</style>