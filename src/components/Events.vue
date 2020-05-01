<template>
    <div>
        
    </div>
</template>

<script>
export default {
    name: "Events",

    data() {
        return {
            events: [
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

</style>
