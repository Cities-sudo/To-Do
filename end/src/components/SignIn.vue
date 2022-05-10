<template>
<div class="limiter" @login="onLogin">
    <form>
    <div class="container-login100">
        <div class="wrap-login100">
            <form class="login100-form validate-form">
                <span class="login100-form-title p-b-26">
                    Welcome
                </span>
                <span class="login100-form-title p-b-48">
                    <i class="zmdi zmdi-font"></i>
                </span>

                <div class="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                    <input class="input100" type="text" name="email" id="email1" v-model="email1">
                    <span class="focus-input100" data-placeholder="Email"></span>
                </div>

                <div class="wrap-input100 validate-input" data-validate="Enter password">
                    <span class="btn-show-pass">
                        <i class="zmdi zmdi-eye"></i>
                    </span>
                    <input class="input100" type="password" name="pass" id="pass1" v-model="pass1">
                    <span class="focus-input100" data-placeholder="Password"></span>
                </div>

                <div class="container-login100-form-btn">
                    <div class="wrap-login100-form-btn">
                        <div class="login100-form-bgbtn"></div>
                        <button class="login100-form-btn">
                            Login
                        </button>
                    </div>
                </div>

                <div class="text-center p-t-115">
                    <span class="txt1">
                        Don’t have an account?
                    </span>

                    <a class="txt2" href="#">
                        Sign Up
                    </a>
                </div>
            </form>
        </div>
    </div>
    </form>
</div>

</template>

<script>
export default {
    name:"SignIn",
    data() {
        return{
            email1: null,
            pass1: null,
            errors:[]
            
        }
    },

    // methods: {
    //     onLogin(){
    //         let loginbe = {
    //             email1: this.email1,
    //             pass1: this.pass1
    //         }
    //         this.$emit('Submitted', loginbe)
    //         this.email1 = null
    //         this.pass1 = null

    //     }
    // }

}
</script>

<style>

</style>