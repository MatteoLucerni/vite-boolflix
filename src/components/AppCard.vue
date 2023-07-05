<script>
export default {
    props: {
        film: Object
    }
}
</script>

<template>
    <div class="card">
        <h1>
            {{ film.title }}
        </h1>
        <h2>
            {{ film.originalTitle }}
        </h2>
        <h4>
            {{ film.language }}
        </h4>
        <h2>
            {{ film.vote }}
        </h2>
    </div>
</template>