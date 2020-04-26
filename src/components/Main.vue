<template>
    <div class="mainpage-layout">
        <div class="mainpage-left-container">
            <img class="mainpage-picture" src="@/assets/example.jpg">
            <br>
            <a target="_blank" href="https://www.facebook.com/canterinakamarakorus/">
                <img class="social-media-link" src="@/assets/fb.png">
            </a>
            <a target="_blank" href="https://www.youtube.com">
                <img class="social-media-link" src="@/assets/yt.png">
            </a>
        </div>
        <div>
            <div class="mainpage-news">
                <div class="mainpage-news-img"></div>
                <p class="mainpage-news-txt">{{ $t("tmp.news1") }}</p>
            </div>
            <div class="mainpage-news">
                <div class="mainpage-news-img"></div>
                <p class="mainpage-news-txt">{{ $t("tmp.news2") }}</p>
            </div>
            <div class="mainpage-news">
                <div class="mainpage-news-img"></div>
                <p class="mainpage-news-txt">{{ $t("tmp.news3") }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Main"
}
</script>

<style scoped>
.mainpage-layout {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-gap: 30px;
    min-height: 600px;
}

.mainpage-left-container {
    margin: 0px 0px 0px 25px;
}

.mainpage-title {
    color: #a51c0d;
    margin: 5px 0px 10px 0px;
}

.mainpage-news {
    text-align: center;
    cursor: pointer;
}

.mainpage-news:hover .mainpage-news-txt {
    color: #e72a15;
}

.mainpage-news-img {
    border-radius: 5px;
    background-color: #a51c0d;
    width: 320px;
    height: 120px;
}

.mainpage-news-txt {
    margin: 0px 0px 10px 0px;
    color: #83837c;
    transition: 0.3s;
}

.mainpage-picture {
    object-fit: cover;
    border: 1px solid #a51c0d;
    border-radius: 5px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
    width: 658px;
    height: 398px;
}

.picture-spacing {
    margin: 0px 5px 5px 25px;
}

.mainpage-bottom-div {
    margin: 0px 0px 0px 20px;
}
</style>
