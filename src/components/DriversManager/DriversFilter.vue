<template>
    <div class="container">
        <label> ПІБ
            <input v-model=" filterObj.name" type="text">
        </label>
        <label> Від
            <input v-model=" filterObj.intervalStart" type="number">
        </label>
        <label> До
            <input v-model=" filterObj.intervalEnd" type="number">
        </label>
        <button @click="onReset">Reset</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        name: 'DriversFilter',

        data() {
            return {
                filterObj: {}
            }
        },

        watch: {
            filterObj: {              
                
                handler(newValue ) {
                    this.updateFilter(newValue)
                    
                },  deep: true,
            }
        },
        methods: {
            ...mapActions('filters', [ 'updateFilter']),

            onReset() {
            this.filterObj = {}
            }

        },
        
    }
</script>

<style lang="scss" scoped>
.container {
    width: 750px;
    display: flex;
    justify-content: space-between;
}
</style>