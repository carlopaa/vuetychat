<script>
import { VuetychatSample } from './entry';
export default {
    name:  'VuetychatLibDev', // vue library dev component
    components: {
        VuetychatSample,
    },
}
</script>

<template>
    <div class="vuetychat-lib-dev">
        <vuetychat-sample></vuetychat-sample>
    </div>
</template>

<style scoped>
    .vuetychat-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
