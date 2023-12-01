<template>
    <main>
        <div>
            <div class="form">
                <label for="username">用户名：</label>
                <!-- 如果直接绑定user.username，可以双向绑定数据，但是并不会触发mutations同步修改数据的方法 -->
                <!-- <input id="username" type="text" v-model="user.username" /> -->
                <!-- <input id="username" type="text" :value="user.username"
                    @input="updateUser({ field: 'username', value: $event.target.value })" /> -->
                <input type="text" id="username" v-model="username" />
                <label for="gender">性别：</label>
                <div id="gender" class="radio-group">
                    <input v-model="gender" name="gender" type="radio" value="male" /><span>男</span>
                    <input v-model="gender" name="gender" type="radio" value="female" /><span>女</span>
                </div>
                <label for="occupation">职业：</label>
                <select name="occupation" id="occupation" v-model="occupation">
                    <option value="frontend">前端工程师</option>
                    <option value="backend">后端工程师</option>
                    <option value="fullstack">全栈工程师</option>
                </select>
            </div>
            <div class="result">
                <ul>
                    <li>用户名：{{ user.username }}</li>
                    <li>性别：{{ user.gender }}</li>
                    <li>职业：{{ user.occupation }}</li>
                </ul>
            </div>
        </div>
    </main>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: {
        ...mapState(["user"]),
        // username: {
        //     get() {
        //         return this.user.username
        //     },
        //     set(value) {
        //         this.updateUser({ field: 'username', value })
        //     }
        // }
        ...["username", "gender", "occupation"].reduce((obj, field) => {
            obj[field] = {
                get() {
                    return this.user[field]
                },
                set(value) {
                    this.updateUser({ field, value })
                }
            };
            return obj
        }, {})
    },
    methods: {
        ...mapMutations(['updateUser'])
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

/* #app {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
  } */

main {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    display: grid;
    place-items: center;
}

button {
    border: none;
    background: linear-gradient(90deg,
            hsl(240deg, 50%, 50%),
            hsl(280deg, 50%, 50%));
    padding: 0.8em 1.4em;
    font-size: 16px;
    border-radius: 4px;
    color: white;
    margin-bottom: 36px;
    margin-top: 8px;
}

input,
textarea,
select {
    padding: 8px 14px;
    border: 1px solid hsl(280deg, 50%, 50%);
    border-radius: 4px;
    margin-left: 8px;
    outline: none;
    background: hsl(280deg, 50%, 30%, 0.2);
    color: white;
}

.form {
    display: grid;
    grid-template-columns: 80px 1fr;
    row-gap: 14px;
    width: 50%;
}

label {
    text-align: right;
}

.form> :is(input, select, div) {
    grid-column: 2 / 3;
}

.radio-group,
.checkbox-group {
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    column-gap: 12px;
}

:is(.radio-group, .checkbox-group)>span {
    grid-column: 2 / 3;
}

.result {
    align-self: start;
    margin-top: 48px;
}

.result ul {
    list-style: none;
}

.result li {
    margin-top: 12px;
}
</style>  