import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueI18n from "vue-i18n";

import App from "./App.vue";
import Main from "./components/Main.vue";
import ForMembers from "./components/ForMembers.vue";

import Login from "./components/Login.vue";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);

Vue.config.productionTip = false;

const routes = [
    { name: "Main", path: "/", components: { default: Main } },
    { name: "ForMembers", path: "/for_members", components: {default: ForMembers} },
    { name: "Login", path: "/login", components: {default: Login} }
];

const router = new VueRouter({
    routes: routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

router.beforeEach((to, from, next) => {
    if (to.name === "ForMembers") {
        setTimeout(() => {
            next({ name: 'Login' });
        }, 600);
    } else {
        next();
    }
})

const store = new Vuex.Store({
    state: {
        test: 0
    },
    mutations: {
        increment(state) {
            state.test++;
        }
    }
});

const messages = {
    en: {
        menu: {
            main: "Main",
            about: {
                main: "About",
                choir: "Choir",
                members: "Members",
                conductors: "Conductors"
            },
            events: "Events",
            albums: "Albums",
            gallery: "Gallery",
            public: "Public",
            contact: "Contact",
            forMembers: "For members"
        },
        tmp: {
            news1: "Actual news 1",
            news2: "Actual news 2",
            news3: "Actual news 3"
        },
        login: {
            title: "Welcome!",
            username: "Username",
            password: "Password"
        }
    },
    hu: {
        menu: {
            main: "Főoldal",
            about: {
                main: "Rólunk",
                choir: "Kórus",
                members: "Tagok",
                conductors: "Karnagyok"
            },
            events: "Események",
            albums: "Albumok",
            gallery: "Galéria",
            public: "Közérdekű",
            contact: "Kapcsolat",
            forMembers: "Tagoknak"
        },
        tmp: {
            news1: "Aktuális hír 1",
            news2: "Aktuális hír 2",
            news3: "Aktuális hír 3"
        },
        login: {
            title: "Üdvözöljük!",
            username: "Felhasználónév",
            password: "Jelszó"
        }
    }
};

const i18n = new VueI18n({
    locale: "hu",
    messages
})

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
