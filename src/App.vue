<template>
    <div class="main-layout">
        <div>
            <img class="main-logo" src="@/assets/logo.png">
            <hr>
        </div>
        <div class="main-menu">
            <router-link to="/"><p class="main-menu-point">{{ $t("menu.main") }}</p></router-link>
            <div class="dropdown">
                <router-link to="/"><p class="main-menu-point">{{ $t("menu.about") }}</p></router-link>
                <div class="dropdown-content">
                    <router-link to="/"><p class="dropdown-menu-point">Link 1</p></router-link>
                    <router-link to="/"><p class="dropdown-menu-point">Link 2</p></router-link>
                    <router-link to="/"><p class="dropdown-menu-point">Link 3</p></router-link>
                </div>
            </div>
            <router-link to="/"><p class="main-menu-point">{{ $t("menu.events") }}</p></router-link>
            <router-link to="/"><p class="main-menu-point">{{ $t("menu.albums") }}</p></router-link>
            <router-link to="/"><p class="main-menu-point">{{ $t("menu.gallery") }}</p></router-link>
            <router-link to="/"><p class="main-menu-point">{{ $t("menu.public") }}</p></router-link>
            <router-link to="/"><p class="main-menu-point">{{ $t("menu.contact") }}</p></router-link>
        </div>
        <div>
            <hr>
            <router-view></router-view>
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

a, p, h1, h2, h3 {
    font-family: 'Segoe UI';
    color: #24252d;
}

p {
    margin: 0px 5px;
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
    background-color: white;
    border-radius: 5px;
}

.main-menu {
    display: grid;
    grid-template-columns: min-content min-content min-content min-content min-content min-content min-content;
    grid-gap: 20px;
    padding: 0px;
    text-align: center;
    margin: auto;
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

.dropdown {
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 100px;
    text-align: left;
    border: 1px solid #917164;
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-menu-point {
    font-size: 18px;
    margin: 0px;
    padding: 6px;
    transition: 0.5s;
    font-family: 'Segoe UI';
}

.dropdown-menu-point:hover {
    color: #c7493a;
    background-color: #c7483a2d;
}

.social-media-link {
    margin: 0px 0px 0px 5px;
    width: 45px;
    height: 45px;
    border-radius: 20px;
    transition: 0.3s;
}

.social-media-link:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 3px #c7483a9a;
}
</style>
