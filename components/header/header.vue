<template>
     <!-- ========== Left Sidebar Start ========== -->
            <div class="left side-menu">
                <button type="button" class="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
                    <i class="mdi mdi-close"></i>
                </button>

                <div class="left-side-logo d-block d-lg-none">
                    <div class="text-center">
                        
                        <a href="index.html" class="logo"><img src="assets/images/logo_dark.png" height="20" alt="logo"></a>
                    </div>
                </div>

                <div class="sidebar-inner slimscrollleft">
                    
                    <div id="sidebar-menu">
                        <ul>
                            <li class="menu-title">Main</li>

                            <li>
                                <nuxt-link to="/" class="waves-effect">
                                    <i class="dripicons-home"></i>
                                    <span> Dashboard</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/product" class="waves-effect">
                                    <i class="dripicons-home"></i>
                                    <span> Product <span class="badge badge-success badge-pill float-right">3</span></span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/customer" class="waves-effect">
                                    <i class="dripicons-home"></i>
                                    <span> Customer <span class="badge badge-success badge-pill float-right">3</span></span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/order" class="waves-effect">
                                    <i class="dripicons-home"></i>
                                    <span> Make Order</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/payment" class="waves-effect">
                                    <i class="dripicons-home"></i>
                                    <span> Make Order</span>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div> <!-- end sidebarinner -->
            </div>
            <!-- Left Sidebar End -->
</template>

<script>
import {API_URL} from "~/plugins/api"

export default {
    data(){
        return {
            isLogin: false,
            userName: '',
            password: '',
            user: {
                'username': '',
                'email': ''
            }
        }
    },
    created() {
        this.checkAuth()
    },
    methods: {
        login(){
            let url = API_URL("auth/local/");
            let data = {
                "identifier": this.userName,
                "password": this.password
            }
            console.log(data)
            this.$axios.post(url, data).then(response => {
                if(response.status == 200){
                    let userJWT = response.data.jwt
                    let userName = response.data.user.username
                    localStorage.setItem("token", userJWT)
                    localStorage.setItem("userName", JSON.stringify(userName))
                    this.checkAuth()
                }
            }).catch(err => console.log(err));
        },
        checkAuth(){
            if(process.browser){
                let token = localStorage.getItem("token")
                let userName = localStorage.getItem("userName")
                console.log(userName)
                if(token){
                    this.user.username = JSON.parse(userName)
                    this.isLogin = true
                }else {
                    this.isLogin = false
                }
            }
        }
    }
}
</script>