<template>
    <div class="container">       
        <div class="driver-item-container"> {{ driver.name }}</div>        
        <div class="driver-item-container"> {{ driver.experience }}</div>
        <button @click="onEdit">Edit</button>
        <button @click="removeDriver(driver.id)">Delete</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        name:'DriversItem',

        props: {
            driver: {
                type: Object,
                required: true,
            },
        },

        methods: {
            ...mapActions('drivers',[ 'removeDriver']),

            onEdit() {
                console.log(this.driver.id)
            this.$router.push({
                name: 'driver',
                params: {
                    driverId: this.driver.id,
                },
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