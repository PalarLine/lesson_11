<template>
    <div>
        <h1>Фільтри</h1>
        <drivers-filter />
        <h1> Наші водії:</h1>
        <drivers-list />
    </div>
</template>

<script>
import DriversList from './DriversList.vue'
import DriversFilter from './DriversFilter.vue'

    export default {
        name: 'DriversManager',
        components: {
            DriversList,
            DriversFilter
        },

    }
</script>

<style lang="scss" scoped>

</style>