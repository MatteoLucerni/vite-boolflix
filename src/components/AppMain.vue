<script>
import AppCard from './AppCard.vue'
export default {
    components: {
        AppCard
    },
    methods: {
        getImagePath(imageName) {
            if (imageName === 'en' || imageName === 'it') {
                return new URL(`../assets/img/${imageName}.png`, import.meta.url).href
            } else {
                return ''
            }
        }
    },
    props: {
        films: Array,
        series: Array
    }
}
</script>

<template>
    <div class="container">
        <h1>Films</h1>
        <div class="row">
            <div v-for="film in films" class="col-4">
                <AppCard :title="film.title" :original-title="film.original_title"
                    :src="getImagePath(film.original_language)" :language="film.original_language"
                    :vote="film.vote_average" />
            </div>
        </div>
        <h1>Serie Tv:</h1>
        <div class="row">
            <div v-for="serie in series" class="col-4">
                <AppCard :title="serie.name" :original-title="serie.original_name"
                    :src="getImagePath(serie.original_language)" :language="serie.original_language"
                    :vote="serie.vote_average" />
            </div>
        </div>
    </div>
</template>