<template>
    <div class="layout">
        <div class="left-container">
            <img class="main-picture" src="@/assets/example.jpg">
            <br>
            <a target="_blank" href="https://www.facebook.com/canterinakamarakorus/">
                <img class="social-media-link" src="@/assets/fb.png">
            </a>
            <a target="_blank" href="https://www.youtube.com">
                <img class="social-media-link" src="@/assets/yt.png">
            </a>
        </div>
        <div>
            <div class="news">
                <div class="news-img"></div>
                <p class="news-txt">{{ $t("tmp.news1") }}</p>
            </div>
            <div class="news">
                <div class="news-img"></div>
                <p class="news-txt">{{ $t("tmp.news2") }}</p>
            </div>
            <div class="news">
                <div class="news-img"></div>
                <p class="news-txt">{{ $t("tmp.news3") }}</p>
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
.layout {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-gap: 30px;
    min-height: 600px;
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
    object-fit: cover;
    border: 1px solid #a51c0d;
    border-radius: 5px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
    width: 658px;
    height: 398px;
}
</style>
