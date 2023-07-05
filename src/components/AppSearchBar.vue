<script>
export default {
    data() {
        return {
            searchText: ''
        }
    },
    emits: ['button-clicked']
}

</script>

<template>
    <div class="d-flex">
        <input v-model.trim="searchText" class="form-control" type="text" placeholder="Cerca film o serie tv">
        <button @click="$emit('button-clicked', searchText)" class="btn btn-primary ms-2">CERCA</button>
    </div>
</template>