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
                                    <label>NAME</label>
                                    <input v-model="name" type="text" class="form-control" required placeholder="Name"/>
                                </div> 
                            </div>  
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Father Name</label>
                                    <input v-model="father_name" type="text" class="form-control" required placeholder="Father Name"/>
                                </div> 
                            </div>  
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Village</label>
                                    <input v-model="village" type="text" class="form-control" required placeholder="Village"/>
                                </div> 
                            </div> 
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input v-model="phone_number" type="text" class="form-control" required placeholder="Phone Number"/>
                                </div> 
                            </div> 
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Total Bill</label>
                                    <input v-model="total_bill" type="number" class="form-control" required placeholder="Total Due"/>
                                </div> 
                            </div>
 
                            <div class="col-md-12">
                                <button @click.prevent="createCustomer" type="button" class="btn btn-primary waves-effect waves-light">Add Product</button>                    
                            </div>  
                        </div>
                        
                    </div>
                </div>
            </div>

            <h4>{{customerTotal}}</h4>

             <table v-if="customers && customers.length" id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Village</th>
                    <th>Phone Number</th>
                    <th>Father Name</th>
                    <th>PageId</th>
                    <th>Total Bill</th>
                </tr>
                </thead>


                <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                    <td>
                        <nuxt-link :to="`single-customer/?id=${customer._id}`">{{customer.name}}</nuxt-link>
                    </td>
                    <td>{{customer.village}}</td>
                    <td>{{customer.phone_number}}</td>
                    <td>{{customer.father_name}}</td>
                    <td v-if="customer.pageId">{{customer.pageId}}</td>
                    <div v-else>
                        <input v-model="pageId" type="number">
                        <button @click.prevent="updatePageID(customer._id)">Update</button>
                    </div>
                    <td>{{customer.total_due}}</td>
                    <td>
                        <a class="dlt mr-2 pointer text-red">Delete</a>    
                        <a @click.prevent="selectCustomer(customer._id)" class="dlt mr-2 pointer">Select</a>    
                        <a class="dlt pointer">Edit</a>
                    </td>
                </tr>
                
                </tbody>
            </table>
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
    data(){
        return {
            name: '',
            father_name: '',
            phone_number: '',
            village: '',
            total_bill: 0,
            customers: [],
            customerTotal: 0,
            pageId: null
        }
  },
  created() {
    this.getAllCustomer()
  },
//   computed:{
//     totalProductValue(){
//         return 
//     }
//   },
  methods: {
    updatePageID(id){
        if(process.browser){
          let url = API_URL("customer/"+id);
        //   let token = "Bearer " + localStorage.getItem("token")
        //   , {headers: {Authorization: token}}
         let brToken = 'Bearer '+localStorage.getItem("token")
         let data = {
            pageId: this.pageId,
         }

          this.$axios.put(url, data, {headers: {Authorization: brToken}}).then(response => {
            console.log(response)
            if(response.status == 200){
                this.$toast.success("Page ID Updated")
            }
          }).catch(err => console.log(err));
      }
    },
    selectCustomer(id){
        this.$router.push('/order?id='+id)
    },
    getAllCustomer(){
        if(process.browser){
          let url = API_URL("customer");
        //   let token = "Bearer " + localStorage.getItem("token")
        //   , {headers: {Authorization: token}}
         let brToken = 'Bearer '+localStorage.getItem("token")
         console.log('token',brToken)

          this.$axios.get(url,  {headers: {Authorization: brToken}}).then(response => {
            console.log(response)
            if(response.status == 200){
              this.customers = response.data.customer
              this.getCustomerTotalBill()
              // this.products.reduce(acc , red => {
                
              // })
            //   console.log(this.orders)
            }
          }).catch(err => console.log(err));
      }
    },
    createCustomer(){
        if(process.browser){
            let data = {
                name: this.name,
                father_name: this.father_name,
                village: this.village,
                phone_number: this.phone_number,
                total_due: parseInt(this.total_bill)
            }
          let url = API_URL("customer/create-customer");
          let brToken = 'Bearer '+localStorage.getItem("token")
          console.log(brToken)
        console.log(data)
          this.$axios.post(url, data, {headers: {Authorization: brToken}}).then(response => {
            console.log(response)
            if(response.status == 201){
                this.$toast.open({
                    position: "top",
                    message: "Successfully cutomer added",
                    type: "success",
                });   
                this.name = ''
                this.father_name = ''   
                this.phone_number = ''
                this.total_bill = 0
                
                this.getAllCustomer()
            //   console.log(this.orders)
            }
          }).catch(err => {
                this.$toast.open({
                    position: "top",
                    message: "Customer creation faield",
                    type: "warning",
                });        
            });
      }
    },
    getCustomerTotalBill(){
        let total = 0
        this.customers.forEach(customer => {
            total += customer.total_due
        });
        this.customerTotal = total
    }
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