<template>
    <main>
        <div>
            <!-- <p v-fsize="18">这是一个段落</p> -->
            <!-- <p v-fsize="fontSize">这是一个段落</p> -->
            <p v-fsize:[unit]="fontSize">这是一个段落</p>
            <button class="btn increase" @click="fontSize += 1">A</button>
            <button class="btn decrease" @click="fontSize -= 1">a</button>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            fontSize: 1,
            unit: 'em'
        };
    },
};
</script>
<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
    background-color: #0f141c;
    opacity: 1;
    background-image: radial-gradient(#212943 0.6000000000000001px,
            #0f141c 0.6000000000000001px);
    background-size: 12px 12px;
    color: white;
}

#app {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
}

div {
    text-align: center;
}

p {
    width: 300px;
    height: 100px;
    overflow: auto;
}

button {
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    width: 40px;
    padding: 4px 6px;
    margin-right: 8px;
    margin-top: 8px;
    background: none;
    color: white;
    font-size: 20px;
}
</style>