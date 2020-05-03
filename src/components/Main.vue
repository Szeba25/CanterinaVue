<template>
    <div class="layout">
        <div class="top-container">
            <img class="styled-picture main-picture" v-bind:src="mainPicture">
        </div>
        <div class="bottom-container">
            <div class="news" v-for="item in news" :key="item.index">
                <img class="styled-picture news-picture" src="event.jpg">
                <p class="news-txt">{{ item.text[$i18n.locale] }}</p>
            </div>
        </div>
        <input class="more-news-button" type="button" v-bind:value="$t('main.moreNews')">
    </div>
</template>

<script>
export default {
    name: "Main",

    data() {
        return {
            mainPicture: "main.jpg",
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
    grid-gap: 5px;
}

.title {
    color: #efdfb8;
    margin: 5px 0px 10px 0px;
}

.news {
    text-align: center;
    cursor: pointer;
}

.news:hover .news-txt {
    color: #efdfb8;
}

.news-picture {
    margin: auto;
    border: 2px solid #efdfb8;
    width: 298px;
    height: 168px;
}

.news-txt {
    margin: 0px 0px 10px 0px;
    color: #6b6b6b;
    transition: 0.3s;
}

.main-picture {
    width: 100%;
}

.more-news-button {
    margin: auto;
    width: 200px;
}

@media only screen and (max-width: 1000px) {
    .bottom-container {
        margin: 0px auto;
        grid-template-columns: min-content min-content;
        grid-gap: 20px;
    }
}

@media only screen and (max-width: 700px) {
    .bottom-container {
        margin: 0px auto;
        grid-template-columns: min-content;
        grid-gap: 10px;
    }

    .main-picture {
        border-radius: 0px;
    }

    .layout {
        margin: 15px 0px;
    }
}
</style>
