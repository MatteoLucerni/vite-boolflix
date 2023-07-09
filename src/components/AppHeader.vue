<script>
import { store } from '../data/store'
import AppSearchBar from './AppSearchBar.vue'
export default {
    props: {
        filmsGenres: Object,
        isFirstSearch: Boolean
    },
    data() {
        return {
            selectedGenre: '--'
        }
    },
    components: {
        AppSearchBar
    },
    methods: {
        onButtonClicked(string) {
            this.$emit('search-change', string)
        }
    },
    emits: ['search-change', 'changed-option']
}
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar">
                <div class="logo fs-1 fw-bold">
                    BoolFlix
                </div>
                <select v-model="selectedGenre" @change="$emit('changed-option', selectedGenre)" class="form-select w-25">
                    <option selected>--</option>
                    <option v-if="isFirstSearch === true">Cerca qualcosa per poter filtrare
                    </option>
                    <option v-for="genre in this.filmsGenres.genres">{{ genre.name }}</option>
                </select>
                <AppSearchBar @button-clicked="onButtonClicked" />
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: black;
}

.logo {
    color: #e50815;
}
</style>