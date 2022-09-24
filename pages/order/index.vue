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

            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="mt-0 header-title mb-4">Latest Trasaction</h4>
                            <div class="table-responsive">
                                <div class="p-3">
                                    <button @click.prevent="transitionType = 'order'" :class="{'btn-primary' : transitionType == 'order'}" class="btn">Order</button>
                                    <button @click.prevent="transitionType = 'payment'" :class="{'btn-primary' : transitionType == 'payment'}"   class="btn">Payment</button>
                                    <!-- <button  @click.prevent="transitionType = 'stock'" :class="{'btn-primary' : transitionType == 'stock'}"  class="btn">Stock</button> -->
                                </div>
                                <table class="table table-hover">
                                    <thead>
                                        <tr v-if="transitionType != 'stock'">
                                            <th scope="col">ID No.</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Order Due</th>
                                        </tr>
                                        <tr v-else>
                                            <th scope="col">ID No.</th>
                                            <!-- <th scope="col">Name</th> -->
                                            <th scope="col">Date</th>
                                            <!-- <th scope="col">Order Due</th> -->
                                            <th scope="col">Payment Due</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="orders && orders.length">
                                        <tr v-if="order.type == transitionType" :class="{'active' : order.type === 'Payment'}" v-for="(order, i) in orders" :key="i">
                                            <th scope="row">#{{i + 1}}</th>
                                            <td v-if="order.totaDue">{{order.totaDue}}</td>
                                            <td>{{order.createdAt.split("T")[0].split("-").reverse().join("/")}}</td>
                                            <td>{{order.payment || order.due}}Tk</td>
                                            <!-- <td v-if="order.customer">{{order.customer.total_due}}Tk</td> -->
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
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
            customers: [],
            orders: null,
            transitionType: 'order',
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
                let brToken = 'Bearer '+localStorage.getItem("token")
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
                let brToken = 'Bearer '+localStorage.getItem("token")
                this.$axios.get(url, {headers: {Authorization: brToken}}).then(response => {
                    this.$router.push('/order?id='+customerId)
                    console.log(response)
                    if(response.status == 200){
                        this.ordererUser = response.data.customer;
                        this.orders = response.data.customer.transitions
                    }
                }).catch(err => console.log(err));
            }
        },
        getProducts(){
            if(process.browser){
                let url = API_URL("product/");
                let token = "Bearer " + localStorage.getItem("token")
                // , 
                this.$axios.get(url, {headers: {Authorization: token}}).then(response => {
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