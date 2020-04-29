<template>
    <div class="layout">
        <div>
            <img class="styled-picture choir-picture" v-bind:src="picture">
            <div class="main-content" v-html="content[$i18n.locale]"></div>
        </div>
        <div class="audio-container">
            <figure class="audio-item" v-for="item in audio" :key="item.index">
                <figcaption class="audio-caption">{{item[$i18n.locale].title}}:</figcaption>
                <audio controls>
                    <source v-bind:src="item.src">
                </audio>
            </figure>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutChoir",

    data() {
        return {
            picture: "choir.jpg",
            content: { en: "<h2>Test title</h2><p>Test content random text random text random text.</p><p>Another paragraph <i>in italic</i></p>", hu: "<h2>Teszt cím</h2><p>Tartalom, ez is tartalom, meg ez is.</p><p>Egy másik paragrafus, <i>dőlt betűs</i></p>" },
            audio: [
                { en: { title: "Music 1" }, hu: { title: "1. Zene" }, src:"test.mp3" },
                { en: { title: "Music 2" }, hu: { title: "2. Zene" }, src:"test.mp3" },
                { en: { title: "Music 3" }, hu: { title: "3. Zene" }, src:"test.mp3" }
            ]
        }
    }
}
</script>

<style scoped>
.main-content {
    text-align: justify;
}

.layout {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 20px;
    margin: 10px 25px 25px 25px;
}

.choir-picture {
    float: left;
    margin: 0px 25px 10px 0px;
    width: 538px;
    height: 318px;
}

.audio-container {
    display: block;
    margin: auto;
}

.audio-item {
    margin: 5px;
    float: left;
}

.audio-caption {
    margin: 0px 0px 0px 15px;
}
</style>
