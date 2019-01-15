<template>
    <form action="/" method="post" class="vuetychat-form-details" @submit.prevent="store">
        <input class="vuetychat-form-input" type="text" placeholder="Your name" v-model="form.name">
        <input class="vuetychat-form-input" type="email" placeholder="Your email address" v-model="form.email">
        <button type="submit" class="vuetychat-btn">Start Chat</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: null,
                    email: null
                }
            }
        },

        methods: {
            store() {
                if (! this.form.name || ! this.form.email) {
                    return;
                }

                this.$emit('submitted', this.form);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vuetychat {
        &-form-details {
            margin: 10px;
            padding: 10px;
            background-color: #fff;
            @apply .rounded;
        }

        &-form-input {
            display: block;
            width: 100%;
            background-color: #f1f5f8;
            color: #3d4852;
            border-width: 2px;
            border-radius: .25rem;
            padding: .75rem 1rem;
            margin-bottom: 1rem;
            line-height: 1.25;
        }

        &-btn {
            text-decoration: none;
            display: inline-block;
            padding: 1rem 2.5rem;
            color: #3d4852;
            border-radius: .25rem;
            background-color: var(--vuetychat-widget-btn-bg-color);
            color: var(--vuetychat-widget-btn-text-color);
            outline: none;
            transition: ease-in-out all 200ms;
        }
    }
</style>
