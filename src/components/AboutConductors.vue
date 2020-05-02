<template>
    <div class="layout">
        <div class="conductor-list">
            <h2 class="conductor-title">{{ $t("about.conductors") }}</h2>
            <div v-if="loaded">
                <p class="text-button" v-bind:class="{ 'text-button-active': index === selected }" v-for="(conductor, index) in conductors" :key="conductor.index" @click="setSelected(index)">
                    {{ conductor.name }}
                </p>
            </div>
        </div>
        <transition name="listfade" mode="out-in" key="1">
            <div v-if="compactListOpen" class="compact-conductor-list">
                <p class="text-button larger-font" @click="toggleCompactList()">{{$t('about.back')}}</p>
                <hr style="margin: 0px 0px 15px 0px">
                <div v-bind:class="'compact-conductor-list-' + (compactListOpen ? 'on' : 'off')">
                    <p class="text-button" v-bind:class="{ 'text-button-active': index === selected }" v-for="(conductor, index) in conductors" :key="conductor.index" @click="setSelected(index)">
                        {{ conductor.name }}
                    </p>
                </div>
            </div>
            <div v-else key="2">
                <div class="compact-conductor-list">
                    <p class="text-button larger-font" @click="toggleCompactList()">{{$t('about.conductorList')}}</p>
                    <hr style="margin: 0px 0px 15px 0px">
                </div>
                <div v-if="loaded">
                    <img class="styled-picture conductor-portrait" v-bind:src="conductors[selected].portrait">
                    <h2 class="conductor-name">{{ conductors[selected].name }}</h2>
                    <div v-html="conductors[selected].bio[$i18n.locale]"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "AboutConductors",

    methods: {
        setSelected(id) {
            this.compactListOpen = false;
            this.$router.push("/about_conductors/" + (id + 1));
        },

        toggleCompactList() {
            this.compactListOpen = !this.compactListOpen;
        }
    },

    watch: {
        $route(to) {
            if (to.params.id !== undefined) {
                this.selected = parseInt(to.params.id) - 1;
            } else {
                this.selected = -1;
            }
        }
    },

    mounted() {
        if (this.$route.params.id !== undefined) {
            this.selected = parseInt(this.$route.params.id) - 1;
        } else {
            this.selected = -1;
        }
        setTimeout(() => {
            this.loaded = true;
        }, 100);
    },

    data() {
        return {
            compactListOpen: false,
            selected: -1,
            loaded: false,
            conductors: [
                { name: "Tészta György", portrait: "portrait_1.jpg", bio: { en: "<p>Conductor 1 bio</p>", hu: "<p>Tag 1 leírás</p>" } },
                { name: "Kavics Ödön", portrait: "portrait_2.jpg", bio: { en: "<p>Conductor 2 bio</p><p>Some other paragraph</p><h4>Some large text</h4>", hu: "<p>Tag 2 leírás</p>" } },
            ]
        }
    }
}
</script>

<style scoped>
.layout {
    min-height: 420px;
    display: grid;
    grid-template-columns: 200px auto;
    grid-gap: 15px;
    margin: 25px;
}

@media only screen and (max-width: 700px) {
    .layout {
        display: block;
        margin: 5px;
    }
}

.conductor-list {
    border-right: 2px solid #efdfb8;
    padding-right: 5px;
    min-height: 80vh;
}

@media only screen and (max-width: 700px) {
    .conductor-list {
        display: none;
    }
}

.compact-conductor-list {
    display: none;
}

@media only screen and (max-width: 700px) {
    .compact-conductor-list {
        display: block;
    }
}

.compact-conductor-list-off {
    width: 100%;
    height: 0;
    overflow: hidden;
}

.compact-conductor-list-on {
    width: 100%;
    height: auto;
}

.conductor-portrait {
    float: right;
    width: 300px;
    height: auto;
}

@media only screen and (max-width: 800px) {
    .conductor-portrait {
        width: 225px;
        height: auto;
    }
}

@media only screen and (max-width: 500px) {
    .conductor-portrait {
        width: 175px;
        height: auto;
    }
}

@media only screen and (max-width: 420px) {
    .conductor-portrait {
        width: 100%;
        height: auto;
        margin-bottom: 25px;
    }
}

.conductor-title {
    margin: 0px 0px 10px 0px;
}

.conductor-name {
    margin: 0px 0px 10px 0px;
}

.larger-font {
    font-size: 22px;
}

.listfade-enter-active, .listfade-leave-active {
    transition: 0.4s;
}

.listfade-enter {
    transform: translateX(-100px);
    opacity: 0;
}

.listfade-leave-to {
    transform: translateX(-100px);
    opacity: 0;
}
</style>
