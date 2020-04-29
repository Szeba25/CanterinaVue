<template>
    <div class="layout">
        <div>
            <img class="styled-picture choir-picture" src="@/assets/choir.jpg">
            <div class="main-content" v-html="content"></div>
        </div>
        <div class="audio-container">
            <figure class="audio-item" v-for="item in audio" :key="item.index">
                <figcaption class="audio-caption">{{item[$i18n.locale].title}}:</figcaption>
                <audio controls>
                    <source v-bind:src="item.src">
                </audio>
            </figure>
        </div>
        <vue-editor v-model="content" :editor-toolbar="customToolbar"></vue-editor>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
    name: "AboutChoir",

    components: {
        VueEditor
    },

    data() {
        return {
            content: "",
            
            customToolbar: [
                [{ 'header': [false, 1, 2, 3, 4, 5, 6] }],
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
            ],

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
    grid-template-rows: min-content min-content min-content;
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
