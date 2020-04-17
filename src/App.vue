<template>
    <div class="main-layout">
        <div>
            <img class="main-logo" src="@/assets/logo.png">
            <hr>
        </div>
        <div class="main-menu">
            <router-link to="/"><p class="main-menu-point">Főoldal</p></router-link>
            <router-link to="/"><p class="main-menu-point">Rólunk</p></router-link>
            <router-link to="/"><p class="main-menu-point">Események</p></router-link>
            <router-link to="/"><p class="main-menu-point">Albumok</p></router-link>
            <router-link to="/"><p class="main-menu-point">Galéria</p></router-link>
            <router-link to="/"><p class="main-menu-point">Közérdekű</p></router-link>
            <router-link to="/"><p class="main-menu-point">Kapcsolat</p></router-link>
        </div>
        <div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
html {
    overflow-y: scroll;
}

body {
    margin: 0px auto;
    background-color: #24252d;
    max-width: 1000px;
}

body:fater {
    display: none;
}

a {
    color: #917164;
    text-decoration: none;
}
a:visited {
    color: #917164;
    text-decoration: none;
}

hr {
    border-top: 1px solid #a33327;
    margin: 5px 5px;
}

.main-logo {
    display: block;
    margin: 10px auto;
}

.main-layout {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    grid-gap: 0px;
    padding: 0px;
    margin: 20px;
    background-color: #ffffff;
    border-radius: 5px;
}

.main-menu {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    grid-gap: 0px;
    padding: 0px;
    text-align: center;
    margin: 0px 100px;
}

.main-menu-point {
    font-size: 18px;
    margin: 6px;
    transition: 0.5s;
    font-family: 'Segoe UI';
}

.main-menu-point:hover {
    color: #c7493a;
}
</style>
