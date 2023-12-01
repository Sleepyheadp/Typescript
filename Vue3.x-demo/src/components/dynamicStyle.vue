<template>
    <main>
        <div class="box"></div>
        <div class="control">
            <input type="range" min="0" max="360" v-model="degree" />
        </div>
        <p>当前角度：{{ degree }}</p>
    </main>
</template>
<script>
export default {
    data() {
        return {
            degree: 0,
        };
    },
    computed: {
        degreeStr() {
            return this.degree + 'deg'
        }
    }
};
</script>
<style>
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

main {
    display: grid;
    place-items: center;
    row-gap: 24px;
}

.box {
    width: 250px;
    height: 250px;
    border-radius: 8px;
    background-color: hsl(280deg, 100%, 60%);
    box-shadow: 0 0 24px hsl(280deg, 100%, 70%, 0.5);
    /* transform: rotate(v-bind(degree + 'deg')); */
    transform: rotate(v-bind(degreeStr));
}

.control {
    margin-top: 64px;
}
</style>