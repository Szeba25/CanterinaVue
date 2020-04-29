<template>
    <div class="layout">
        <div class="conductor-list">
            <h2 class="conductor-title">{{ $t("about.conductors") }}</h2>
            <p class="text-button" v-bind:class="{ 'text-button-active': index === selected }" v-for="(conductor, index) in conductors" :key="conductor.index" @click="setSelected(index)">
                {{ conductor.name }}
            </p>
        </div>
        <div>
            <div v-if="selected >= 0">
                <img class="styled-picture conductor-portrait" v-bind:src="conductors[selected].portrait">
                <h2 class="conductor-name">{{ conductors[selected].name }}</h2>
                <div v-html="conductors[selected].bio[$i18n.locale]"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutConductors",

    methods: {
        setSelected(idx) {
            this.selected = idx;
        }
    },

    data() {
        return {
            selected: -1,
            conductors: [
                { name: "Tészta Géza", portrait: "portrait_3.jpg", bio: { en: "<p>Conductor 1 bio</p>", hu: "<p>Karnagy 1 leírás</p>" } },
                { name: "Kavics Ödön", portrait: "portrait_1.jpg", bio: { en: "<p>Conductor 2 bio</p><p>Some other paragraph</p><h4>Some large text</h4>", hu: "<p>Karnagy 2 leírás</p>" } },
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

.conductor-list {
    border-right: 2px solid #a51c0d;
    padding-right: 5px;
}

.conductor-portrait {
    float: right;
    width: 300px;
    height: 400px;
}

.conductor-title {
    margin: 0px 0px 10px 0px;
}

.conductor-name {
    margin: 0px 0px 10px 0px;
}
</style>
