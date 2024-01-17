<template>
    <div>
        <h1> Наші автобуси:</h1>
        <busses-manager />
    </div>
</template>

<script>
import BussesManager from '@/components/BussesManager'
    export default {
        name: 'BussesPark',
        components: {
            BussesManager
        }

    }
</script>

<style lang="scss" scoped>

</style>