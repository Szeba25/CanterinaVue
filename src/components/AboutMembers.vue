<template>
    <div class="layout">
        <div class="member-list">
            <h2 class="member-title">{{ $t("about.members") }}</h2>
            <div v-if="loaded">
                <p class="text-button" v-bind:class="{ 'text-button-active': index === selected }" v-for="(member, index) in members" :key="member.index" @click="setSelected(index)">
                    {{ member.name }}
                </p>
            </div>
        </div>
        <div>
            <div v-if="loaded">
                <img class="styled-picture member-portrait" v-bind:src="members[selected].portrait">
                <h2 class="member-name">{{ members[selected].name }}</h2>
                <div v-html="members[selected].bio[$i18n.locale]"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutMembers",

    methods: {
        setSelected(id) {
            this.$router.push("/about_members/" + (id + 1));
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
            selected: -1,
            loaded: false,
            members: [
                { name: "Tészta Gyula", portrait: "portrait_1.jpg", bio: { en: "<p>Member 1 bio</p>", hu: "<p>Tag 1 leírás</p>" } },
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
    display: grid;
    grid-template-columns: 200px auto;
    grid-gap: 15px;
    margin: 25px;
}

.member-list {
    border-right: 2px solid #efdfb8;
    padding-right: 5px;
}

.member-portrait {
    float: right;
    width: 300px;
    height: 400px;
}

.member-title {
    margin: 0px 0px 10px 0px;
}

.member-name {
    margin: 0px 0px 10px 0px;
}
</style>
