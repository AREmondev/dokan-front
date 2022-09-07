<template>
<div class="page-content-wrapper ">

    <div class="container-fluid">

        <div class="row">
            <div class="col-sm-12">
                <div class="page-title-box">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <h4 class="page-title m-0">Dashboard</h4>
                        </div>
                    </div>
                    <!-- end row -->
                </div>
                <!-- end page-title-box -->
            </div>
        </div> 

        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="row p-4">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>User email</label>
                                <input v-model="email" type="text" class="form-control" required placeholder="Name"/>
                            </div> 
                        </div>  
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Password</label>
                                <input v-model="password" type="password" class="form-control" required placeholder="Father Name"/>
                            </div> 
                        </div>  
                        <div class="col-md-12">
                            <button @click.prevent="login" type="button" class="btn btn-primary waves-effect waves-light">Login</button>                    
                        </div>  
                    </div>
                    
                </div>
            </div>
        </div>


</div>
</div>
</template>

<script>
import { API_URL } from '~/plugins/api'

    // import axios from 'axios'
    export default {
        name: "login",
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            login(){
                let data = {
                    email: this.email,
                    password: this.password,
                }
                let url = API_URL('users/login')
                this.$axios.post(url, data).then((response) => {
                    if(response.data.token){
                        localStorage.setItem('token', response.data.token)
                        this.$router.push('/')
                    }
                })
            }
        }
    }
</script>