<template>
    <div class="vuetychat-message"
        :class="{'vuetychat-message-sent' : isSender}">

        <template v-if="! isSender || (isSender && showSenderAvatar)">
            <img :src="message.avatar" :alt="message.sender" class="vuetychat-message-avatar">
        </template>

        <div class="vuetychat-message-body">
            {{ message.text }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            message: Object,

            isSender: {
                type: Boolean,
                default: false
            },

            showSenderAvatar: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vuetychat {
        &-message {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: 10px 0;

            &-sent {
                flex-direction: row-reverse;

                .vuetychat-message-body {
                    background-color: var(--vuetychat-widget-sent-message-bg-color);
                    color: var(--vuetychat-widget-sent-message-text-color);
                }
            }

            &-avatar {
                border-radius: 50%;
                width: 30px;
            }

            &-sender {

            }

            &-body {
                background-color: var(--vuetychat-widget-received-message-bg-color);
                color: var(--vuetychat-widget-received-message-text-color);
                padding: 10px;
                border-radius: 5px;
                margin: 0 10px;
                max-width: 75%;
                line-height: 1.5;
            }
        }
    }
</style>
