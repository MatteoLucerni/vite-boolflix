<script>
export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        src: String
    }
}
</script>

<template>
    <div class="card p-4 mb-4">
        <h1>
            {{ title }}
        </h1>
        <h2>
            {{ originalTitle }}
        </h2>
        <img v-if="src" :src="src" alt="flag">
        <h2 v-else>
            Lingua: {{ language }}
        </h2>
        <h2>
            {{ vote }}
        </h2>
    </div>
</template>

<style scoped>
.card {
    min-height: 500px;
}

img {
    height: 50px;
    width: 80px;
}
</style>