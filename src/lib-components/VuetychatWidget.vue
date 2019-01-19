<template>
    <div :style="styles">
        <transition name="fadeUp">
            <div v-if="isOpen"
                class="vuetychat-widget"
                :class="{'messages-is-visible' : ! this.showFormDetails}">

                <vuetychat-header
                    :brand="brand"
                    :online="online"
                    :online-message="onlineMessage"
                    :offline-message="offlineMessage"
                    @closed="onToggle">
                </vuetychat-header>

                <vuetychat-form-details
                    v-if="showFormDetails"
                    @submitted="onFormDetailsSubmitted">
                </vuetychat-form-details>
                <template v-else>
                    <vuetychat-messages
                        ref="vuetyChatMessages"
                        :messages="messages"
                        :sender="sender"
                        :user-typing="userTyping">
                    </vuetychat-messages>
                    <vuetychat-reply-form
                        ref="replyForm"
                        @submitted="onSubmit"
                        @typing="onTyping">
                    </vuetychat-reply-form>
                </template>

            </div>
        </transition>

        <vuetychat-launcher @toggled="onToggle" :is-open="isOpen"></vuetychat-launcher>
    </div>
</template>

<script>
    import VuetychatHeader from './VuetychatWidget/Header.vue';
    import VuetychatMessages from './VuetychatWidget/Messages.vue';
    import VuetychatLauncher from './VuetychatWidget/Launcher.vue';
    import VuetychatReplyForm from './VuetychatWidget/ReplyForm.vue';
    import VuetychatFormDetails from './VuetychatWidget/FormDetails.vue';

    export default {
        components: {
            VuetychatHeader,
            VuetychatMessages,
            VuetychatLauncher,
            VuetychatReplyForm,
            VuetychatFormDetails
        },

        props: {
            colors: {
                type: Object,
                default: () => {
                    return {
                        header: {
                            bg: '#245adb',
                            text: "#fff"
                        },

                        receivedMessage: {
                            bg: '#dadada',
                            text: '#111'
                        },

                        sentMessage: {
                            bg: '#245adb',
                            text: '#fff'
                        },

                        launcher: {
                            bg: '#245adb',
                            text: '#fff'
                        },

                        button: {
                            bg: '#245adb',
                            text: '#fff'
                        }
                    }
                }
            },

            showFormDetails: {
                type: Boolean,
                default: false
            },

            sender: Object,
            onlineMessage: String,
            offlineMessage: String,
            messages: Array,
            userTyping: Object,
            brand: Object,
            online: Boolean
        },

        watch: {
            messages() {
                setTimeout(() => this.$refs.vuetyChatMessages.scrollToBottom(), 1);
            }
        },

        data() {
            return {
                isOpen: false
            }
        },

        computed: {
            styles() {
                return {
                    '--vuetychat-widget-header-bg-color': this.colors.header.bg,
                    '--vuetychat-widget-header-text-color': this.colors.header.text,
                    '--vuetychat-widget-sent-message-bg-color': this.colors.sentMessage.bg,
                    '--vuetychat-widget-sent-message-text-color': this.colors.sentMessage.text,
                    '--vuetychat-widget-received-message-bg-color': this.colors.receivedMessage.bg,
                    '--vuetychat-widget-received-message-text-color': this.colors.receivedMessage.text,
                    '--vuetychat-widget-launcher-bg-color': this.colors.launcher.bg,
                    '--vuetychat-widget-launcher-text-color': this.colors.launcher.text,
                    '--vuetychat-widget-btn-bg-color': this.colors.button.bg,
                    '--vuetychat-widget-btn-text-color': this.colors.button.text
                }
            }
        },

        mounted() {
            this.$on('opened', () => this.setOverflow(true));
            this.$on('closed', () => this.setOverflow(false));
        },

        methods: {
            onToggle() {
                if (this.isOpen = ! this.isOpen) {
                    return this.$emit('opened');
                }

                return this.$emit('closed');
            },

            onSubmit(input) {
                if (! input) {
                    return;
                }

                this.$emit('submitted', input);
            },

            onTyping(input) {
                this.$emit('typing', input);
            },

            setOverflow(hidden) {
                const body = document.body;

                if (screen.width > 449) {
                    return;
                }

                return hidden ? body.setAttribute('style', 'overflow: hidden;') : body.removeAttribute('style');
            },

            onFormDetailsSubmitted(form) {
                this.$emit('form-details:submitted', form);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .overflow-x {
        overflow: hidden !important;
    }

    .vuetychat-widget {
        z-index: 9999;
        width: 370px;
        max-width: 590px;
        position: fixed;
        right: 25px;
        bottom: 100px;
        box-sizing: border-box;
        background-color: #f5f5f5;
        border-radius: 5px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
        overflow: hidden;

        @media screen and (max-width: 450px) {
            width: 100%;
            height: 100% !important;
            max-height: 100%;
            left: 0;
            top: 0;
            border-radius: 0;
            z-index: 9999;
        }

        &.messages-is-visible {
            height: calc(100% - 200px);
        }
    }

    .fadeUp-enter,
    .fadeUp-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }

    .fadeUp-enter-to,
    .fadeUp-leave {
        transform: translateY(0);
        opacity: 1;
    }

    .fadeUp-enter-active,
    .fadeUp-leave-active {
        transition: all ease-in-out 200ms;
    }
</style>
