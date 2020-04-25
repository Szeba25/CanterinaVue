<template>
    <div class="loginpage-layout">
        <h2 class="loginpage-title">{{ $t("login.title") }}</h2>
        <div class="loginpage-container">
            <p class="loginpage-label">{{ $t("login.username") }}</p>
            <input type="text">
            <p class="loginpage-label">{{ $t("login.password") }}</p>
            <input type="password">
            <input class="loginpage-button" type="button" v-bind:value="$t('login.signIn')" @click="login()">
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",

    methods: {
        login() {
            setTimeout(() => {
                console.log("Login...");
                this.$router.push({name: "ForMembers"}).catch(() => {
                    console.log("Unauthorized");
                });
            }, 400);
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
