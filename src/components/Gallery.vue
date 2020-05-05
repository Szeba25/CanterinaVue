<template>
    <div class="layout">
        <h2 v-if="loaded" class="gallery-title">{{ $t('gallery.choose') }}</h2>
        <div v-if="loaded" class="folder-container">
            <div v-for="(folder, index) in folders" :key="index">
                <img @click="selectFolder(folder.id)" class="styled-picture folder" :src="folder.picture">
                <figure><figcaption style="font-size: 20px">{{ folder.title[$i18n.locale] }}</figcaption></figure>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Gallery",

    methods: {
        selectFolder(id) {
            this.$router.push("/gallery/" + id);
        },

        getContent() {
            this.loaded = true;
            this.folders = [
                { id: "1", title: { en: "Album 1", hu: "1. Album" }, picture: "example.jpg" },
                { id: "2", title: { en: "Album 2", hu: "2. Album" }, picture: "example.jpg" },
                { id: "3", title: { en: "Album 3", hu: "3. Album" }, picture: "example.jpg" },
                { id: "4", title: { en: "Album 4", hu: "4. Album" }, picture: "example.jpg" }
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
            folders: []
        }
    }
}
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-rows: min-content min-content;
    margin: 25px;
}

.gallery-title {
    text-align: center;
}

.folder {
    cursor: pointer;
    border: 1px solid #efdfb8;
    width: 300px;
    box-shadow: 5px 5px 10px 3px #000000;
}

.folder-container {
    display: grid;
    margin: 10px 30px;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
}

@media only screen and (max-width: 1100px) {
    .folder-container {
        margin: 0px auto;
        grid-template-columns: min-content min-content;
        grid-gap: 20px;
    }
}

@media only screen and (max-width: 700px) {
    .folder-container {
        grid-template-columns: min-content;
    }
}
</style>
