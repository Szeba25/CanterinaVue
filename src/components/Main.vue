<template>
    <div class="layout">
        <div class="left-container">
            <img class="styled-picture main-picture" v-bind:src="mainPicture">
            <br>
            <a target="_blank" href="https://www.facebook.com/canterinakamarakorus/">
                <img class="social-media-link" src="@/assets/fb.png">
            </a>
            <a target="_blank" href="https://www.youtube.com">
                <img class="social-media-link" src="@/assets/yt.png">
            </a>
        </div>
        <div>
            <div class="news" v-for="item in news" :key="item.index">
                <div class="news-img"></div>
                <p class="news-txt">{{ item.text[$i18n.locale] }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main",

    data() {
        return {
            mainPicture: "example.jpg",
            news: [
                { text: { en: "News item 1", hu: "Új hír 1" }, src: "", link: "" },
                { text: { en: "News item 2", hu: "Új hír 2" }, src: "", link: "" },
                { text: { en: "News item 3", hu: "Új hír 3" }, src: "", link: "" },
            ]
        }
    }
}
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-gap: 30px;
    margin: 10px 0px 25px 0px;
}

.left-container {
    margin: 0px 0px 0px 25px;
}

.title {
    color: #a51c0d;
    margin: 5px 0px 10px 0px;
}

.news {
    text-align: center;
    cursor: pointer;
}

.news:hover .news-txt {
    color: #e72a15;
}

.news-img {
    border-radius: 5px;
    background-color: #a51c0d;
    width: 320px;
    height: 120px;
}

.news-txt {
    margin: 0px 0px 10px 0px;
    color: #83837c;
    transition: 0.3s;
}

.main-picture {
    width: 658px;
    height: 398px;
}
</style>
