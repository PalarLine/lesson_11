<template>
    <div>
        <h3>Нове призначення</h3>
        <div>
            <select v-model="distributor.driverId" >
                 Шофер
                    <option  v-for="driver in getDriversList"
                            :key="driver.id"
                            :value="driver.id"
                        >
                            {{ driver.name }} - {{ driver.experience }}
                    </option>
            </select>
        </div>  
        <div>
            <select v-model="distributor.busId" >
                 Автобус
                    <option  v-for="bus in getBussesList"
                            :key="bus.id"
                            :value="bus.id"
                        >
                            {{ bus.number }}
                    </option>
            </select>
        </div>  
        <button @click="onAdd">Add</button>          
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'DistributorAdjuster',

        data() {
            return {
                distributor: {},               
            }
        },

        computed: {
            ...mapGetters('drivers', [ 'getDriversList' ]),
            ...mapGetters('busses', [ 'getBussesList' ]),
        },
        methods: {
            ...mapActions('distributions', [ 'addDistribution' ]),

            onAdd() {
                this.addDistribution(this.distributor)
                this.distributor = {}

            }
        },

    }
</script>

<style lang="scss" scoped>

</style>