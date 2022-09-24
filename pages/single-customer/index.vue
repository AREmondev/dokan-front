<template>
    <div class="page-content-wrapper ">
        <form class="w-100 mb-5 py-5">
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
                                            <ul class="list-group d-block w-100">
                                                <!-- <li class="list-group-item d-flex justify-content-between mb-2">
                                                    <h6>Name</h6>
                                                    <h6>Unit Price</h6>
                                                    <h6>Quentity</h6>
                                                    <h6>Total Price</h6>
                                                </li> -->
                                                <li class="list-group-item d-flex justify-content-between " v-for="(product, index ) in Object.values(order.products[0])" :key="index">
                                                    <p>{{product.name}}</p>
                                                    <p>{{product.unite_price}}</p>
                                                    <p>{{product.qty}}</p>
                                                    <p class="number">
                                                        <span>{{product.total_price}}</span> 
                                                    </p>
                                                </li>
                                            </ul>
                                        </tr>
                                        
                                        
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        <div v-if="orders && 2==1 && orders.length > 0" class="added-product mt-5" v-for="order in orders" :key="order._id">
            
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between mb-2">
                    <h6>Name</h6>
                    <h6>Unit Price</h6>
                    <h6>Quentity</h6>
                    <h6>Total Price</h6>
                </li>
                <li class="list-group-item d-flex justify-content-between " v-for="(product, index ) in addedProducts" :key="index">
                    <p>{{product.name}}</p>
                    <p>{{product.unite_price}}</p>
                    <p>{{product.qty}}</p>
                    <p class="number"><span>{{product.total_price}}</span> <span @click.prevent="removeFromCart(product._id)" class="dlt text-red ml-4">X</span> </p>
                </li>
            </ul>
            <ul class="list-group">
                <li class="list-group-item mt-4">
                    <h6>Total Item: {{calculteAddedQty}}</h6>
                    <h6>Total Price: {{calculteAddedPrice}}</h6>
                </li>
            </ul>
            <button @click.prevent="createOrder" class="btn w-100 d-block btn-primary mt-3">Place Order</button>
        </div>
    </div>
 
 
     <!-- <div class="form-group">
         <label>Required</label>
         <input type="text" class="form-control" required placeholder="Type something"/>
     </div> -->
 
 </template>
 
 
 <script>
 import {API_URL, token} from "~/plugins/api"
 export default{
    name:"SingleCustomers",
     data(){
         return {
            ordererUser: '',
            orders: '',
            transitionType: 'order'
         }
   },
   created() {
     this.selectCustomer()
   },
 //   computed:{
 //     totalProductValue(){
 //         return 
 //     }
 //   },
   methods: {
    selectCustomer(id){
            if(process.browser && (id || this.$route.query.id)){
                let customerId = id || this.$route.query.id
                let url = API_URL(`customer/${customerId}`);
                let brToken = 'Bearer '+localStorage.getItem("token")
                this.$axios.get(url, {headers: {Authorization: brToken}}).then(response => {
                    // this.$router.push('/order?id='+customerId)
                    console.log(response)
                    if(response.status == 200){
                        this.ordererUser = response.data.customer;
                        this.orders = response.data.customer.transitions
                    }
                }).catch(err => console.log(err));
            }
        },
   }
 
 }
 </script>
 
 <style>
 .pointer {
     cursor: pointer;
 }
 .text-red {
     color: red !important;
 }
 </style>