<template>
    <div class="login-wrapper">
        <div class="login-sign-box">
            <Tabs value="login">
                <TabPane label="登录" name="login">
                    <Form ref="submitLoginForm" :model="submitLoginForm" :rules="submitLoginRule"
                          class="login-form-box">
                        <FormItem prop="userName">
                            <Input type="text" v-model="submitLoginForm.userName" placeholder="用户名"></Input>
                        </FormItem>
                        <FormItem prop="pwd">
                            <Input type="password" v-model="submitLoginForm.pwd" placeholder="密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('submitLoginForm')">登录</Button>
                        </FormItem>
                    </Form>

                </TabPane>
                <TabPane label="注册" name="siginIn">
                    <Form ref="submitSignForm" :model="submitSignForm" :rules="submitSignRule"
                          class="login-form-box">
                        <FormItem prop="userName">
                            <Input type="text" v-model="submitSignForm.userName" placeholder="用户名">
                            </Input>
                        </FormItem>
                        <FormItem prop="mobile">
                            <Input type="text" v-model="submitSignForm.mobile" placeholder="手机号"></Input>
                        </FormItem>
                        <FormItem prop="pwd">
                            <Input type="password" v-model="submitSignForm.pwd" placeholder="密码"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('submitSignForm')">登录</Button>
                        </FormItem>
                    </Form>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                submitLoginForm: {
                    userName: '',
                    pwd: ''
                },
                submitSignForm: {
                    userName: '',
                    mobile: '',
                    pwd: ''
                },
                submitLoginRule: {
                    userName: [
                        {required: true, message: '请填写用户名', trigger: 'blur'}
                    ],
                    pwd: [
                        {required: true, message: '请填写密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
                    ]
                },
                submitSignRule: {
                    userName: [
                        {required: true, message: '请填写用户名', trigger: 'blur'}
                    ],
                    mobile: [
                        {required: true, message: '请填写手机号', trigger: 'blur'}
                    ],
                    pwd: [
                        {required: true, message: '请填写密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>
<style scoped lang="less">
    .login-wrapper {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        position: fixed;
        display: block;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;

        &:before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            margin-right: -0.25em;
        }
        .login-sign-box {
            border: solid 1px #f5f5f5;
            border-radius: 6px;
            padding: 20px;
            height: 500px;
            display: inline-block;
            vertical-align: middle;
            width: 350px;
            .ivu-btn-primary {
                height: 38px !important;
                font-size: 15px !important;
                letter-spacing: 1px;
            }
        }
        .login-form-box {
            border-radius: 8px;
            padding: 25px 15px 20px 15px;
            .ivu-btn-primary {
                width: 100%;
            }
        }
        .ivu-input-group {
            font-size: 16px;
        }
    }
</style>
