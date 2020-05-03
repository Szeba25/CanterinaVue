<template>
    <div class="main-layout">
        <div>
            <div class="main-social-container">
                <a target="_blank" href="https://www.facebook.com/canterinakamarakorus/">
                    <img class="social-media-link" src="@/assets/fb.png">
                </a>
                <a target="_blank" href="https://www.youtube.com">
                    <img class="social-media-link" src="@/assets/yt.png">
                </a>
            </div>
            <div class="main-lang-container">
                <img class="main-lang-item" src="@/assets/hu.png" @click="changeLanguage('hu')">
                <img class="main-lang-item" src="@/assets/en.png" @click="changeLanguage('en')">
            </div>
            <div @click="toggleMobileMenu()" v-bind:class="[{'mobile-menu-change': mobileMenuVisible}, 'mobile-menu']">
                <div class="mobile-menu-bar1"></div>
                <div class="mobile-menu-bar2"></div>
                <div class="mobile-menu-bar3"></div>
            </div>
            <div class="main-logo"></div>
            <hr class="main-separator">
        </div>
        <div class="main-menu">
            <router-link to="/">
                <p class="main-menu-point" v-bind:class="{ 'main-menu-active': isActive('Main') }">
                    {{ $t("menu.main") }}
                </p>
            </router-link>
            <div class="dropdown">
                <router-link to="/about_choir">
                    <p class="main-menu-point" v-bind:class="{ 'main-menu-active': isActive('AboutChoir', 'AboutMembers', 'AboutConductors') }">
                        {{ $t("menu.about.main") }}
                    </p>
                </router-link>
                <div class="dropdown-content">
                    <router-link to="/about_choir">
                        <p class="dropdown-menu-point">
                            {{ $t("menu.about.choir") }}
                        </p>
                    </router-link>
                    <router-link to="/about_members/1">
                        <p class="dropdown-menu-point">
                            {{ $t("menu.about.members") }}
                        </p>
                    </router-link>
                    <router-link to="/about_conductors/1">
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
        <div v-bind:class="['mobile-menu-' + (mobileMenuVisible ? 'on' : 'off'), 'mobile-menu-content']">
            <div @click="closeMobileMenu()" v-bind:class="'mobile-menu-outside-' + (mobileMenuVisible ? 'on' : 'off')"></div>
            <a target="_blank" href="https://www.facebook.com/canterinakamarakorus/">
                <img class="social-media-link-mobile" src="@/assets/fb.png">
            </a>
            <a target="_blank" href="https://www.youtube.com">
                <img class="social-media-link-mobile" src="@/assets/yt.png">
            </a>
            <transition name="fade" mode="out-in">
                <div v-if="!aboutItemsVisible" key="1">
                    <router-link to="/">
                        <p class="mobile-menu-item">{{ $t("menu.main") }}</p>
                    </router-link>
                    <p @click="toggleAboutMenu()" class="mobile-menu-item">{{ $t("menu.about.main") }}</p>
                    <router-link to="/events">
                        <p class="mobile-menu-item">{{ $t("menu.events") }}</p>
                    </router-link>
                    <router-link to="/albums">
                        <p class="mobile-menu-item">{{ $t("menu.albums") }}</p>
                    </router-link>
                    <router-link to="/gallery">
                        <p class="mobile-menu-item">{{ $t("menu.gallery") }}</p>
                    </router-link>
                    <router-link to="/public">
                        <p class="mobile-menu-item">{{ $t("menu.public") }}</p>
                    </router-link>
                    <router-link to="/contact">
                        <p class="mobile-menu-item">{{ $t("menu.contact") }}</p>
                    </router-link>
                    <router-link to="/for_members">
                        <p class="mobile-menu-item">{{ $t("menu.forMembers") }}</p>
                    </router-link>
                    <div style="height: 15px;"></div>
                    <p @click="toggleLanguage()" class="mobile-menu-item">{{ $t("menu.language") }}</p>
                </div>
                <div v-else key="2">
                    <p @click="toggleAboutMenu()" class="mobile-menu-item">{{ $t("menu.back") }}</p>
                    <div style="height: 15px;"></div>
                    <router-link to="/about_choir">
                        <p class="mobile-menu-item">{{ $t("menu.about.choir") }}</p>
                    </router-link>
                    <router-link to="/about_members">
                        <p class="mobile-menu-item">{{ $t("menu.about.members") }}</p>
                    </router-link>
                    <router-link to="/about_conductors">
                        <p class="mobile-menu-item">{{ $t("menu.about.conductors") }}</p>
                    </router-link>
                </div>
            </transition>
        </div>
        <div>
            <hr class="compact-separator">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",

    data() {
        return {
            scrollPosition: 0,
            mobileMenuVisible: false,
            aboutItemsVisible: false
        }
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },

    destroy() {
        window.removeEventListener('scroll', this.updateScroll);
    },

    watch: {
        $route(to, from) {
            if (to.name !== from.name) {
                this.closeMobileMenu();
            }
        }
    },

    methods: {
        changeLanguage(code) {
            this.$i18n.locale = code;
        },

        updateScroll() {
            this.scrollPosition = window.scrollY;
        },

        isActive(...names) {
            var match = false;
            names.forEach((name) => 
                match = match || 
                this.$router.currentRoute.name === name
            );
            return match;
        },

        toggleMobileMenu() {
            this.mobileMenuVisible = !this.mobileMenuVisible;
            this.aboutItemsVisible = false;
        },

        closeMobileMenu() {
            this.mobileMenuVisible = false;
            this.aboutItemsVisible = false;
        },

        toggleAboutMenu() {
            this.aboutItemsVisible = !this.aboutItemsVisible;
        },

        toggleLanguage() {
            if (this.$i18n.locale === 'hu') {
                this.$i18n.locale = 'en';
            } else {
                this.$i18n.locale = 'hu';
            }
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Italianno&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Amiri&display=swap');

body {
    margin: 0px auto;
    background-color: #160a08;
    max-width: 1200px;
}

/*
@media only screen and (max-width: 1100px) {
    body {
        background-color: #000000;
        background-image: none;
    }
}
*/

a {
    color: #6b6b6b;
    text-decoration: none;
}
a:visited {
    color: #6b6b6b;
    text-decoration: none;
}

a, p, h1, h2, h3, h4, figcaption {
    font-family: 'Amiri', serif;
    color: #efdfb8;
}

h2, h3, h4 {
    margin: 15px 0px;
}

p {
    font-size: 18px;
    line-height: 1.5;
    margin: 5px 0px;
}

hr {
    border: none;
    height: 2px;
    background: linear-gradient(to right, #160a08, #efdfb8, #160a08);
    margin: 5px 5px;
}

input[type=button] {
    background-color: #c0c0c0;
    font-size: 16px;
    font-style: italic;
    border: 2px solid #2e2e2e;
    border-radius: 25px;
    color: #000000;
    padding: 12px 24px;
    margin: 2px 4px;
    text-decoration: none;
    cursor: pointer;
    background-position: center;
    transition: background 0.8s;
}

input[type=button]:focus {
    outline: none;
}

input[type=button]:hover {
    background: #efdfb8 radial-gradient(circle, transparent 1%, #efdfb8 1%) center/15000%;
}

input[type=button]:active {
    background-color: #ffffff;
    background-size: 100%;
    transition: background 0s;
}

input[type=text], input[type=password] {
    display: block;
    width: 100%;
    padding: 8px;
    margin: 5px;
    background-color: #ffeeaf;
    border: 2px solid #2e2e2e;
    border-radius: 10px;
    box-sizing: border-box;
}

input[type=text]:focus, input[type=password]:focus {
    outline: none;
    border: 2px solid #6b6b6b;
}

.centered-text {
    text-align: center;
}

.justified-text {
    text-align: justify;
}

.main-social-container {
    float: left;
    margin: 0px 5px;
}

@media only screen and (max-width: 700px) {
    .main-social-container {
        display: none;
    }
}

.fade-enter-active, .fade-leave-active {
    transition: 0.3s;
}
.fade-enter {
    transform: translateX(80px);
    opacity: 0;
}

.fade-leave-to {
    transform: translateX(-30px);
    opacity: 0;
}

.mobile-menu {
    background-color: #160a08;
    box-shadow: 0px 0px 10px 3px #160a08;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    padding: 10px;
    margin: 4px;
    cursor: pointer;
    display: none;
}

@media only screen and (max-width: 700px) {
    .mobile-menu {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;
        display: block;
    }
}

.mobile-menu-bar1, .mobile-menu-bar2, .mobile-menu-bar3 {
    width: 40px;
    height: 4px;
    background-color: #efdfb8;
    margin: 7px 0px;
    transition: 0.5s;
}

.mobile-menu-change .mobile-menu-bar1 {
    transform: translate(0px, 11px) rotate(225deg);
}

.mobile-menu-change .mobile-menu-bar2 {
    opacity: 0;
    transform: translateX(-8px) scaleX(1.5) scaleY(0.5);
}

.mobile-menu-change .mobile-menu-bar3 {
    transform: translate(0px, -11px) rotate(-225deg);
}

.mobile-menu-outside-on {
    display: block;
    z-index: 0; 
    width: 30vw; 
    height: 100vh; 
    position: fixed; 
    top: 0px; 
    left: 0px;
}

.mobile-menu-outside-off {
    display: none;
}

.mobile-menu-content {
    display: none;
    border-left: 1px solid #ffeeaf;
    padding: 40px 5px 25px 20px;
}

@media only screen and (max-width: 700px) {
    .mobile-menu-content {
        display: block;
        background-color: #160a08;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1;
        overflow: auto;
    }
}

.social-media-link-mobile {
    margin: 5px 5px 0px 0px;
    width: 50px;
    height: 30px;
    object-fit: cover;
    border-radius: 5px;
    transition: 0.3s;
}

.social-media-link-mobile:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 3px #2e2e2e;
}

.mobile-menu-item {
    font-size: 26px;
    padding: 2px 4px 2px 4px;
    transition: 0.2s;
    font-family: 'Amiri', serif;
}

.mobile-menu-item:hover {
    cursor: pointer;
    border-radius: 5px;
}

.mobile-menu-item:active {
    background-color: #2e2e2e;
    color: #ffffff;
    cursor: pointer;
    border-radius: 5px;
}

.mobile-menu-on {
    opacity: 1;
    transition: 0.5s;
    height: 100vh;
    width: 60vw;
}

.mobile-menu-off {
    opacity: 0;
    transition: 0.5s;
    height: 100vh;
    width: 0;
}

.main-lang-container {
    float: right;
}

@media only screen and (max-width: 700px) {
    .main-lang-container {
        display: none;
    }
}

.main-lang-item {
    display: block;
    float: right;
    width: 50px;
    height: 25px;
    border-radius: 5px;
    margin: 5px 5px 0px 0px;
    transition: 0.3s;
}

.main-lang-item:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 3px #2e2e2e;
}

.main-logo {
    display: block;
    background-image: url("assets/logo.png");
    background-size: 380px 110px;
    width: 380px;
    height: 110px;
    margin: auto;
}

@media only screen and (max-width: 500px) {
    .main-logo {
        background-size: 266px 77px;
        width: 266px;
        height: 77px;
    }
}

@media only screen and (max-width: 700px) {
    .main-separator {
        display: none;
    }

    .compact-separator {
        margin: 20px 0px;
    }
}

.main-layout {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    grid-gap: 0px;
    padding: 0px;
    background-image: url("assets/header.jpg");
    background-repeat: no-repeat;
    background-position: center top;
}

@media only screen and (max-width: 1100px) {
    .main-layout {
        margin: 0px;
        border-radius: 0px;
        box-shadow: none;
        background-size: auto 200px;
    }
}

@media only screen and (max-width: 800px) {
    .main-layout {
        background-size: auto 190px;
    }
}

@media only screen and (max-width: 700px) {
    .main-layout {
        background-size: auto 140px;
    }
}

@media only screen and (max-width: 500px) {
    .main-layout {
        background-size: auto 110px;
    }
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
    grid-gap: 5px;
    padding: 0px;
    text-align: center;
    margin: auto;
}

@media only screen and (max-width: 700px) {
    .main-menu {
        display: none;
    }
}

.main-menu-point {
    font-size: 30px;
    padding: 6px 10px 6px 10px;
    transition: 0.5s;
    font-family: 'Italianno', cursive;
}

@media only screen and (max-width: 1100px) {
    .main-menu-point {
        font-size: 27px;
        padding: 3px 5px 3px 5px;
    }
}

@media only screen and (max-width: 800px) {
    .main-menu-point {
        font-size: 24px;
        padding: 3px 5px 3px 5px;
    }
}

.main-menu-point:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #2e2e2e;
    border-radius: 10px;
}

.main-menu-active {
    color: #ffffff;
    background-color: #2e2e2e;
    border-radius: 10px;
}

.dropdown {
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    margin: 0px 0px 0px 5px;
    background-color: #160a08;
    min-width: 100px;
    text-align: left;
    border: 1px solid #efdfb8;
    border-radius: 5px;
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-menu-point {
    font-size: 26px;
    margin: 0px;
    padding: 6px;
    border-radius: 5px;
    transition: 0.5s;
    font-family: 'Italianno', cursive;
}

@media only screen and (max-width: 1100px) {
    .dropdown-menu-point {
        font-size: 22px;
    }
}

.dropdown-menu-point:hover {
    color: #ffffff;
    background-color: #2e2e2e;
}

.social-media-link {
    margin: 5px 5px 0px 0px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    transition: 0.3s;
}

.social-media-link:hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px 3px #2e2e2e;
}

.styled-picture {
    object-fit: cover;
    border-radius: 10px;
}

.text-button {
    font-size: 20px;
    padding: 2px 4px 2px 4px;
    transition: 0.5s;
    font-family: 'Amiri', serif;
}

.text-button:hover, .text-button-active {
    cursor: pointer;
    color: #ffffff;
    background-color: #2e2e2e;
    border-radius: 5px;
}
</style>
