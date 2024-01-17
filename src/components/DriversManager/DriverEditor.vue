<template>
    <div>        
        <label for=""> Name
            <input v-model="driver.name" type="text">
        </label>
        <label for=""> experience
            <input v-model="driver.experience" type="number">
        </label>
        <button @click="onAction">
            {{ actionButtonTitle }}
        </button>
        <button @click="onCancel">Cancel</button>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'DriverEditor',

        data() {
            return {
                driver: {}
            }
        },        

        computed: {
        ...mapGetters('drivers', [ 'getDriverById']),

        receivedDriverId() {
            return this.$route.params.driverId
        },
        actionButtonTitle() {
            return this.receivedDriverId ? 'Save' : 'Add'
        },
    },

    created() {
        if (this.receivedDriverId) this.driver = { ...this.getDriverById(this.receivedDriverId) }
    },

    methods: {
        ...mapActions('drivers', ['addDriver', 'updateDriver']),
        
        onAction() {
            if (!this.receivedDriverId) this.addDriver(this.driver)
            else this.updateDriver(this.driver)

            this.$router.push({
                name: 'drivers',
            })
        },
        onCancel() {
            this.$router.push({
                name: 'drivers',
        })

        },
    },
    }
</script>

<style lang="scss" scoped>

</style>