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
                                            <div class="col-md-4">
                                                <div class="float-right d-none d-md-block">
                                                    
                                                </div>
                                            </div>
                                            <!-- end col -->
                                        </div>
                                        <!-- end row -->
                                    </div>
                                    <!-- end page-title-box -->
                                </div>
                            </div> 
                            <!-- end page title -->

                            <div class="row">
                                <div class="col-xl-3 col-md-6">
                                    <div class="card bg-primary mini-stat text-white">
                                        <div class="p-3 mini-stat-desc">
                                            <div class="clearfix">
                                                <h6 class="text-uppercase mt-0 float-left text-white-50">Orders</h6>
                                                <h4 class="mb-3 mt-0 float-right">{{totalOrderValue}}Tk</h4>
                                            </div>
                                            <!-- <div>
                                                <span class="badge badge-light text-info"> +11% </span> <span class="ml-2">From previous period</span>
                                            </div> -->
                                            
                                        </div>
                                        <!-- <div class="p-3">
                                            <div class="float-right">
                                                <a href="#" class="text-white-50"><i class="mdi mdi-cube-outline h5"></i></a>
                                            </div>
                                            <p class="font-14 m-0">Last : 1447</p>
                                        </div> -->
                                    </div>
                                </div>
            
                                <div class="col-xl-3 col-md-6">
                                    <div class="card bg-info mini-stat text-white">
                                        <div class="p-3 mini-stat-desc">
                                            <div class="clearfix">
                                                <h6 class="text-uppercase mt-0 float-left text-white-50">Revenue</h6>
                                                <h4 class="mb-3 mt-0 float-right">{{estimetedProfit}}tk</h4>
                                            </div>
                                            <!-- <div>
                                                <span class="badge badge-light text-danger"> -29% </span> <span class="ml-2">From previous period</span>
                                            </div> -->
                                        </div>
                                        <!-- <div class="p-3">
                                            <div class="float-right">
                                                <a href="#" class="text-white-50"><i class="mdi mdi-buffer h5"></i></a>
                                            </div>
                                            <p class="font-14 m-0">Last : $47,596</p>
                                        </div> -->
                                    </div>
                                </div>
                                
                            </div>  
                            <!-- end row -->
    
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <h4 class="mt-0 header-title mb-4">Latest Trasaction</h4>
                                            <div class="table-responsive">
                                                <div class="p-3">
                                                    <button @click.prevent="transitionType = 'order'" :class="{'btn-primary' : transitionType == 'order'}" class="btn">Order</button>
                                                    <button @click.prevent="transitionType = 'payment'" :class="{'btn-primary' : transitionType == 'payment'}"   class="btn">Payment</button>
                                                    <button  @click.prevent="transitionType = 'stock'" :class="{'btn-primary' : transitionType == 'stock'}"  class="btn">Stock</button>
                                                </div>
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr v-if="transitionType != 'stock'">
                                                            <th scope="col">ID No.</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Order Due</th>
                                                            <th scope="col">Total Due</th>
                                                        </tr>
                                                        <tr v-else>
                                                            <th scope="col">ID No.</th>
                                                            <!-- <th scope="col">Name</th> -->
                                                            <th scope="col">Date</th>
                                                            <!-- <th scope="col">Order Due</th> -->
                                                            <th scope="col">Total Due</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody v-if="orders && orders.length">
                                                        <tr v-if="order.type == transitionType" :class="{'active' : order.type === 'Payment'}" v-for="(order, i) in orders" :key="i">
                                                            <th scope="row">{{order.memo}}</th>
                                                            <td v-if="order.customer">{{order.customer.name}}</td>
                                                            <td>{{order.createdAt.split("T")[0].split("-").reverse().join("/")}}</td>
                                                            <td>{{order.payment || order.due}}Tk</td>
                                                            <td v-if="order.customer">{{order.customer.total_due}}Tk</td>
                                                            <td><nuxt-link :to="'/edit-momo?id='+order._id">
                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 19 19" height="19px" id="Layer_1" version="1.1" viewBox="0 0 19 19" width="19px" xml:space="preserve"><g><path d="M8.44,7.25C8.348,7.342,8.277,7.447,8.215,7.557L8.174,7.516L8.149,7.69   C8.049,7.925,8.014,8.183,8.042,8.442l-0.399,2.796l2.797-0.399c0.259,0.028,0.517-0.007,0.752-0.107l0.174-0.024l-0.041-0.041   c0.109-0.062,0.215-0.133,0.307-0.225l5.053-5.053l-3.191-3.191L8.44,7.25z" fill="#231F20"/><path d="M18.183,1.568l-0.87-0.87c-0.641-0.641-1.637-0.684-2.225-0.097l-0.797,0.797l3.191,3.191l0.797-0.798   C18.867,3.205,18.824,2.209,18.183,1.568z" fill="#231F20"/><path d="M15,9.696V17H2V2h8.953l1.523-1.42c0.162-0.161,0.353-0.221,0.555-0.293   c0.043-0.119,0.104-0.18,0.176-0.287H0v19h17V7.928L15,9.696z" fill="#231F20"/></g></svg>
                                                            </nuxt-link></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
            
                                        </div>
                                    </div>
                                </div>
                            </div>
                           <!-- end row -->

                        </div><!-- container fluid -->

                    </div> <!-- Page content Wrapper -->

</template>

<script>
import Main from "~/components/home/main.vue"
import Loader from "~/components/loader/loader.vue"
import {API_URL, token} from "~/plugins/api"
export default {
  components: {Main, Loader},
  data(){
    return {
    transitionType: 'order',
      orders: [],
      isLoading: true,
      totalOrderValue: 0,
      estimetedProfit: 0
    }
  },
  created() {
    this.getOrder()
  },
  methods: {
    getOrder(){
        if(process.browser){
        let url = API_URL(`order`);

        //   let token = "Bearer " + localStorage.getItem("token")
        //   , {headers: {Authorization: token}}
         let brToken = 'Bearer '+localStorage.getItem("token")
          this.$axios.get(url,  {headers: {Authorization: brToken}}).then(response => {
            if(response.status == 200){
                this.orders = response.data
                this.orders.sort((a, b) => {
                    if(a.memo, b.memo){
                        if (parseInt(a.memo) < parseInt(b.memo)) {
                            return -1;
                        }
                        if (parseInt(a.memo) > parseInt(b.memo)) {
                            return 1;
                        }
                    }
                    
                    return 0;
                });
                let totalDue = 0
                for (const item of this.orders) {
                    if(item.type == "order"){
                        totalDue += item.due
                    }
                }
                this.estimetedProfit = (totalDue/100)*10;
                
                this.totalOrderValue = totalDue
            }
          }).catch(err => console.log(err));
      }
    },
  }
}
</script>

<style>
.active {
    background-color: rgb(134, 236, 159);
}
</style>
