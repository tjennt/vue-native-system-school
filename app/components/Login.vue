<template>
    <Page actionBarHidden="true">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <!-- IMAGE AND NAME APP -->
                <Image class="logo" src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/50398018_1265797996923033_3309203887033942016_n.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=Hz4Sh2AqozsAX_OLM_Y&_nc_ht=scontent.fsgn5-5.fna&oh=8c3daef781766fa9336c743dffa76b94&oe=5F16D4BF"></Image>
                <Label class="header" :text="nameApp"></Label>

                    <!-- INFO ERROR -->
                <Label v-show="errorActive" class="alert alert-danger" :text="errorText"></Label>

                <!-- LAYOUT LOGIN,.. -->
                <GridLayout rows="auto, auto, auto">
                
                    <!-- INPUT EMAIL -->
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" v-model="user.email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <!-- INPUT PASSWORD -->
                    <StackLayout row="1" class="input-field">
                        <TextField class="input" ref="password" :isEnabled="!processing"
                            hint="Password" secure="true" v-model="user.password"
                            :returnKeyType="isLoggingIn ? 'done' : 'next'"
                            @returnPress="focusConfirmPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <!-- IF REGISTER THEN SHOW -->
                    <StackLayout row="2" v-show="!isLoggingIn" class="input-field">
                        <TextField class="input" ref="confirmPassword" :isEnabled="!processing"
                            hint="Confirm password" secure="true" v-model="user.confirmPassword"
                            returnKeyType="done"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>
                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>

                <!-- BUTTON LOGIN AND REGISTER -->
                <Button :text="isLoggingIn ? 'Đăng nhập' : 'Đăng kí'" :isEnabled="!processing"
                    @tap="submit" class="btn btn-primary fz-20 m-t-20"></Button>

                <!-- FORGOT PASSWORD PROMORT  -->
                <Label *v-show="isLoggingIn" text="Quên mật khẩu?"
                    class="login-label" @tap="forgotPassword()"></Label>
            </StackLayout>

            <!-- DON'T REGISTER -->
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
    import axios from "axios";
    import Home from "./Home";
    import HomeStudent from "./Student/Home";
    import HomeTeacher from "./Teacher/Home";


    import * as utils from "~/shared/utils";
    import * as AppSetting from "application-settings";

    export default {
        data() {
            return {
                isLoggingIn: true,
                processing: false,
                errorActive: false,
                errorText: 'Lỗi',
                user: {
                    email: "tien@gmail.com",
                    password: "1",
                    confirmPassword: "1"
                }
            };
        },
        mounted() {
            AppSetting.remove("token");
            this.$store.commit("setChangeLogin", false);
            this.$store.commit("setToken", '');
        },
        computed: {
            nameApp() {
                return this.$store.state.nameApp;
            }
        },
        methods: {
            toggleForm() {
                this.isLoggingIn = !this.isLoggingIn;
            },
            submit() {
                if (!this.user.email || !this.user.password) {
                    this.processing = false;
                    this.errorActive = true;
                    this.errorText = "Vui lòng nhập đầy đủ thông tin";
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
                let login = this.domain + 'public/auth/login';
                axios.post(login,{
                    email: this.user.email,
                    password: this.user.password
                },
                {headers: this.$store.state.authHeader})
                .then(res => {
                    let respon = JSON.parse(JSON.stringify(res.data));
                    if(respon.Status != 200){
                        this.processing = false;
                        this.errorActive = true;
                        this.errorText = respon.Message;
                    }else{
                        this.processing = false;
                        this.errorActive = false;
                        AppSetting.setString('token', respon.Notification.Token);
                        this.$store.commit("setChangeLogin", true);
                        this.$store.commit("setToken", respon.Notification.Token);
                        this.$navigateTo(HomeTeacher, { clearHistory: true });
                    }
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                        console.log(error.config);
                });
            },
            register() {
                // console.log(this.$store.state.authHeaderApi.Authorization);
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
    .alert {
        width: 100%;
        padding: 25px 15px;
        color: #fff;
        text-align: center;
        font-size: 14pt;
        border-radius: 20px;
        margin-bottom: 25px;
    }
    .alert-danger {
        background-color: #e54641;
    }
</style>
