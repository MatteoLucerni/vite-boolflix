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
    <div class="card d-flex flex-column justify-content-between p-4 mb-4">
        <h1>
            {{ title }}
        </h1>
        <h2>
            {{ originalTitle }}
        </h2>
        <img class="flag" v-if="srcFlag" :src="srcFlag" alt="flag">
        <h2 v-else>
            Lingua: {{ language }}
        </h2>
        <h2>
            <font-awesome-icon v-for="n in starsNumber" :key="n" :icon="['fas', 'star']" />
            <font-awesome-icon v-for="n in 5 - starsNumber" :key="n" :icon="['far', 'star']" />
        </h2>
        <img class="cover" :src="`https://image.tmdb.org/t/p/w342/${cover}`" alt="cover">

    </div>
</template>

<style  lang="scss" scoped>
.card {
    height: 531px;
    position: relative;
    color: white;
    cursor: pointer;

    img.cover {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 1;
        display: block;
    }

    &:hover {
        background-color: black;
    }

    &:hover * {
        display: inline-block;
    }

    &:hover img.cover {
        display: none;
    }
}

.card * {
    z-index: 2;
    display: none;
}

img.flag {
    height: 50px;
    width: 80px;
}
</style>