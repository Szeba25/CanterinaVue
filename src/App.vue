<template>
    <div class="main-layout">
        <div>
            <div class="main-lang-container">
                <img class="main-lang-item" src="@/assets/hu.png" @click="changeLanguage('hu')">
                <img class="main-lang-item" src="@/assets/en.png" @click="changeLanguage('en')">
            </div>
            <div class="main-logo"></div>
            <hr>
        </div>
        <div class="main-menu">
            <router-link to="/">
                <p class="main-menu-point" v-bind:class="{ 'main-menu-active': isActive('Main') }">
                    {{ $t("menu.main") }}
                </p>
            </router-link>
            <div class="dropdown">
                <router-link to="/about_choir">
                    <p class="main-menu-point" v-bind:class="{ 'main-menu-active': isActive('About') }">
                        {{ $t("menu.about.main") }}
                    </p>
                </router-link>
                <div class="dropdown-content">
                    <router-link to="/about_choir">
                        <p class="dropdown-menu-point">
                            {{ $t("menu.about.choir") }}
                        </p>
                    </router-link>
                    <router-link to="/about_members">
                        <p class="dropdown-menu-point">
                            {{ $t("menu.about.members") }}
                        </p>
                    </router-link>
                    <router-link to="/about_conductors">
                        <p class="dropdown-menu-point">
                            {{ $t("menu.about.conductors") }}
                        </p>
                    </router-link>
                </div>
            </div>
            <router-link to="/events">
                <p class="main-menu-point" v-bind:class="{ 'main-menu-active': isActive('Events') }">
                    {{ $t("menu.events") }}
                </p>
            </router-link>
            <router-link to="/albums">
                <p class="main-menu-point" v-bind:class="{ 'main-menu-active': isActive('Albums') }">
                    {{ $t("menu.albums") }}
                </p>
            </router-link>
            <router-link to="/gallery">
                <p class="main-menu-point" v-bind:class="{ 'main-menu-active': isActive('Gallery') }">
                    {{ $t("menu.gallery") }}
                </p>
            </router-link>
            <router-link to="/public">
                <p class="main-menu-point" v-bind:class="{ 'main-menu-active': isActive('Public') }">
                    {{ $t("menu.public") }}
                </p>
            </router-link>
            <router-link to="/contact">
                <p class="main-menu-point" v-bind:class="{ 'main-menu-active': isActive('Contact') }">
                    {{ $t("menu.contact") }}
                </p>
            </router-link>
            <router-link to="/for_members">
                <p class="main-menu-point" v-bind:class="{ 'main-menu-active': isActive('ForMembers', 'Login') }">
                    {{ $t("menu.forMembers") }}
                </p>
            </router-link>
        </div>
        <div>
            <hr>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",

    methods: {
        changeLanguage(code) {
            this.$i18n.locale = code;
        },

        isActive(...names) {
            var match = false;
            names.forEach((name) => 
                match = match || 
                this.$router.currentRoute.name === name
            );
            return match;
        }
    }
}
</script>

<style>
html {
    overflow-y: scroll;
}

body {
    margin: 0px auto;
    background-color: #0f0c0c;
    max-width: 1100px;
}

body:fater {
    display: none;
}

a {
    color: #91646e;
    text-decoration: none;
}
a:visited {
    color: #91646e;
    text-decoration: none;
}

a, p, h1, h2, h3, h4 {
    font-family: 'Segoe UI';
    color: #0f0c0c;
}

h2, h3, h4 {
    margin: 15px 0px;
}

p {
    margin: 5px 0px;
}

hr {
    border-top: 1px solid #a51c0d;
    margin: 5px 5px;
}

input[type=button] {
    background-color: #a51c0d;
    font-size: 16px;
    border: none;
    color: white;
    padding: 12px 24px;
    margin: 2px 4px;
    text-decoration: none;
    cursor: pointer;
    background-position: center;
    transition: background 0.8s;
}

input[type=button]:focus {
    outline: 1px solid #91646e;
}

input[type=button]:hover {
    background: #e72a15 radial-gradient(circle, transparent 1%, #e72a15 1%) center/15000%;
}

input[type=button]:active {
    background-color: #ff6b5b;
    background-size: 100%;
    transition: background 0s;
}

input[type=text], input[type=password] {
    display: block;
    width: 100%;
    padding: 8px;
    margin: 5px;
    border: 1px solid  #a51c0d;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=text]:focus, input[type=password]:focus {
    outline: none;
    border: 1px solid #e72a15;
}

.centered-text {
    text-align: center;
}

.justified-text {
    text-align: justify;
}

.main-lang-container {
    float: right;
}

.main-lang-item {
    display: block;
    float: right;
    width: 40px;
    height: 20px;
    margin: 5px 5px 0px 0px;
}

.main-lang-item:hover {
    cursor: pointer;
}

.main-logo {
    display: block;
    background-image: url("assets/logo.png");
    width: 380px;
    height: 100px;
    margin: auto;
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
    grid-template-columns: auto 
                           auto
                           auto
                           auto
                           auto
                           auto
                           auto
                           auto;
    padding: 0px;
    text-align: center;
    margin: auto;
}

.main-menu-point {
    font-size: 18px;
    padding: 6px 10px 6px 10px;
    transition: 0.5s;
    font-family: 'Segoe UI';
}

.main-menu-point:hover {
    color: #e72a15;
    background-color: #c7483a2d;
    border-radius: 5px;
}

.main-menu-active {
    color: #e72a15;
    background-color: #c7483a2d;
    border-radius: 5px;
}

.dropdown {
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    margin: 0px 0px 0px 5px;
    background-color: white;
    min-width: 100px;
    text-align: left;
    border: 1px solid #91646e;
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
    color: #e72a15;
    background-color: #c7483a2d;
}

.social-media-link {
    margin: 5px 5px 0px 0px;
    width: 45px;
    height: 45px;
    border-radius: 20px;
    transition: 0.3s;
}

.social-media-link:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 3px #c7483a9a;
}

.styled-picture {
    object-fit: cover;
    border: 1px solid #a51c0d;
    border-radius: 5px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
}
</style>
