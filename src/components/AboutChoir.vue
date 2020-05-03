<template>
    <div class="layout">
        <div>
            <img class="styled-picture choir-picture" v-bind:src="picture">
            <div class="main-content" v-html="content[$i18n.locale]"></div>
        </div>
        <div class="audio-container">
            <figure class="audio-item" v-for="item in audio" :key="item.index">
                <figcaption class="audio-caption">{{item.title[$i18n.locale]}}:</figcaption>
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
            content: { 
                en: "" +
                "<h2>Test title in english</h2>" +
                "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec posuere enim. Nunc eu mauris vel sem efficitur auctor a vel turpis. Integer eget vehicula diam. Nulla eleifend velit id ipsum porta, pretium gravida tellus rhoncus. Etiam imperdiet ex orci, ut pharetra nisl feugiat quis.</p>" +
                "<p>Nam eu justo sit amet felis pulvinar dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec sollicitudin augue, sit amet tincidunt elit. Nunc congue sagittis dui, sit amet mollis libero dictum quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras scelerisque ligula velit. Mauris vulputate magna id ultricies laoreet. Phasellus non lacus leo. Sed eu faucibus arcu, sed condimentum sem. Curabitur sed molestie sapien. Proin eleifend augue et dolor tempus semper eget quis orci. Proin eleifend augue et dolor tempus semper eget quis orci.</p>" +
                "<p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec posuere enim. Nunc eu mauris vel sem efficitur auctor a vel turpis. Integer eget vehicula diam. Nulla eleifend velit id ipsum porta, pretium gravida tellus rhoncus. Etiam imperdiet ex orci, ut pharetra nisl feugiat quis.</i></p>" + 
                "<p>Nam eu justo sit amet felis pulvinar dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec sollicitudin augue, sit amet tincidunt elit. Nunc congue sagittis dui, sit amet mollis libero dictum quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras scelerisque ligula velit. Mauris vulputate magna id ultricies laoreet. Phasellus non lacus leo. Sed eu faucibus arcu, sed condimentum sem. Curabitur sed molestie sapien. Proin eleifend augue et dolor tempus semper eget quis orci.</p>", 
                hu: "" +
                "<h2>Teszt cím magyarul</h2>" +
                "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec posuere enim. Nunc eu mauris vel sem efficitur auctor a vel turpis. Integer eget vehicula diam. Nulla eleifend velit id ipsum porta, pretium gravida tellus rhoncus. Etiam imperdiet ex orci, ut pharetra nisl feugiat quis.</p>" +
                "<p>Nam eu justo sit amet felis pulvinar dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec sollicitudin augue, sit amet tincidunt elit. Nunc congue sagittis dui, sit amet mollis libero dictum quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras scelerisque ligula velit. Mauris vulputate magna id ultricies laoreet. Phasellus non lacus leo. Sed eu faucibus arcu, sed condimentum sem. Curabitur sed molestie sapien. Proin eleifend augue et dolor tempus semper eget quis orci. Proin eleifend augue et dolor tempus semper eget quis orci.</p>" +
                "<p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec posuere enim. Nunc eu mauris vel sem efficitur auctor a vel turpis. Integer eget vehicula diam. Nulla eleifend velit id ipsum porta, pretium gravida tellus rhoncus. Etiam imperdiet ex orci, ut pharetra nisl feugiat quis.</i></p>" + 
                "<p>Nam eu justo sit amet felis pulvinar dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean nec sollicitudin augue, sit amet tincidunt elit. Nunc congue sagittis dui, sit amet mollis libero dictum quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras scelerisque ligula velit. Mauris vulputate magna id ultricies laoreet. Phasellus non lacus leo. Sed eu faucibus arcu, sed condimentum sem. Curabitur sed molestie sapien. Proin eleifend augue et dolor tempus semper eget quis orci.</p>", 
            },
            audio: [
                { title: { en: "Music 1", hu: "1. Zene" }, src:"test.mp3" },
                { title: { en: "Music 2", hu: "2. Zene" }, src:"test.mp3" },
                { title: { en: "Music 3", hu: "3. Zene" }, src:"test.mp3" }
            ]
        }
    }
}
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-rows: min-content min-content;
    grid-gap: 20px;
    margin: 10px 25px 25px 25px;
}

@media only screen and (max-width: 700px) {
    .layout {
        margin: 10px;
    }
}

.main-content {
    text-align: justify;
}

.choir-picture {
    float: right;
    margin: 15px 0px 10px 25px;
    width: 500px;
    height: 375px;
}

@media only screen and (max-width: 800px) {
    .choir-picture {
        width: 400px;
        height: 300px;
    }
}

@media only screen and (max-width: 700px) {
    .choir-picture {
        float: none;
        margin: 10px 0px;
        width: 100%;
        height: auto;
        max-height: 300px;
    }
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
