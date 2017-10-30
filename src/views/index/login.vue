<template>
    <div class="login-wrapper">
        <div class="login-box">
            <Tabs value="name1">
                <TabPane label="登录" name="name1">登录</TabPane>
                <TabPane label="注册" name="name2">注册</TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style scoped lang="less">
    .login-wrapper {
        position: fixed;
        display: block;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        border: solid 1px;

        &:before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            margin-right: -0.25em;
        }
        .login-box {
            border: solid 1px;
            height: 500px;
            display: inline-block;
            vertical-align: middle;
            width: 350px;
        }
    }
</style>
