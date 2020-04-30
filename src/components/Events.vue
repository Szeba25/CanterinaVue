<template>
    <div class="layout">
        <div class="current-event">
            <img class="styled-picture current-event-picture" v-bind:src="current.picture">
            <h2 class="current-event-title">{{ current.title[$i18n.locale] }}</h2>
            <p class="current-event-date">{{ current.date }}</p>
            <div v-html="current.content[$i18n.locale]"></div>
        </div>
        <hr>
        <div class="older-events">
            <div class="older-events-item" v-for="event in older" :key="event.index">
                <img class="styled-picture older-events-picture" v-bind:src="event.picture">
                <h3 class="older-events-title">{{ event.title[$i18n.locale] }}</h3>
                <p class="older-events-date">{{ event.date }}</p>
                <div class="older-events-content" v-html="event.content[$i18n.locale]"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Events",

    data() {
        return {
            current: { picture: "event.jpg", date: "2020. 04. 30.", title: {en: "Event 1 title", hu: "1. Esemény"}, content: {en: "<p>Event description</p>", hu: "<p>Esemény leírás</p>"} },
            older: [
                { picture: "event.jpg", date: "2020. 04. 29.", title: {en: "Event 1 title", hu: "1. Esemény"}, content: {en: "<p>Event description</p>", hu: "<p>Esemény leírás</p>"} },
                { picture: "event.jpg", date: "2020. 04. 21.", title: {en: "Event 2 title", hu: "2. Esemény"}, content: {en: "<p>Event description</p>", hu: "<p>Esemény leírás</p>"} },
                { picture: "event.jpg", date: "2020. 04. 11.", title: {en: "Event 3 title", hu: "3. Esemény"}, content: {en: "<p>Event description long long long long long long long long long long asd long long long long long long asd long long long long long asd long long long long long long long long long long long long long long long long asdasd long asd long long asd long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long</p>", hu: "<p>Esemény leírás</p>"} },
                { picture: "event.jpg", date: "2020. 04. 9.", title: {en: "Event 4 title", hu: "4. Esemény"}, content: {en: "<p>Event description</p>", hu: "<p>Esemény leírás</p>"} },
                { picture: "event.jpg", date: "2020. 03. 4.", title: {en: "Event 5 title", hu: "5. Esemény"}, content: {en: "<p>Event description</p>", hu: "<p>Esemény leírás</p>"} }
            ]
        }
    }
}
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-rows: min-content min-content auto;
    grid-row-gap: 30px;
    margin: 10px 25px 25px 25px;
}

.current-event {
    
}

.current-event-title {
    margin: 15px 0px 0px 0px;
}

.current-event-date {
    margin: 0px 0px 15px 0px;
    color: #414141;
}

.current-event-picture {
    float: left;
    margin: 0px 25px 0px 0px;
    width: 498px;
    height: 278px;
}

.older-events {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 20px;
}

.older-events-item {
    border: 1px solid #a51c0d;
    border-radius: 10px;
    background: #fcf8d9;
    padding: 10px;
    margin: 0px 10px 0px 0px;
}

.older-events-title {
    margin: 0px;
}

.older-events-date {
    margin: 0px 0px 5px 0px;
    font-size: 14px;
    color: #414141;
}

.older-events-picture {
    float: left;
    margin: 0px 15px 0px 0px;
    width: 248px;
    height: 138px;
}

.older-events-content {
    text-align: justify;
    font-size: 14px;
}
</style>
