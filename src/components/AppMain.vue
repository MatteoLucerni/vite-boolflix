<script>
import { store } from '../data/store'
import AppCard from './AppCard.vue'
export default {
    data() {
        return {
            films: store.films,
        }
    },
    components: {
        AppCard
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div v-for="film in films" class="col-3">
                <AppCard :title="film.title" :original-title="film.originalTitle" :language="film.language"
                    :vote="film.vote" />
            </div>
        </div>
    </div>
</template>