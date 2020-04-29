<template>
    <div class="layout">
        <h2 class="title">{{ $t("login.title") }}</h2>
        <div class="main-container">
            <p class="login-label">{{ $t("login.username") }}</p>
            <input type="text" v-model="username">
            <p class="login-label">{{ $t("login.password") }}</p>
            <input type="password" v-model="password">
            <input class="login-button" type="button" v-bind:value="$t('login.signIn')" @click="login()">
        </div>
    </div>
</template>

<script>
import Axios from "axios";

export default {
    name: "Login",

    data() {
        return {
            username: "",
            password: ""
        }
    },

    methods: {
        login() {
            let formData = new FormData();
            formData.append("username", this.username);
            formData.append("password", this.password);

            Axios.post("api/login.php", formData)
                .then((response) => {
                    if (response.data !== "") {
                        this.$router.push({name: "ForMembers"}).catch(() => {
                            console.log("Unauthorized");
                        });
                    } else {
                        console.log("Unauthorized");
                    }
                })
                .catch((error) => {
                    console.log(error);
                }); 
        }
    }
}
</script>

<style scoped>
.layout {
    min-height: 300px;
}

.title {
    text-align: center;
}

.main-container {
    width: 300px;
    margin: auto;
}

.login-label {
    margin: 0px 0px 0px 5px;
}

.login-button {
    margin: 15px auto 5px auto;
    display: block;
}
</style>
