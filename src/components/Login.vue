<template>
    <div class="loginpage-layout">
        <h2 class="loginpage-title">{{ $t("login.title") }}</h2>
        <div class="loginpage-container">
            <p class="loginpage-label">{{ $t("login.username") }}</p>
            <input type="text" v-model="username">
            <p class="loginpage-label">{{ $t("login.password") }}</p>
            <input type="password" v-model="password">
            <input class="loginpage-button" type="button" v-bind:value="$t('login.signIn')" @click="login()">
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
.loginpage-layout {
    min-height: 300px;
}

.loginpage-title {
    text-align: center;
}

.loginpage-container {
    width: 300px;
    margin: auto;
}

.loginpage-label {
    
}

.loginpage-button {
    margin: 15px auto 5px auto;
    display: block;
}
</style>
