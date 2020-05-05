<template>
    <div class="layout">
        <gallery 
            :images="images" 
            :index="index" 
            :options="{ youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true }"
            @close="index=null">
        </gallery>
        <div @click="back()" class="text-button"> {{ $t("gallery.back") }} </div>
        <hr>
        <h2 v-if="loaded" class="centered-text">{{ title[$i18n.locale] }}</h2>
        <div v-if="loaded" class="images">
            <div
                class="image styled-picture"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index=imageIndex"
                :style="{ backgroundImage: 'url(' + image.poster + ')', width: '300px', height: '200px' }"
            >
            </div>
        </div>
    </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
    name: "GalleryFolder",

    components: {
        "gallery": VueGallery
    },

    methods: {
        back() {
            this.$router.push("/gallery");
        },

        getContent() {
            this.loaded = true;
            this.title = { en: "Album test " + this.$route.params.id, hu: "Teszt album " + this.$route.params.id};
            this.images = [
                {
                    /*title: "Title test",*/
                    href: "https://www.youtube.com/watch?v=jaAwSf7bMlw",
                    type: "text/html",
                    youtube: "jaAwSf7bMlw",
                    poster: "https://img.youtube.com/vi/jaAwSf7bMlw/0.jpg"
                },
                {
                    href: "choir.jpg",
                    type: "image/jpg",
                    youtube: undefined,
                    poster: "choir.jpg"
                },
                {
                    href: "example.jpg",
                    type: "image/jpg",
                    youtube: undefined,
                    poster: "example.jpg"
                },
                {
                    href: "portrait_2.jpg",
                    type: "image/jpg",
                    youtube: undefined,
                    poster: "portrait_2.jpg"
                },
                {
                    href: "example.jpg",
                    type: "image/jpg",
                    youtube: undefined,
                    poster: "example.jpg"
                },
                {
                    href: "choir.jpg",
                    type: "image/jpg",
                    youtube: undefined,
                    poster: "choir.jpg"
                },
                {
                    href: "portrait_1.jpg",
                    type: "image/jpg",
                    youtube: undefined,
                    poster: "portrait_1.jpg"
                },
                {
                    href: "portrait_3.jpg",
                    type: "image/jpg",
                    youtube: undefined,
                    poster: "portrait_3.jpg"
                },
                {
                    href: "example.jpg",
                    type: "image/jpg",
                    youtube: undefined,
                    poster: "example.jpg"
                }
            ];
        }
    },

    mounted() {
        setTimeout(() => {
            this.getContent();
        }, 100);
    },

    data() {
        return {
            loaded: false,
            title: { en: "", hu: ""},
            images: [],
            index: null
        }
    }
}
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-rows: min-content;
    margin: 25px;
}

.images {
    display: grid;
    margin: 10px 50px;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
}

.image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    margin: auto;
}

@media only screen and (max-width: 1100px) {
    .images {
        margin: 0px auto;
        grid-template-columns: min-content min-content;
        grid-gap: 20px;
    }
}

@media only screen and (max-width: 700px) {
    .images {
        grid-template-columns: min-content;
    }
}
</style>
