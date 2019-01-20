<template>
    <div class="vuetychat-lib-dev">
        <vuetychat-widget></vuetychat-widget>
    </div>
</template>

<script>
    import { VuetychatWidget } from './entry';

    export default {
        name:  'VuetychatWidgetLibDev',
        components: {
            VuetychatWidget,
        },
    }
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
    }
</style>
