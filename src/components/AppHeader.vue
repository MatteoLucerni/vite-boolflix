<script>
import { store } from '../data/store'
import AppSearchBar from './AppSearchBar.vue'
export default {
    props: {
        filmsGenres: Array
    },
    data() {
        return {

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
    emits: ['search-change']
}
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar">
                <div class="logo fs-1 fw-bold">
                    BoolFlix
                </div>
                <select class="w-25 form-select">
                    <option selected>--</option>
                    <option v-for="genre in filmsGenres">{{ genre.name }}</option>
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