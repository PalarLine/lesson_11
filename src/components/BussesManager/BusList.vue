<template>
    <div>
        <bus-item  v-for="bus in getBussesList"
                    :key="bus.id"
                    :bus="bus"
                />
    </div>
    <router-link :to=" { name: 'bus' } ">Add new bus</router-link>
</template>

<script>
import { mapGetters } from 'vuex'
import BusItem from './BusItem.vue'
mapGetters
    export default {
        name: 'BusList',

        components: { BusItem, },

        computed: {
            ...mapGetters('busses', [ 'getBussesList'])
        },
        
    }
</script>

<style lang="scss" scoped>

</style>