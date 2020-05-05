import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import Axios from "axios";

import App from "./App.vue";
import Main from "./components/Main.vue";
import AboutChoir from "./components/AboutChoir.vue";
import AboutPersons from "./components/AboutPersons.vue";
import Events from "./components/Events.vue";
import Event from "./components/Event.vue";
import Albums from "./components/Albums.vue";
import Gallery from "./components/Gallery.vue";
import GalleryFolder from "./components/GalleryFolder.vue";
import Public from "./components/Public.vue";
import Contact from "./components/Contact.vue";
import ForMembers from "./components/ForMembers.vue";
import Login from "./components/Login.vue";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);

Vue.config.productionTip = false;

const routes = [
    { name: "Main", path: "/", components: { default: Main } },
    { name: "AboutChoir", path: "/about_choir", components: { default: AboutChoir } },
    { name: "AboutPersonsMain", path: "/about/:type(members|conductors)", components: { default: AboutPersons } },
    { name: "AboutPersons", path: "/about/:type(members|conductors)/:id(\\d+)", components: { default: AboutPersons } },
    { name: "Events", path: "/events", components: { default: Events } },
    { name: "Event", path: "/events/:id(\\d+)", components: { default: Event} },
    { name: "Albums", path: "/albums", components: { default: Albums } },
    { name: "Gallery", path: "/gallery", components: { default: Gallery } },
    { name: "GalleryFolder", path: "/gallery/:id(\\d+)", components: { default: GalleryFolder } },
    { name: "Public", path: "/public", components: { default: Public } },
    { name: "Contact", path: "/contact", components: { default: Contact } },
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

    // Gallery bug: If back button is pressed on open gallery, overflow is set to hidden...
    document.body.style.overflow = 'auto';

    if (to.name === "ForMembers") {
        Axios.get("api/userinfo.php")
            .then((response) => {
                if (response.data !== "") {
                    next();
                } else {
                    next({ name: 'Login' });
                }
            })
            .catch((error) => {
                console.log(error);
            });
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
            back: "Back",
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
            forMembers: "For members",
            language: "Váltás magyarra"
        },
        main: {
            moreEvents: "More events"
        },
        login: {
            title: "Welcome!",
            username: "Username",
            password: "Password",
            signIn: "Sign in",
            signOut: "Sign out"
        },
        about: {
            members: {
                type: "Members",
                another: "Another member"
            },
            conductors: {
                type: "Conductors",
                another: "Another conductor"
            }
        },
        events: {
            back: "Back to all events"
        },
        gallery: {
            choose: "Choose album",
            back: "Back to albums"
        }
    },
    hu: {
        menu: {
            back: "Vissza",
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
            forMembers: "Tagoknak",
            language: "Switch to english"
        },
        main: {
            moreEvents: "További események"
        },
        login: {
            title: "Üdvözöljük!",
            username: "Felhasználónév",
            password: "Jelszó",
            signIn: "Bejelentkezés",
            signOut: "Kijelentkezés"
        },
        about: {
            members: {
                type: "Tagok",
                another: "Másik tag"
            },
            conductors: {
                type: "Karnagyok",
                another: "Másik karnagy"
            }
        },
        events: {
            back: "Vissza az összes eseményhez"
        },
        gallery: {
            choose: "Válassz albumot",
            back: "Vissza az albumokhoz"
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
