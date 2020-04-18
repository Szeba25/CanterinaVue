<template>
    <div class="mainpage-layout">
        <div>
            <img class="mainpage-picture picture-spacing" src="@/assets/example.png">
            <br>
            <a target="_blank" href="https://www.facebook.com/canterina.zeg">
                <img class="social-media-link" src="@/assets/fb.png">
            </a>
            <a target="_blank" href="https://www.youtube.com">
                <img class="social-media-link" src="@/assets/yt.png">
            </a>
        </div>
        <div>
            <div class="mainpage-news">
                <img class="mainpage-news-img" src="@/assets/actual.png">
                <p class="mainpage-news-txt">{{ $t("tmp.news1") }}</p>
            </div>
            <div class="mainpage-news">
                <img class="mainpage-news-img" src="@/assets/actual.png">
                <p class="mainpage-news-txt">{{ $t("tmp.news2") }}</p>
            </div>
            <div class="mainpage-news">
                <img class="mainpage-news-img" src="@/assets/actual.png">
                <p class="mainpage-news-txt">{{ $t("tmp.news3") }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld'
}
</script>

<style scoped>
.mainpage-layout {
    display: grid;
    grid-template-columns: min-content min-content;
    grid-gap: 15px;
    min-height: 500px;
}

.mainpage-title {
    color: #a33327;
    margin: 5px 0px 10px 0px;
}

.mainpage-news {
    text-align: center;
    cursor: pointer;
}

.mainpage-news:hover .mainpage-news-txt {
    color: #c7493a;
}

.mainpage-news-img {
    border-radius: 5px;
}

.mainpage-news-txt {
    margin: 0px 0px 10px 0px;
    color: #646f62;
    transition: 0.3s;
}

.mainpage-picture {
    object-fit: cover;
    border: 1px solid #a33327;
    border-radius: 5px;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
    width: 600px;
    height: 400px;
}

.picture-spacing {
    margin: 0px 5px 5px 10px;
}
</style>
