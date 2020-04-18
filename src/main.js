import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

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

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
