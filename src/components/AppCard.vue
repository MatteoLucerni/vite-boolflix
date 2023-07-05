<script>
export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number,
        srcFlag: String,
        cover: String
    },
    computed: {
        starsNumber() {
            return Math.ceil(this.vote / 2)
        }
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
        <img v-if="srcFlag" :src="srcFlag" alt="flag">
        <h2 v-else>
            Lingua: {{ language }}
        </h2>
        <h2>
            <font-awesome-icon v-for="n in starsNumber" :icon="['fas', 'star']" />
            <font-awesome-icon v-for="n in 5 - starsNumber" :icon="['far', 'star']" />
        </h2>
        <img :src="`https://image.tmdb.org/t/p/w342/${cover}`" alt="cover">
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