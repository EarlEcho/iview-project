<template>
    <div class="homepage-wrappe">
        <h1>
            {{title}}
        </h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: '找回密码'
            }
        },
        methods: {}
    }
</script>
<style scoped lang="less">
    .homepage-wrappe {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
</style>
