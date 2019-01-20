<template>
    <div class="vuetychat-messages">
        <message
            v-for="message in messages"
            :key="message.id"
            :message="message"
            :is-sender="isSender(message.sender)">
        </message>

        <message-typing :user="userTyping"></message-typing>
    </div>
</template>

<script>
    import Message from './Message.vue';
    import MessageTyping from './MessageTyping.vue';

    export default {
        components: {
            Message,
            MessageTyping
        },

        props: {
            messages: {
                type: Array,
                default: () => {
                    return [];
                }
            },

            userTyping: Object,
            sender: Object
        },

        methods: {
            scrollToBottom() {
                this.$el.scrollTop = this.$el.scrollHeight;
            },

            isSender(sender) {
                return this.sender.id === sender;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vuetychat {
        &-messages {
            padding: 15px;
            overflow-y: auto;
            height: 76.5%;
        }
    }
</style>
