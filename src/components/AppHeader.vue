<script>

import AppSearchBar from './AppSearchBar.vue'
export default {
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