<template>
    <div class="vuetychat-user-typing" v-if="show">
        <img :src="user.avatar" class="vuetychat-user-typing-avatar" v-if="user.avatar">
        <div class="vuetychat-user-typing-indicator" :class="{'has-avatar' : user.avatar}">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            user: Object
        },

        computed: {
            show() {
                return ! this.isEmpty(this.user);
            }
        },

        methods: {
            isEmpty(object) {
                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        return false;
                    }
                }

                return true;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vuetychat {
        &-user-typing {
            margin: 10px 0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            &-avatar {
                border-radius: 50%;
                width: 30px;
            }

            &-indicator {
                background-color: var(--vuetychat-widget-received-message-bg-color);
                display: inline-block;
                padding: 10px;
                border-radius: 5px;
                margin-left: 40px;
                display: flex;

                &.has-avatar {
                    margin-left: 10px;
                }

                > span {
                    display: block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: #999;
                    margin-right: 5px;
                    animation: typing infinite 1.7s;

                    &:first-child {
                        animation-delay: -1s;
                    }

                    &:nth-child(2) {
                        animation-delay: 0.8s;
                    }

                    &:last-child {
                        margin-right: 0;
                        animation-delay: 0.6s;
                    }
                }
            }
        }
    }

    @keyframes typing {
        10% {
            transform: translateY(-5px);
            background-color: #888;
        }
        50% {
            transform: translateY(0);
            background-color: #999;
        }
    }
</style>
