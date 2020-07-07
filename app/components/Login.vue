<template>
    <Page actionBarHidden="true">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image class="logo" src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/50398018_1265797996923033_3309203887033942016_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=Hz4Sh2AqozsAX_OLM_Y&_nc_ht=scontent.fsgn5-5.fna&oh=8c3daef781766fa9336c743dffa76b94&oe=5F16D4BF"></Image>
                <Label class="header" text="PROQ TEAM"></Label>
                <Label class="header" :text="Login"></Label>

                <GridLayout rows="auto, auto, auto">
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" v-model="user.email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" ref="password" :isEnabled="!processing"
                            hint="Password" secure="true" v-model="user.password"
                            :returnKeyType="isLoggingIn ? 'done' : 'next'"
                            @returnPress="focusConfirmPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="2" v-show="!isLoggingIn" class="input-field">
                        <TextField class="input" ref="confirmPassword" :isEnabled="!processing"
                            hint="Confirm password" secure="true" v-model="user.confirmPassword"
                            returnKeyType="done"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>

                <Button :text="isLoggingIn ? 'Đăng nhập' : 'Đăng kí'" :isEnabled="!processing"
                    @tap="submit" class="btn btn-primary m-t-20"></Button>
                <Button text="TESTLOGINa" @tap="testLogin()" class="btn btn-primary m-t-20"></Button>
                <Label *v-show="isLoggingIn" text="Quên mật khẩu?"
                    class="login-label" @tap="forgotPassword()"></Label>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="toggleForm">
                <FormattedString>
                    <Span :text="isLoggingIn ? 'Chưa có tài khoản?' : 'Trở lại đăng nhập'"></Span>
                    <Span :text="isLoggingIn ? ' Đăng kí' : ''" class="bold"></Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import Home from "./Home";
    import * as utils from "~/shared/utils";

    export default {
        data() {
            return {
                isLoggingIn: true,
                processing: false,
                Login: '',
                user: {
                    email: "tien@gmail.com",
                    password: "1",
                    confirmPassword: "1"
                }
            };
        },
        methods: {
            testLogin() {
                this.login = this.$store
                // this.alert(this.$store.gobal)
                console.log(this.$store.state.gobal.state.checkLogin)
            },
            toggleForm() {
                this.isLoggingIn = !this.isLoggingIn;
            },

            submit() {
                if (!this.user.email || !this.user.password) {
                    this.alert(
                        "Please provide both an email address and password."
                    );
                    return;
                }

                this.processing = true;
                if (this.isLoggingIn) {
                    this.login();
                } else {
                    this.register();
                }
            },

            login() {
                this.processing = false;
                this.$navigateTo(Home, { clearHistory: true });
            },

            register() { 
                if (this.user.password != this.user.confirmPassword) {
                    this.alert("Xác nhận mật khẩu không đúng");
                    this.processing = false;
                    return;
                }
                this.processing = false;
                this.alert("Đăng kí thành công.");
                this.isLoggingIn = true;
            },

            forgotPassword() {
                prompt({
                    title: "Quên mật khẩu",
                    message: "Nhập địa chỉ email để lấy lại mật khẩu.",
                    inputType: "email",
                    defaultText: "",
                    okButtonText: "Ok",
                    cancelButtonText: "Hủy"
                }).then(data => {
                    if(!data.result){
                        return;
                    }
                    if (data.text.length === 0) {
                        this.alert('Vui lòng nhập địa chỉ email');
                    }else{
                        this.alert('Vui lòng kiểm tra email');
                    }
                });
            },
            focusPassword() {
                this.$refs.password.nativeView.focus();
            },
            focusConfirmPassword() {
                if (!this.isLoggingIn) {
                    this.$refs.confirmPassword.nativeView.focus();
                }
            },
            alert(message) {
                return alert({
                    title: "PROQ TEAM",
                    okButtonText: "OK",
                    message: message
                });
            }
        }
    };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #2a4054;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
    .btn-primary {
        height: 50;
        background-color: #2a4054;
        border-radius: 5;
        font-size: 20;
        font-weight: 600;
        color: #fff;
    }
    .btn-primary:disabled {
        opacity: 0.5;
    }
</style>
