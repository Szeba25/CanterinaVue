import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n'

import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);

Vue.config.productionTip = false;

const routes = [
    { path: '/', components: { default: HelloWorld } }
];

const router = new VueRouter({
    routes: routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
});

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
            about: "About",
            events: "Events",
            albums: "Albums",
            gallery: "Gallery",
            public: "Public",
            contact: "Contact"
        }
    },
    hu: {
        menu: {
            main: "Főoldal",
            about: "Rólunk",
            events: "Események",
            albums: "Albumok",
            gallery: "Galéria",
            public: "Közérdekű",
            contact: "Kapcsolat"
        }
    }
};

const i18n = new VueI18n({
    locale: 'hu',
    messages
})

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
