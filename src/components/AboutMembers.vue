<template>
    <div class="layout">
        <div class="member-view">
            <div class="member-list">
                <h2 class="member-title">{{ $t("about.members") }}</h2>
                <div v-if="loaded">
                    <p class="text-button" v-bind:class="{ 'text-button-active': index === selected }" v-for="(member, index) in members" :key="member.index" @click="setSelected(index)">
                        {{ member.name }}
                    </p>
                </div>
            </div>
            <div class="member-details">
                <div v-if="loaded && selected !== -1">
                    <img class="styled-picture member-portrait" v-bind:src="members[selected].portrait">
                    <h2 class="member-name">{{ members[selected].name }}</h2>
                    <div v-html="members[selected].bio[$i18n.locale]"></div>
                </div>
            </div>
        </div>
        <div class="compact-member-view">
            <transition name="listfade" mode="out-in" key="1">
                <div v-if="compactListOpen" class="compact-member-list">
                    <div v-bind:class="'compact-member-list-' + (compactListOpen ? 'on' : 'off')">
                        <h2>{{$t('about.members')}}</h2>
                        <p class="text-button" v-bind:class="{ 'text-button-active': index === selected }" v-for="(member, index) in members" :key="member.index" @click="setSelected(index)">
                            {{ member.name }}
                        </p>
                    </div>
                </div>
                <div v-else key="2">
                    <div class="compact-member-list">
                        <p class="text-button larger-font" @click="toggleCompactList()">{{$t('about.anotherMember')}}</p>
                        <hr style="margin: 10px 0px 25px 0px">
                    </div>
                    <div v-if="loaded && selected !== -1">
                        <div class="member-details-compact">
                            <img class="styled-picture member-portrait" v-bind:src="members[selected].portrait">
                            <h2 class="member-name">{{ members[selected].name }}</h2>
                            <div v-html="members[selected].bio[$i18n.locale]"></div>
                        </div>
                        <div class="member-details-tiny">
                            <h2 class="member-name">{{ members[selected].name }}</h2>
                            <div v-html="members[selected].bio[$i18n.locale]"></div>
                            <img class="styled-picture member-portrait" v-bind:src="members[selected].portrait">
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutMembers",

    methods: {
        setSelected(id) {
            this.compactListOpen = false;
            this.$router.push("/about_members/" + (id + 1)).catch(() => {});
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
        setTimeout(() => {
            this.loaded = true;
        }, 100);
    },

    data() {
        return {
            compactListOpen: true,
            selected: -1,
            loaded: false,
            members: [
                { name: "Tészta Gyuláné", portrait: "portrait_1.jpg", bio: { en: "<p>Member 1 bio</p>", hu: "<p>Tag 1 leírás</p>" } },
                { name: "Kavics Ödönné", portrait: "portrait_2.jpg", bio: { en: "<p>Member 2 bio</p><p>Some other paragraph</p><h4>Some large text</h4>", hu: "<p>Tag 2 leírás</p>" } },
                { name: "Kocka Hilda", portrait: "portrait_3.jpg", bio: { en: "<p>Member 3 bio</p>", hu: "<p>Tag 3 leírás</p>" } },
                { name: "Pöttyös Valéria", portrait: "portrait_4.jpg", bio: { en: "<p>Member 4 bio</p>", hu: "<p>Tag 4 leírás</p>" } }
            ]
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

@media only screen and (max-width: 700px) {
    .layout {
        margin: 5px;
    }
}

.member-view {
    display: grid;
    grid-template-columns: 200px auto;
    min-height: 80vh;
}

@media only screen and (max-width: 700px) {
    .member-view {
        display: none;
    }
}

.member-list {
    padding-right: 5px;
    border-right: 2px solid #efdfb8;
}

.member-details {
    padding-left: 15px;
}

.compact-member-view {
    display: none;
}

@media only screen and (max-width: 700px) {
    .compact-member-view {
        display: block;
    }
}

.compact-member-list {
    display: none;
}

@media only screen and (max-width: 700px) {
    .compact-member-list {
        display: block;
    }
}

.compact-member-list-off {
    width: 100%;
    height: 0;
    overflow: hidden;
}

.compact-member-list-on {
    width: 100%;
    height: auto;
}

.member-details-compact {
    display: none;
}

.member-details-tiny {
    display: none;
}

@media only screen and (max-width: 700px) {
    .member-details-compact {
        display: block;
    }

    .member-details-tiny {
        display: none;
    }
}

@media only screen and (max-width: 420px) {
    .member-details-compact {
        display: none;
    }

    .member-details-tiny {
        display: block;
    }
}

.member-portrait {
    float: right;
    width: 300px;
    height: auto;
}

@media only screen and (max-width: 850px) {
    .member-portrait {
        width: 225px;
        height: auto;
    }
}

@media only screen and (max-width: 500px) {
    .member-portrait {
        width: 175px;
        height: auto;
    }
}

@media only screen and (max-width: 420px) {
    .member-portrait {
        width: 100%;
        height: auto;
        margin-top: 25px;
    }
}

.member-title {
    margin: 0px 0px 10px 0px;
}

.member-name {
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
