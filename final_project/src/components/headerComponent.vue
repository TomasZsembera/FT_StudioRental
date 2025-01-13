<script>
import { RouterLink } from 'vue-router';
import data from '../../data.json';

export default {
    data() {
        return {
            services: data.services,
        };
    },
};
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark px-5 m-0">
            <div class="container-fluid">
                <RouterLink class="navbar-brand text-white" to="/">BrandName</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link active text-white" aria-current="page" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item" v-for="service in services" :key="service.id">
                            <RouterLink class="nav-link text-white" :to="`/service/${service.slug}`">{{ service.name }}</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.nav-item:hover {
    background-color: #555;
    transition: 3ms !important;
}

.nav-item:hover .nav-link {
    color: #40e0d0 !important;
}
</style>