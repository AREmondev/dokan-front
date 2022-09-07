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
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">ID No.</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col">Order Due</th>
                                                            <th scope="col">Total Due</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody v-if="orders && orders.length">
                                                        <tr :class="{'active' : order.type === 'Payment'}" v-for="(order, i) in orders" :key="i">
                                                            <th scope="row">#{{i + 1}}</th>
                                                            <td>{{order.customer.name}}</td>
                                                            <td>{{order.createdAt.split("T")[0].split("-").reverse().join("/")}}</td>
                                                            <td>{{order.payment || order.due}}Tk</td>
                                                            <td>{{order.customer.total_due}}Tk</td>
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
         let brToken = token('Bearer')
          this.$axios.get(url,  {headers: {Authorization: brToken}}).then(response => {
            console.log(response)
            if(response.status == 200){
                this.orders = response.data.reverse()
                let totalDue = 0
                for (const item of this.orders) {
                    totalDue += item.due
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
