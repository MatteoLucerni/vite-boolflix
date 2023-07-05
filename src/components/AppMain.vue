<script>
import AppCard from './AppCard.vue'
export default {
    components: {
        AppCard
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
                <AppCard :title="film.title" :original-title="film.original_title" :language="film.original_language"
                    :vote="film.vote_average" />
            </div>
        </div>
    </div>
</template>