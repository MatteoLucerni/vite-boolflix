<script>
import AppCard from './AppCard.vue'
export default {
    components: {
        AppCard
    },
    data() {
        return {
            actors: []
        }
    },
    methods: {
        getImagePath(imageName) {
            if (imageName === 'en' || imageName === 'it') {
                return new URL(`../assets/img/${imageName}.png`, import.meta.url).href
            } else {
                return
            }
        },
    },
    props: {
        films: Array,
        series: Array,
        isFirstSearch: Boolean
    }
}
</script>

<template>
    <div class="container pt-5 text-white">
        <div v-if="films.length || series.length">
            <a class="btn btn-secondary mb-5" href="#series">Vai alle Serie</a>
            <h1 v-if="films.length">Film:</h1>
            <h1 v-else>Nessaun film trovato</h1>
            <div class="row">
                <div v-for="film in films" :key="film.name" class="col-12 col-md-6 col-xl-4">
                    <AppCard :title="film.title" :original-title="film.original_title"
                        :srcFlag="getImagePath(film.original_language)" :language="film.original_language"
                        :vote="film.vote_average" :cover="film.poster_path" :actors="film.actors" :genres="film.genres" />
                </div>
            </div>
            <hr>
            <h1 v-if="series.length">Serie Tv:</h1>
            <h1 v-else>Nessauna serie trovata</h1>
            <div class="row">
                <div id="series" v-for="serie in series" :key="serie.name" class="col-12 col-md-6 col-xl-4">
                    <AppCard :title="serie.name" :original-title="serie.original_name"
                        :srcFlag="getImagePath(serie.original_language)" :language="serie.original_language"
                        :vote="serie.vote_average" :cover="serie.poster_path" :actors="serie.actors"
                        :genres="serie.genres" />
                </div>
            </div>
        </div>
        <div v-else-if="isFirstSearch === true">
            <h1 class="text-center text-white mt-5">
                Cerca un film o una serie...
            </h1>
        </div>
        <div v-else>
            <h1 class="text-center text-white mt-5">Nessun risultato, prova a cercare qualcos'altro</h1>
        </div>
    </div>
</template>