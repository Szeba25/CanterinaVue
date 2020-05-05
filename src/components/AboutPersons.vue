<template>
    <div class="layout">
        <div class="person-view">
            <div class="person-list">
                <h2 v-if="type !== false" class="person-title">{{ $t("about." + type + ".type") }}</h2>
                <div v-if="loaded">
                    <div class="text-button" v-bind:class="{ 'text-button-active': index === selected }" v-for="(person, index) in persons" :key="person.index" @click="setSelected(index)">
                        {{ person.name }}
                    </div>
                </div>
            </div>
            <div class="person-details">
                <div v-if="loaded && selected !== undefined">
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
                        <div class="text-button" v-bind:class="{ 'text-button-active': key === selected }" v-for="(person, key) in persons" :key="key" @click="setSelected(key)">
                            {{ person.name }}
                        </div>
                    </div>
                </div>
                <div v-else key="2">
                    <div class="compact-person-list">
                        <div v-if="type !== false" class="text-button larger-font" @click="toggleCompactList()">{{$t("about." + type + ".another")}}</div>
                        <hr style="margin: 10px 0px 25px 0px">
                    </div>
                    <div v-if="loaded && selected !== undefined">
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
            this.$router.push("/about/" + this.type + "/" + id).catch(() => {});
        },

        toggleCompactList() {
            this.compactListOpen = !this.compactListOpen;
        },

        addPersons() {
            if (this.type === "conductors") {
                this.persons = {
                    "2": { id: "2", name: "Tészta Gyula", portrait: "portrait_1.jpg", bio: { en: "<p>Person 1 bio</p>", hu: "<p>Tag 1 leírás</p>" } },
                    "5": { id: "5", name: "Kavics Ödön", portrait: "portrait_2.jpg", bio: { en: "<p>Person 2 bio</p><p>Some other paragraph</p><h4>Some large text</h4>", hu: "<p>Tag 2 leírás</p>" } },
                };
            } else {
                this.persons = {
                    "1": { id: "1", name: "Tészta Gyuláné", portrait: "portrait_1.jpg", bio: { en: "<p>Person 1 bio</p>", hu: "<p>Tag 1 leírás</p>" } },
                    "5": { id: "5", name: "Kavics Ödönné", portrait: "portrait_2.jpg", bio: { en: "<p>Person 2 bio</p><p>Some other paragraph</p><h4>Some large text</h4>", hu: "<p>Tag 2 leírás</p>" } },
                    "9": { id: "9", name: "Kocka Hilda", portrait: "portrait_3.jpg", bio: { en: "<p>Person 3 bio</p>", hu: "<p>Tag 3 leírás</p>" } },
                    "17": { id: "17", name: "Pöttyös Valéria", portrait: "portrait_4.jpg", bio: { en: "<p>Person 4 bio</p>", hu: "<p>Tag 4 leírás</p>" } }
                };
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

                // Mock async loading
                setTimeout(() => {
                    this.addPersons();
                    this.loaded = true;
                }, 100);
                // END
            }

            // Handle id change
            if (to.params.id !== undefined) {
                this.selected = to.params.id;
            } else {
                this.compactListOpen = true;
                this.selected = undefined;
            }
        }
    },

    mounted() {
        if (this.$route.params.id !== undefined) {
            this.selected = this.$route.params.id;
        } else {
            this.selected = undefined;
        }
        this.type = this.$route.params.type;

        // Mock async loading
        setTimeout(() => {
            this.addPersons();
            this.loaded = true;
        }, 100);
        // END
    },

    data() {
        return {
            type: false,
            compactListOpen: true,
            selected: undefined,
            loaded: false,
            persons: {}
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
