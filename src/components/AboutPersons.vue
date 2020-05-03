<template>
    <div class="layout">
        <div class="person-view">
            <div class="person-list">
                <h2 v-if="type !== false" class="person-title">{{ $t("about." + type + ".type") }}</h2>
                <div v-if="loaded">
                    <p class="text-button" v-bind:class="{ 'text-button-active': index === selected }" v-for="(person, index) in persons" :key="person.index" @click="setSelected(index)">
                        {{ person.name }}
                    </p>
                </div>
            </div>
            <div class="person-details">
                <div v-if="loaded && selected !== -1">
                    <img class="styled-picture person-portrait" v-bind:src="persons[selected].portrait">
                    <h2 class="person-name">{{ persons[selected].name }}</h2>
                    <div v-html="persons[selected].bio[$i18n.locale]"></div>
                </div>
            </div>
        </div>
        <div class="compact-person-view">
            <transition name="listfade" mode="out-in" key="1">
                <div v-if="compactListOpen" class="compact-person-list">
                    <div v-bind:class="'compact-person-list-' + (compactListOpen ? 'on' : 'off')">
                        <h2 v-if="type !== false">{{$t("about." + type + ".type")}}</h2>
                        <p class="text-button" v-bind:class="{ 'text-button-active': index === selected }" v-for="(person, index) in persons" :key="person.index" @click="setSelected(index)">
                            {{ person.name }}
                        </p>
                    </div>
                </div>
                <div v-else key="2">
                    <div class="compact-person-list">
                        <p v-if="type !== false" class="text-button larger-font" @click="toggleCompactList()">{{$t("about." + type + ".another")}}</p>
                        <hr style="margin: 10px 0px 25px 0px">
                    </div>
                    <div v-if="loaded && selected !== -1">
                        <div class="compact-person-details">
                            <img class="styled-picture person-portrait" v-bind:src="persons[selected].portrait">
                            <h2 class="person-name">{{ persons[selected].name }}</h2>
                            <div v-html="persons[selected].bio[$i18n.locale]"></div>
                        </div>
                        <div class="tiny-person-details">
                            <h2 class="person-name">{{ persons[selected].name }}</h2>
                            <div v-html="persons[selected].bio[$i18n.locale]"></div>
                            <img class="styled-picture person-portrait" v-bind:src="persons[selected].portrait">
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutPersons",

    methods: {
        setSelected(id) {
            this.compactListOpen = false;
            this.$router.push("/about/" + this.type + "/" + (id + 1)).catch(() => {});
        },

        toggleCompactList() {
            this.compactListOpen = !this.compactListOpen;
        },

        addPersons() {
            if (this.type === "conductors") {
                this.persons = [
                    { name: "Tészta Gyula", portrait: "portrait_1.jpg", bio: { en: "<p>Person 1 bio</p>", hu: "<p>Tag 1 leírás</p>" } },
                    { name: "Kavics Ödön", portrait: "portrait_2.jpg", bio: { en: "<p>Person 2 bio</p><p>Some other paragraph</p><h4>Some large text</h4>", hu: "<p>Tag 2 leírás</p>" } },
                ];
            } else {
                this.persons = [
                    { name: "Tészta Gyuláné", portrait: "portrait_1.jpg", bio: { en: "<p>Person 1 bio</p>", hu: "<p>Tag 1 leírás</p>" } },
                    { name: "Kavics Ödönné", portrait: "portrait_2.jpg", bio: { en: "<p>Person 2 bio</p><p>Some other paragraph</p><h4>Some large text</h4>", hu: "<p>Tag 2 leírás</p>" } },
                    { name: "Kocka Hilda", portrait: "portrait_3.jpg", bio: { en: "<p>Person 3 bio</p>", hu: "<p>Tag 3 leírás</p>" } },
                    { name: "Pöttyös Valéria", portrait: "portrait_4.jpg", bio: { en: "<p>Person 4 bio</p>", hu: "<p>Tag 4 leírás</p>" } }
                ];
            }
        }
    },

    watch: {
        $route(to) {
            // Handle type change
            if (to.params.type !== this.type) {
                this.type = to.params.type;
                this.loaded = false;
                this.persons = [];
                setTimeout(() => {
                    this.addPersons();
                    if (this.selected < 0 || this.selected > this.persons.length - 1) {
                        this.selected = -1;
                    }
                    this.loaded = true;
                }, 400);
            }

            // Handle id change
            if (to.params.id !== undefined) {
                this.selected = parseInt(to.params.id) - 1;
                if (this.loaded && (this.selected < 0 || this.selected > this.persons.length - 1)) {
                    this.selected = -1;
                }
            } else {
                this.compactListOpen = true;
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
        this.type = this.$route.params.type;
        setTimeout(() => {
            this.addPersons();
            if (this.selected < 0 || this.selected > this.persons.length - 1) {
                this.selected = -1;
            }
            this.loaded = true;
        }, 400);
    },

    data() {
        return {
            type: false,
            compactListOpen: true,
            selected: -1,
            loaded: false,
            persons: []
        }
    }
}
</script>

<style scoped>
.layout {
    min-height: 420px;
    display: block;
    margin: 25px;
}

.person-view {
    display: grid;
    grid-template-columns: 200px auto;
    min-height: 80vh;
}

.person-list {
    padding-right: 5px;
    border-right: 2px solid #efdfb8;
}

.person-details {
    padding-left: 15px;
}

.compact-person-view {
    display: none;
}

.compact-person-list {
    display: none;
}

.compact-person-list-off {
    width: 100%;
    height: 0;
    overflow: hidden;
}

.compact-person-list-on {
    width: 100%;
    height: auto;
}

.compact-person-details {
    display: none;
}

.tiny-person-details {
    display: none;
}

.person-portrait {
    float: right;
    width: 300px;
    height: auto;
}

.person-title {
    margin: 0px 0px 10px 0px;
}

.person-name {
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

@media only screen and (max-width: 850px) {
    .person-portrait {
        width: 225px;
        height: auto;
    }
}

@media only screen and (max-width: 700px) {
    .layout {
        margin: 5px;
    }

    .person-view {
        display: none;
    }

    .compact-person-view {
        display: block;
    }

    .compact-person-list {
        display: block;
    }

    .compact-person-details {
        display: block;
    }

    .tiny-person-details {
        display: none;
    }
}

@media only screen and (max-width: 500px) {
    .person-portrait {
        width: 175px;
        height: auto;
    }
}

@media only screen and (max-width: 420px) {
    .compact-person-details {
        display: none;
    }

    .tiny-person-details {
        display: block;
    }

    .person-portrait {
        width: 100%;
        height: auto;
        margin-top: 25px;
    }
}
</style>
