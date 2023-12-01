<template>
    <main>
        <div class="container">
            <button @click="show = !show">{{ show ? "隐藏" : "显示" }}</button>
            <Transition name="fadeAndScale" enter-active-class="animate__animated animate__wobble"
                leave-active-class="animate__animated animate__bounceOut">
                <div v-if="show" class="box"></div>
            </Transition>
        </div>
    </main>
</template>
<script setup>
import "animate.css";
import { ref, Transition } from "vue";

const show = ref(false);
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

.container {
    display: grid;
    justify-items: center;
    grid-template-rows: 70px 1fr;
    height: 300px;
}

button {
    border: none;
    background: linear-gradient(90deg,
            hsl(240deg, 50%, 50%),
            hsl(280deg, 50%, 50%));
    padding: 12px 18px;
    margin-bottom: 24px;
    border-radius: 4px;
    color: white;
}

.box {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg,
            hsl(240deg, 60%, 50%),
            hsl(300deg, 90%, 50%));
    padding: 0.5em 1.4em;
    border-radius: 4px;
    color: white;
    /* transition: all 0.5s ease-in-out; */
}

/* .fadeAndScale-enter-active {
    animation: scale 0.7s ease-in-out;
    transition: all 0.7s ease-in-out;
  }
  
  .fadeAndScale-enter-from {
    opacity: 0;
  }
  
  .fadeAndScale-enter-to {
    opacity: 1;
  }
  
  .fadeAndScale-leave-active {
    transition: all 0.3s ease-in;
    animation: scale 0.3s ease-in reverse;
  }
  
  .fadeAndScale-leave-from {
    opacity: 1;
  }
  .fadeAndScale-leave-to {
    opacity: 0;
  }
  
  @keyframes scale {
    0% {
      transform: scale(0);
    }
    33% {
      transform: scale(1.1);
    }
    66% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  } */
</style>
  