<template>
    <div class="layout">
        <div v-for="(album, index) in albums" :key="index">
            <div class="album">
                <div>
                    <h2>{{ album.title }}</h2>
                    <ul class="song-list">
                        <li v-for="(song, songIndex) in album.songs" :key="songIndex">
                            <div v-if="song.file !== false">
                                <a target="_blank" v-bind:href="song.file">{{song.title}}</a>
                            </div>
                            <div v-else>
                                {{ song.title }}
                            </div>
                        </li>
                    </ul>
                </div>
                <img class="cover styled-picture" v-bind:src="album.cover">
            </div>
            <div class="album-compact">
                <img class="cover styled-picture" v-bind:src="album.cover">
                <div>
                    <h2>{{ album.title }}</h2>
                    <div v-for="(song, songIndex) in album.songs" :key="songIndex">
                        <div v-if="song.file !== false">
                            <p>
                                <a target="_blank" v-bind:href="song.file">{{song.title}}</a>
                            </p>
                        </div>
                        <p v-else>
                            {{ song.title }}
                        </p>
                    </div>
                </div>
            </div>
            <hr class="album-separator">
        </div>
    </div>
</template>

<script>
export default {
    name: "Albums",

    methods: {
        load() {
            this.loaded = true;
            this.albums = [
                {
                    title: "Test",
                    cover: "example.jpg",
                    songs: [
                        {
                            title: "Song 1",
                            file: false
                        },
                        {
                            title: "Song 2",
                            file: false
                        },
                        {
                            title: "Song 3",
                            file: "test.mp3"
                        },
                        {
                            title: "Song 4",
                            file: false
                        },
                        {
                            title: "Song 5",
                            file: false
                        },
                        {
                            title: "Song 6",
                            file: false
                        },
                        {
                            title: "Song 7",
                            file: false
                        },
                        {
                            title: "Song 8",
                            file: false
                        }
                    ]
                },
                {
                    title: "Test 2",
                    cover: "choir.jpg",
                    songs: [
                        {
                            title: "Song 1",
                            file: false
                        },
                        {
                            title: "Song 2",
                            file: false
                        },
                        {
                            title: "Song 3",
                            file: false
                        },
                        {
                            title: "Song 4",
                            file: false
                        },
                        {
                            title: "Song 5",
                            file: false
                        },
                        {
                            title: "Song 6",
                            file: false
                        },
                        {
                            title: "Song 7",
                            file: false
                        },
                        {
                            title: "Song 8",
                            file: false
                        },
                        {
                            title: "Song 9",
                            file: false
                        },
                        {
                            title: "Song 10",
                            file: false
                        },
                        {
                            title: "Song 11",
                            file: false
                        }
                    ]
                }
            ];
        }
    },

    mounted() {
        setTimeout(() => {
            this.load();
        }, 100);
    },

    data() {
        return {
            loaded: false,
            albums: []
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

.album {
    display: grid;
    grid-template-columns: auto min-content;
}

.album-compact {
    display: none;
}

.song-list {
    columns: 2;
}

.cover {
    width: 500px;
}

.album-separator {
    margin: 25px 0px;
}

@media only screen and (max-width: 1000px) {
    .song-list {
        columns: 1;
    }
}

@media only screen and (max-width: 800px) {
    .album {
        display: none;
    }

    .cover {
        width: 400px;
    }

    .album-compact {
        display: block;
        text-align: center;
    }
}

@media only screen and (max-width: 500px) {
    .layout {
        margin: 5px;
    }

    .cover {
        width: 320px;
    }
}

</style>
