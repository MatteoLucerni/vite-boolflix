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
    <div class="card">
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