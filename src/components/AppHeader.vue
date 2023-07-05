<script>
import { store } from '../data/store'
export default {
    data() {
        return {
            userSearch: store.userSearch
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
            <div class="d-flex">
                <input v-model.trim="userSearch" class="form-control" type="text" placeholder="Cerca film o serie tv">
                <button class="btn btn-primary ms-2">CERCA</button>
            </div>
        </nav>
    </div>
</template>