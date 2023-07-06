<script>
import axios from 'axios';
import { store } from '../data/store';

export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        srcFlag: String,
        cover: String,
        id: Number
    },
    data() {
        return {
            api_key: store.api_key,
            baseUri: store.baseUri
        }
    },
    methods: {
        fetchActors(id) {
            axios.get(`${this.baseUri}/movie/${id}/credits?api_key=${this.api_key}`).then(
                res => {
                    const actors = []
                    for (let i = 0; i > 5; i++) {
                        console.log(res.data.cast[i].name)
                        actors.push(res.data.cast[i].name)
                    }
                    console.log(actors)
                }
            )
        }
    },
    computed: {
        starsNumber() {
            return Math.ceil(this.vote / 2)
        }
    }
}
</script>

<template>
    <div class="card d-flex flex-column justify-content-between p-4 mb-4">
        <h1>
            {{ title }}
        </h1>
        <h2 v-if="title !== originalTitle">
            {{ originalTitle }}
        </h2>
        <img class="flag" v-if="srcFlag" :src="srcFlag" alt="flag">
        <h2 v-else>
            Lingua: {{ language }}
        </h2>
        <h2>
            <font-awesome-icon v-for="n in starsNumber" :key="n" :icon="['fas', 'star']" />
            <font-awesome-icon v-for="n in 5 - starsNumber" :key="n" :icon="['far', 'star']" />
        </h2>
        <img v-if="cover" class="cover" :src="`https://image.tmdb.org/t/p/w342/${cover}`" :alt="title">
        <div v-else class="text-danger d-block fw-bold">COPERTINA NON DISPONIBILE</div>
        <button @click="fetchActors(id)" class="btn btn-primary">Scopri gli attori</button>

    </div>
</template>

<style  lang="scss" scoped>
.card {
    height: 531px;
    width: 350px;
    position: relative;
    color: white;
    cursor: pointer;
    overflow-y: auto;

    img.cover {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: block;
    }

    &:hover {
        background-color: black;
    }

    &:hover * {
        display: inline-block;
    }

    &:hover img.cover {
        display: none;
    }
}

.card * {
    z-index: 2;
    display: none;
}

img.flag {
    height: 50px;
    width: 80px;
}
</style>