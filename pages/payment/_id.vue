<template>
    <client-only>
        <div v-if="ordererUser == null" class="container py-5">
            <input  class="form-control mb-5"  v-model="customer" type="text" name="" id="">
            <table v-if="customers && customers.length" id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Village</th>
                    <th>Phone Number</th>
                    <th>Father Name</th>
                    <th>Total Bill</th>
                </tr>
                </thead>


                <tbody>
                <tr @click.prevent="selectCustomer(customer._id)" v-for="customer in customers" class="table-row" :key="customer.id">
                    <td>{{customer.name}}</td>
                    <td>{{customer.village}}</td>
                    <td>{{customer.phone_number}}</td>
                    <td>{{customer.father_name}}</td>
                    <td>{{customer.total_due}}</td>
                    <td>
                        <nuxt-link :to="'/payment?id='+customer._id" class="dlt mr-2 pointer text-red">Select</nuxt-link>   
                    </td>
                </tr>
                
                </tbody>
            </table>
        </div>
        <div v-else class="container py-5">
            <a @click.prevent="selectNewCustome" class="btn text-white mb-5 btn-primary pointer">Select New Customer</a>

            <form class="w-100 mb-5">
                 <div class="form-row row">
                    <div class="form-group col-md-4">
                        <label for="inputEmail4">Name</label>
                        <input v-model="ordererUser.name" disabled type="text" class="form-control" >
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputEmail4">Village</label>
                        <input v-model="ordererUser.village" disabled type="text" class="form-control" >
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputEmail4">Due</label>
                        <input v-model="ordererUser.total_due" disabled type="text"  class="form-control" >
                    </div>
                    <div class="form-group col-md-2 align-self-center m-0">
                        <nuxt-link v-if="ordererUser._id" :to="'/customer/persons?name='+ordererUser._id" class="btn btn-success my-btn" type="submit">Customer Details</nuxt-link>
                    </div>
                </div>
            </form>

            <form @submit.prevent="applyPayment">
                <div class="form-group">
                    <label for="payment">Payment</label>
                    <input id="payment" v-model="payment" type="number"  class="form-control" >
                </div>
                <button class="btn btn-success" type="submit">Payment</button>
            </form>
            
        </div>
    </client-only>
</template>

<script>
import {API_URL, token} from "~/plugins/api"
export default {
    data(){
        return {
        ordererUser: null,
        products: [],
        payment: '',
        customers: [],
        }
    },
    created() {
        this.getAllCustomer();
        this.selectCustomer(this.$route.query.id);
    },
    cumputed: {
        
    },
    methods: {
        selectNewCustome(){
            this.ordererUser = null
            this.$router.push('/payment')
        },
        getAllCustomer(){
            if(process.browser){
                let url = API_URL("customer");
                let brToken = localStorage.getItem("token")
                this.$axios.get(url,  {headers: {Authorization: brToken}}).then(response => {
                    console.log(response)
                    if(response.status == 200){
                    this.customers = response.data.customer
                    }
                }).catch(err => console.log(err));
            }
        },
        applyPayment(){
             if(process.browser){
                let url = API_URL(`customer/payment`);
                let data = {
                    payment: this.payment, type: 'payment', customer: this.$route.query.id
                }
                console.log(data)
                let brToken = localStorage.getItem("token")
                this.$axios.post(url, data, {headers: {Authorization: brToken}}).then(response => {
                    console.log(response)
                    if(response.status == 200){
                        this.ordererUser = response.data;
                        this.payment = ''
                    }
                }).catch(err => console.log(err));
            }
        },
        selectCustomer(id){
            if(process.browser && (id || this.$route.query.id)){
                let customerId = id || this.$route.query.id
                let url = API_URL(`customer/${customerId}`);
                let brToken = localStorage.getItem("token")
                this.$axios.get(url, {headers: {Authorization: brToken}}).then(response => {
                    // this.$router.push('/order?id='+customerId)
                    console.log(response)
                    if(response.status == 200){
                        this.ordererUser = response.data.customer;
                    }
                }).catch(err => console.log(err));
            }
        },
    }
}
</script>

<style>

</style>