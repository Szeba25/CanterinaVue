<template>
    <div class="layout">
        <div v-if="loaded" class="top-container">
            <img class="styled-picture main-picture" v-bind:src="mainPicture">
        </div>
        <div v-if="loaded" class="bottom-container">
            <div class="event" v-for="(event, index) in events" :key="index">
                <img class="event-picture" v-bind:src="event.picture">
                <div class="event-bottom">
                    <p class="event-date">{{ event.date }}</p>
                    <p class="event-title">{{ event.title[$i18n.locale] }}</p>
                    <p class="event-content" v-html="event.content[$i18n.locale]"></p>
                </div>
            </div>
        </div>
        <input class="more-events-button" type="button" v-bind:value="$t('main.moreEvents')">
    </div>
</template>

<script>
export default {
    name: "Main",

    methods: {
        load() {
            this.loaded = true;
            this.mainPicture = "main.jpg";
            this.events = [
                { id: "5", picture: "choir.jpg", date: "2020. 04. 29.", title: {en: "Event 5 with long long long long long title!", hu: "5. Esemény"}, content: {en: "<p>Event description asd wqd qw qwd qd q</p>", hu: "<p>Esemény leírás</p>"} },
                { id: "4", picture: "example.jpg", date: "2020. 04. 21.", title: {en: "Event 4", hu: "4. Esemény"}, content: {en: "<p>Event description asd wqd q221313w qwd qd q long long long long long long long long long long long long long long long long long long long long long lon2 12 d kdsa kaskd asdk ff xxxx</p>", hu: "<p>Esemény leírás</p>"} },
                { id: "3", picture: "portrait_2.jpg", date: "2020. 04. 11.", title: {en: "Event 3", hu: "3. Esemény"}, content: {en: "<p>Event description asd wqd qw qasdadwd qd q</p>", hu: "<p>Esemény leírás</p>"} }
            ]
        }
    },

    mounted() {
        setTimeout(() => {
            this.load();
        }, 100);
    },

    data() {
        return {
            loaded: false,
            mainPicture: "",
            events: []
        }
    }
}
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-rows: auto auto min-content;
    grid-gap: 30px;
    margin: 25px;
}

.top-container {
    display: block;
}

.bottom-container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 15px;
}

.event {
    width: 322px;
    cursor: pointer;
    margin: 0px auto;
}

.event-title {
    font-weight: bold;
    font-size: 22px;
}

.event-date {
    color: #6b6b6b;
    font-style: italic;
}

.event-content {
    margin: 0px auto;
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.event-picture {
    margin: auto;
    border: 1px solid #efdfb8;
    border-radius: 10px;
    width: 320px;
    height: 240px;
    object-fit: cover;
}

.event-bottom {
    margin: 0px auto;
    width: 290px;
}

.main-picture {
    width: 100%;
}

.more-events-button {
    margin: auto;
    width: 200px;
}

@media only screen and (max-width: 1100px) {
    .bottom-container {
        margin: 0px auto;
        grid-template-columns: min-content min-content;
        grid-gap: 20px;
    }
}

@media only screen and (max-width: 800px) {
    .bottom-container {
        margin: 0px auto;
        grid-template-columns: min-content;
        grid-gap: 30px;
    }

    .main-picture {
        border-radius: 0px;
    }

    .layout {
        margin: 15px 0px;
    }
}
</style>
