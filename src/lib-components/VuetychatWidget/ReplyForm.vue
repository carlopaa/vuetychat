<template>
    <form class="vuetychat-reply-form" @submit.prevent="submit" @keydown="handleMessage">
        <div ref="vuetyChatInput" class="vuetychat-textarea"
            contenteditable="true" @input="update"
            :placeholder="placeholder">
        </div>
        <button type="submit" class="btn-vuetychat">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.011 448.011" width="20" height="20"><path d="M438.731 209.463l-416-192c-6.624-3.008-14.528-1.216-19.136 4.48a15.911 15.911 0 0 0-.384 19.648l136.8 182.4-136.8 182.4c-4.416 5.856-4.256 13.984.352 19.648 3.104 3.872 7.744 5.952 12.448 5.952 2.272 0 4.544-.48 6.688-1.472l416-192c5.696-2.624 9.312-8.288 9.312-14.528s-3.616-11.904-9.28-14.528z" fill="#777"/></svg>
        </button>
    </form>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: 'Write a reply'
            }
        },

        data() {
            return {
                input: ''
            }
        },

        methods: {
            update(event) {
                this.updatePlaceholder(this.input = event.target.innerText);
                this.$emit('typing', this.input);
            },

            cleanText(text) {
                return text.replace(/[\s\/]/g, '');
            },

            updatePlaceholder(input) {
                if (this.cleanText(input).length) {
                    return this.$refs.vuetyChatInput.setAttribute('placeholder', '');
                }

                this.clear();
            },

            handleMessage() {
                if (event.keyCode === 13 && ! event.shiftKey && screen.width > 449) {
                    event.preventDefault();

                    this.submit();
                }
            },

            submit() {
                this.$emit('submitted', this.input);
                this.clear();
            },

            clear() {
                this.input = '';
                this.$refs.vuetyChatInput.innerText = '';
                this.$refs.vuetyChatInput.setAttribute('placeholder', this.placeholder);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .vuetychat {
        &-reply-form {
            padding: 15px;
            background-color: #fff;
            color: #333;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            flex-wrap: wrap;
        }

        &-textarea {
            padding: 10px;
            width: 100%;
            min-height: 40px;
            max-height: 120px;
            border-radius: 5px;
            flex: 1;

            &::after {
                content: attr(placeholder);
                color: #aaa;
            }

            &:focus {
                outline: none;
            }
        }
    }
</style>
