<script>
import { store } from '../data/store';

export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        srcFlag: String,
        cover: String,
        id: Number,
        actors: String,
        genres: String
    },
    data() {
        return {
            api_key: store.api_key,
            baseUri: store.baseUri
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
        <h2>
            {{ title }}
        </h2>
        <hr class="m-0">
        <h3 v-if="title !== originalTitle">
            {{ originalTitle }}
        </h3>
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
        <h4 v-if="actors">
            Attori: {{ actors }}
        </h4>
        <h4 v-if="genres">
            Generi: {{ genres }}
        </h4>
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
        transition: opacity 0.7s;
    }

    &:hover {
        background-color: black;
    }

    &:hover * {
        display: inline-block;
    }

    &:hover img.cover {
        opacity: 0;
    }
}

.card * {
    z-index: 2;
    display: none;
    margin-bottom: 15px;
}

img.flag {
    height: 50px;
    width: 80px;
}
</style>