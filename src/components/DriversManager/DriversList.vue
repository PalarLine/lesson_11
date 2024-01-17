<template>
    <div >        
        <drivers-item v-for="driver in getFilteredDriversList" :key="driver.id" :driver="driver" />                  
    </div>
    <router-link :to="{ name: 'driver' }"> Add a new driver </router-link>
</template>

<script>
import DriversItem from './DriversItem.vue'
import { mapGetters } from 'vuex';

    
    export default {
        name: 'DriversList',

        components: {
            DriversItem,
        },

        computed: {
            ...mapGetters('filters', [ 'getFilteredDriversList'])
        },
    }
</script>

<style lang="scss" scoped>

</style>