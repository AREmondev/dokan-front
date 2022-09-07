<template>
    <client-only>
        <div v-if="ordererUser != null" class="container py-5">
         <a @click.prevent="selectNewCustome" class="btn text-white mb-5 btn-primary pointer">Select New Customer</a>
            <form class="w-100 mb-5">
                 <div class="form-row row">
                    <div class="form-group col-md-5">
                        <label for="inputEmail4">Name</label>
                        <input v-model="ordererUser.name" disabled type="text" class="form-control" >
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputEmail4">Village</label>
                        <input v-model="ordererUser.village" disabled type="text" class="form-control" >
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputEmail4">Due</label>
                        <input v-model="ordererUser.total_due" disabled type="text"  class="form-control" >
                    </div>
                </div>
            </form>
            <Order :userId="userId" :products="products" />
        </div>
        <div v-else class="container py-5">
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
                        <a @click.prevent="selectCustomer(customer._id)" class="dlt mr-2 pointer text-red">Select</a>   
                    </td>
                </tr>
                
                </tbody>
            </table>
        </div>
    </client-only>
</template>

<script>
import {API_URL, token} from "~/plugins/api"
import Order from "~/components/order/order.vue"
export default {
    components: {Order},
    data(){
        return {
            ordererUser: null,
            products: [],
            userId: this.$route.query.id,
            customers: []
        }
    },
    created() {
        this.selectCustomer();
        this.getProducts();
        this.getAllCustomer();
    },
    cumputed: {
        
    },
    methods: {
        selectNewCustome(){
            this.ordererUser = null
            this.$router.push('/order')
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
        selectCustomer(id){
            if(process.browser && (id || this.$route.query.id)){
                let customerId = id || this.$route.query.id
                let url = API_URL(`customer/${customerId}`);
                let brToken = localStorage.getItem("token")
                this.$axios.get(url, {headers: {Authorization: brToken}}).then(response => {
                    this.$router.push('/order?id='+customerId)
                    console.log(response)
                    if(response.status == 200){
                    this.ordererUser = response.data.customer;
                    }
                }).catch(err => console.log(err));
            }
        },
        getProducts(){
            if(process.browser){
                let url = API_URL("product/");
                let token = "Bearer " + localStorage.getItem("token")
                // , {headers: {Authorization: token}}
                this.$axios.get(url).then(response => {
                    console.log(response)
                    if(response.status == 200){
                        this.products = response.data;
                    }
                }).catch(err => console.log(err));
            }
        }
    }
}
</script>

<style>
.table-row {
    background-color: aliceblue;
    border-bottom: 1.4px solid gray;
}
.table-row td {
    border: none;
}
</style>