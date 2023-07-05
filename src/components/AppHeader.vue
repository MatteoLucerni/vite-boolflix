<script>
import { store } from '../data/store'
import AppSearchBar from './AppSearchBar.vue'
export default {
    components: {
        AppSearchBar
    },
    data() {
        return {

        }
    },
    methods: {
        saveUserSearch(string) {
            store.userSearch = string
        }
    }
}
</script>

<template>
    <div class="container">
        <nav class="navbar border-bottom">
            <div class="logo fs-1 fw-bold text-danger">
                Netflix
            </div>
            <AppSearchBar @button-clicked="saveUserSearch" />
        </nav>
    </div>
</template>