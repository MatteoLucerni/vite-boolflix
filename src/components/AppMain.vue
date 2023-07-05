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
                return false
            }
        }
    },
    props: {
        films: Array
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="film in films" class="col-4">
                <AppCard :title="film.title" :original-title="film.original_title"
                    :src="getImagePath(film.original_language)" :language="film.original_language"
                    :vote="film.vote_average" />
            </div>
        </div>
    </div>
</template>