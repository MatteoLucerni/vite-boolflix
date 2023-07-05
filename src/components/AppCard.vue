<script>
export default {
    props: {
        title: String,
        originalTitle: String,
        language: String,
        vote: Number
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
        <h4>
            {{ language }}
        </h4>
        <h2>
            {{ vote }}
        </h2>
    </div>
</template>

<style scoped>
.card {
    min-height: 500px;
}
</style>