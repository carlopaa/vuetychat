<template>
    <button type="button" class="vuetychat-widget-launcher" @click.prevent="toggle">
        <transition name="vuetychat-widget-toggle">
            <svg v-if="isOpen" class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982" width="25" height="25"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
        </transition>
        <transition name="vuetychat-widget-toggle">
            <svg v-if="! isOpen" class="icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 510 510"><path d="M459 0H51C22.95 0 0 22.95 0 51v459l102-102h357c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51z"/></svg>
        </transition>
    </button>
</template>

<script>
    export default {
        props: {
            isOpen: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            toggle() {
                this.$emit('toggled');
            }
        }
    }
</script>

<style lang="scss">
    .vuetychat-widget {
        &-launcher {
            position: fixed;
            bottom: 25px;
            right: 25px;
            width: 60px;
            height: 60px;
            background-color: var(--vuetychat-widget-launcher-bg-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
            z-index: 999;

            &:focus {
                outline: none;
            }

            .icon {
                position: absolute;
                fill: var(--vuetychat-widget-launcher-text-color);
            }
        }

        &-toggle-enter,
        &-toggle-leave-to {
            transform: rotate(-90deg);
            opacity: 0;
        }

        &-toggle-enter-to,
        &-toggle-leave {
            transform: rotate(0);
            opacity: 1;
        }

        &-toggle-enter-active,
        &-toggle-leave-active {
            transition: all ease-in-out 200ms;
        }
    }
</style>
