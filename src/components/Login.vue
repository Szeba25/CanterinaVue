<template>
    <div class="loginpage-layout">
        <h2 class="loginpage-title">{{ $t("login.title") }}</h2>
        <div class="loginpage-container">
            <p class="loginpage-label">{{ $t("login.username") }}</p>
            <input class="loginpage-input" type="text">
            <p class="loginpage-label">{{ $t("login.password") }}</p>
            <input class="loginpage-input" type="password">
        </div>
    </div>
</template>

<script>
export default {
    name: "Login"
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

.loginpage-input {
    display: block;
    width: 286px;
    padding: 8px;
    margin: 5px;
    border: 1px solid  #a51c0d;
    border-radius: 4px;
    box-sizing: border-box;
}

.loginpage-input:focus {
    outline: none;
    border: 1px solid #e72a15;
}
</style>
