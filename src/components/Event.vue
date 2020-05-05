<template>
    <div class="layout">
        <div @click="back()" class="text-button"> {{ $t("events.back") }} </div>
        <hr>
        <div v-if="loaded" class="event-container">
            <img class="event-picture styled-picture" v-bind:src="picture">
            <div>
                <p class="event-title">{{ title[$i18n.locale] }}</p>
                <p class="event-date">{{ date }}</p>
                <p class="justified-text" v-html="content[$i18n.locale]"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Event",

    methods: {
        addEvent(id) {
            this.loaded = true;
            this.id = id;
            this.picture = "portrait_1.jpg";
            this.date = "2020. 04. 29.";
            this.title = {
                en: "Event 5 " + id, 
                hu: "5. Esemény " + id
            };
            this.content = { 
                en: "<p>Etiam congue accumsan risus, ac posuere massa efficitur a. Sed eu tristique neque, vel elementum mi. Nunc magna libero, tristique sed elementum quis, lacinia id arcu. Phasellus dapibus ac est at posuere. Fusce sollicitudin eros non commodo rhoncus. In eget ligula aliquam, rhoncus enim at, lacinia odio. Aenean a tortor vitae tellus faucibus sollicitudin. In pellentesque pellentesque risus sit amet semper. Donec vel massa id elit consequat maximus ut at neque. Ut et fermentum enim. Cras eu orci pretium, interdum nunc sed, accumsan nulla. Nullam vel efficitur dolor. Vestibulum feugiat, enim sed volutpat faucibus, nulla libero tempor diam, sed sollicitudin nisi enim eget odio. Integer venenatis leo quis justo ullamcorper scelerisque elementum a tortor. Curabitur tellus dolor, venenatis id malesuada vitae, tincidunt sed metus.</p>",
                hu: "<p>Esemény leírás lkasdj asd kq klw qwlkd jqw qwdk lkklqdw j d kwqj dkqwj</p>"
            };
        },

        back() {
            this.$router.push("/events");
        }
    },

    watch: {
        $route(to) {
            this.loaded = false;
            setTimeout(() => {
                this.addEvent(to.params.id);
            }, 100);
        }
    },

    mounted() {
        setTimeout(() => {
            this.addEvent(this.$route.params.id);
        }, 100);
    },

    data() {
        return {
            loaded: false,
            
        }
    }
}
</script>

<style scoped>
.layout {
    margin: 25px;
}

.event-container {
    display: block;
}

.event-picture {
    float: right;
    margin: 0px 0px 10px 25px;
    max-width: 500px;
}

.event-title {
    font-weight: bold;
    font-size: 22px;
}

.event-date {
    color: #6b6b6b;
    font-style: italic;
}

@media only screen and (max-width: 800px) {
    .event {
        margin: 0px 30px;
    }

    .event-container {
        display: grid;
        grid-template-rows: auto auto;
        grid-gap: 15px;
    }

    .event-picture {
        float: none;
        margin: 0px auto;
        max-width: 320px;
    }
}

@media only screen and (max-width: 500px) {
    .layout {
        margin: 10px;
    }

    .event {
        margin: 0px;
    }
}
</style>
