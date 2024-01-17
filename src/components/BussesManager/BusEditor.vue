<template>
    <div>
        <label> number plate
            <input v-model="bus.number" type="text">
        </label>
        <label> year of manufacture
            <input v-model="bus.year" type="number">
        </label>
        <label> seats number
            <input v-model="bus.seats" type="number">
        </label>
        <button @click="onAction"> {{ actionButtonTitle }}</button>
        <button @click="onCancel">Cancel</button>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'BusEditor',

        data() {
            return {
                bus:{}
            }
        },

        computed: {
            ...mapGetters('busses', [ 'getBusById']),

            receivedBusId() {
                return this.$route.params.busId
            },

            actionButtonTitle() {
                return this.receivedBusId ? 'Save' : 'Add'
            }
        },
        created () {
            if(this.receivedBusId) 
            this.bus = {...this.getBusById(this.receivedBusId)}
            
        },

        methods: {
            ...mapActions('busses', [ 'addBus', 'updateBus' ]),

            onAction() {
                if(!this.receivedBusId) this.addBus(this.bus)
                else this.updateBus(this.bus)


                this.$router.push({
                    name: 'busses'
                })
            },
            onCancel() {
                this.$router.push({
                    name: 'busses'
                })

            },
        },

    }
</script>

<style lang="scss" scoped>

</style>