<template>
    <button class="btn btn-primary" @click="goBack">Go Back</button>
</template>

<script>
export default {
    name: 'GoBackComponent',
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

