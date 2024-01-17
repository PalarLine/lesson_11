<template>
    <div>
        <div v-for="item in getFullList"
            :key="item.id"
            class="container"
            >
                {{ item.driverName }} - {{ item.busNumber }}  
                <button @click="deleteDistribution(item.id)">Delete</button>        
        </div>              
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'DistributionList',

        computed: {
            ...mapGetters('distributions', [ 'getFullList' ]),
        }, 
        methods: {
            ...mapActions('distributions', [ 'deleteDistribution']),
            
        },      
    }
</script>

<style lang="scss" scoped>
   .container {
    margin: 10px auto;
    width: 450px;
    display: flex;
    justify-content: space-between;
}
</style>