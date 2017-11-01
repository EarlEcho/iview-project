<template>
    <!--<Input type="text" v-model="submitSignForm.verfiyCode" placeholder="验证码">-->
    <!--<div class="ls-msg-send-btn">-->
        <Button slot="append" @click="fetchSmsCode" :disabled="disabled">获取验证码</Button>
    <!--</div>-->
    <!--</Input>-->
</template>

<script>
    export default {
        name: 'ls-msg-send-btn',
        props: ['codeUrl', 'mobile'],
        data() {
            return {
                disabled: false,
            }
        },
        methods: {
            fetchSmsCode: function () {
                console.log('dddd');
            }
        }
    }
</script>

<style scoped lang="less">

</style>