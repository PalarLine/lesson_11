<template>
    <div>
        <h1>Призначення </h1>
            <distribution-list />
        
        <h1>Нове призначення </h1>
            <distributor-adjuster />
        
    </div>
</template>

<script>
import DistributorAdjuster from './DistributorAdjuster.vue'
import DistributionList from './DistributionList.vue'
    export default {
        name: 'DistributionsManager',
        components: {
            DistributorAdjuster,
            DistributionList,            
        }
    }
</script>

<style lang="scss" scoped>

</style>