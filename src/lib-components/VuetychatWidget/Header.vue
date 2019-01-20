<template>
    <div class="vuetychat-widget-header">
        <img class="vuetychat-widget-logo"
            :src="brand.logo"
            :alt="brand.name">
        <template v-if="online">
            {{ onlineMessage }}
        </template>
        <template v-else>
            {{ offlineMessage }}
        </template>
        <button type="button" class="vuetychat-widget-btn-close" @click.prevent="close">
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982" width="18" height="18"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            brand: {
                type: Object,
                default: () => {
                    return {
                        logo: 'https://s.gravatar.com/avatar/8664b2d4aeb798cb642163cce65863e2?s=50',
                        name: 'Vuetychat'
                    }
                }
            },

            online: {
                type: Boolean,
                default: false
            },

            onlineMessage: {
                type: String,
                default: 'We\'re online'
            },

            offlineMessage: {
                type: String,
                default: 'Sorry, we\'re offline at the moment'
            }
        },

        methods: {
            close() {
                this.$emit('closed');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vuetychat-widget {
        &-header {
            background-color: var(--vuetychat-widget-header-bg-color);
            color: var(--vuetychat-widget-header-text-color);
            padding: 10px;
            display: flex;
            align-items: center;
            position: relative;
        }

        &-logo {
            border-radius: 50%;
            margin-right: 10px;
        }

        &-btn-close {
            position: absolute;
            right: 15px;
            outline: none;
            background-color: transparent;
            border: none;
            cursor: pointer;
        }
    }
</style>
