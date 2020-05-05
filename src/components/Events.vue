<template>
    <div class="layout">
        <div class="main-event">
            <div class="main-event-container" v-if="events.length > 0">
                <img class="main-event-picture styled-picture" v-bind:src="events[0].picture">
                <div>
                    <p class="main-event-title">{{ events[0].title[$i18n.locale] }}</p>
                    <p class="main-event-date">{{ events[0].date }}</p>
                    <p class="justified-text" v-html="events[0].content[$i18n.locale]"></p>
                </div>
            </div>
        </div>
        <hr class="main-separator">
        <div class="older-events">
            <div @click="navigateTo(event.id)" class="older-event" v-for="(event, index) in events.slice(1)" :key="index">
                <img class="older-event-picture" v-bind:src="event.picture">
                <hr class="older-event-separator">
                <div class="older-event-bottom">
                    <p class="older-event-date">{{ event.date }}</p>
                    <p class="older-event-title">{{ event.title[$i18n.locale] }}</p>
                    <p class="older-event-content" v-html="event.content[$i18n.locale]"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Events",

    methods: {
        addEvents() {
            this.events = [
                { id: "5", picture: "portrait_1.jpg", date: "2020. 04. 29.", title: {en: "Event 5", hu: "5. Esemény"}, content: {en: "<p>Etiam congue accumsan risus, ac posuere massa efficitur a. Sed eu tristique neque, vel elementum mi. Nunc magna libero, tristique sed elementum quis, lacinia id arcu. Phasellus dapibus ac est at posuere. Fusce sollicitudin eros non commodo rhoncus. In eget ligula aliquam, rhoncus enim at, lacinia odio. Aenean a tortor vitae tellus faucibus sollicitudin. In pellentesque pellentesque risus sit amet semper. Donec vel massa id elit consequat maximus ut at neque. Ut et fermentum enim. Cras eu orci pretium, interdum nunc sed, accumsan nulla. Nullam vel efficitur dolor. Vestibulum feugiat, enim sed volutpat faucibus, nulla libero tempor diam, sed sollicitudin nisi enim eget odio. Integer venenatis leo quis justo ullamcorper scelerisque elementum a tortor. Curabitur tellus dolor, venenatis id malesuada vitae, tincidunt sed metus.</p>", hu: "<p>Esemény leírás lkasdj asd kq klw qwlkd jqw qwdk lkklqdw j d kwqj dkqwj</p>"} },
                { id: "4", picture: "choir.jpg", date: "2020. 04. 21.", title: {en: "Event 4", hu: "4. Esemény"}, content: {en: "<p>Event description qd qdq2 1 w qw as </p>", hu: "<p>Esemény leírás</p>"} },
                { id: "3", picture: "example.jpg", date: "2020. 04. 11.", title: {en: "Event 3", hu: "3. Esemény"}, content: {en: "<p>Event description long long long long long long long long long long asd long long long long long long asd long long long long</p>", hu: "<p>Esemény leírás</p>"} },
                { id: "2", picture: "portrait_3.jpg", date: "2020. 04. 09.", title: {en: "Event 2", hu: "2. Esemény"}, content: {en: "<p>Event description asd a kajsd jqwd jkqw jkqwd jkqw jqwd jkqd jqwj qjwhd jqwhdjhwqdjwqhd qwjdhwq jd qwjd hjqwjh jq q qjdh jwqdjwqjhdjqwd qwjd jqd qdjwq jqjdhqjdh dhjjhdhjwq h</p>", hu: "<p>Esemény leírás</p>"} },
                { id: "1", picture: "choir.jpg", date: "2020. 03. 04.", title: {en: "Event 1", hu: "1. Esemény"}, content: {en: "<p>Event description asd as</p>", hu: "<p>Esemény leírás</p>"} }
            ]
        },

        navigateTo(id) {
            this.$router.push("events/" + id);
        }
    },

    mounted() {
        setTimeout(() => {
            this.addEvents();
        }, 100);
    },

    data() {
        return {
            events: []
        }
    }
}
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-rows: min-content min-content min-content;
    margin: 25px;
}

.main-separator {
    margin: 30px 0px;
}

.main-event {
    margin: 0px 50px;
}

.main-event-container {
    display: block;
}

.main-event-picture {
    float: right;
    margin: 0px 0px 10px 25px;
    max-width: 500px;
}

.main-event-title {
    font-weight: bold;
    font-size: 22px;
}

.main-event-date {
    color: #6b6b6b;
    font-style: italic;
}

.older-events {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 15px;
}

.older-event {
    width: 322px;
    cursor: pointer;
    margin: 0px auto;
}

.older-event-title {
    font-weight: bold;
    font-size: 22px;
}

.older-event-date {
    color: #6b6b6b;
    font-style: italic;
}

.older-event-content {
    margin: 0px auto;
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.older-event-separator {
    display: none;
}

.older-event-picture {
    margin: auto;
    border: 1px solid #efdfb8;
    border-radius: 10px;
    width: 320px;
    height: 240px;
    object-fit: cover;
}

.older-event-bottom {
    margin: 0px auto;
    width: 290px;
}

@media only screen and (max-width: 1100px) {
    .main-event-picture {
        max-width: 420px;
    }

    .older-events {
        margin: 0px auto;
        grid-template-columns: min-content min-content;
        grid-gap: 20px;
    }
}

@media only screen and (max-width: 900px) {
    .main-event {
        margin: 0px 10px;
    }
}

@media only screen and (max-width: 800px) {
    .main-event {
        margin: 0px 30px;
    }

    .main-event-container {
        display: grid;
        grid-template-rows: auto auto;
        grid-gap: 15px;
    }

    .main-event-picture {
        float: none;
        margin: 0px auto;
        max-width: 320px;
    }

    .older-events {
        margin: 0px auto;
        grid-template-columns: min-content;
        grid-gap: 0px;
    }

    .older-event-separator {
        display: block;
        margin: 20px 0px;
    }

    .older-event-picture {
        display: none;
    }
}

@media only screen and (max-width: 500px) {
    .layout {
        margin: 10px;
    }

    .main-event {
        margin: 0px;
    }
}
</style>
