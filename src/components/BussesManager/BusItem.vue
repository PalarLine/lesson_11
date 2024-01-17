<template>
    <div class="container">        
        <div class="driver-item-container"> {{ bus.number }}</div>
        <div class="driver-item-container"> {{ bus.seats }}</div>
        <div class="driver-item-container"> {{ bus.year }}</div> 
        <button @click="OnEdit">Edit</button>
        <button @click="removeBus(bus.id)">Delete</button> 

    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        name: 'BusItem',

        props: {
            bus: {
                type: Object,
                required: true,
            }
            
        },
        methods: {
            ...mapActions('busses', [ 'removeBus' ]),

            OnEdit() {
                this.$router.push({
                    name: 'bus',
                    params: {
                        busId: this.bus.id,
                    }
                })
            },            
        },
        
    }
    
</script>

<style lang="scss" scoped>
.container {
    width: 750px;
    display: flex;
    justify-content: space-between;
}
.driver-item-container {
    width: 150px
}

</style>