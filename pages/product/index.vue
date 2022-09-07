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
                                    <div class="dropdown">
                                        <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="ti-settings mr-1"></i> Settings
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                            <div class="dropdown-divider"></div>
                                            <a class="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end col -->
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
                                    <label>Price</label>
                                    <input v-model="price" type="number" class="form-control" required placeholder="Price"/>
                                </div> 
                            </div>  
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>In Stock</label>
                                    <input v-model="stock" type="text" class="form-control" required placeholder="10"/>
                                </div> 
                            </div>  
                            <div class="col-md-12">
                                <button @click.prevent="createProduct" type="button" class="btn btn-primary waves-effect waves-light">Add Product</button>                    
                            </div>  
                        </div>
                        
                    </div>
                </div>
            </div>
            <p>Total Product Value {{total}}</p>
             <table v-if="products && products.length" id="datatable" class="table table-bordered dt-responsive nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Expire Date</th>
                    <th>Total valuation</th>
                </tr>
                </thead>


                <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.countInStock}}</td>
                    <td>{{product.expireDate}}</td>
                    <td>{{product.price * product.countInStock}}</td>
                    <td>
                        <a class="dlt mr-2 pointer text-red">Delete</a>    
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
import {API_URL} from "~/plugins/api"
export default{
    data(){
        return {
            name: '',
            price: 0,
            stock: 0,
            products: [],
            total: 0,
        }
  },
  created() {
    this.getAllProduct()
  },
//   computed:{
//     totalProductValue(){
//         return 
//     }
//   },
  methods: {
    totalProductValue() {  
        console.log(this.products) 
        if(this.products){  
            let total = 0
            for (const product of this.products) {
                let price = product.price * product.countInStock
                console.log(price)
                total += price
            }
            console.log(total)
            this.total = total
        }
    },
    getAllProduct(){
        if(process.browser){
          let url = API_URL("product");
        //   let token = "Bearer " + localStorage.getItem("token")
        //   , {headers: {Authorization: token}}
          this.$axios.get(url).then(response => {
            if(response.status == 200){
                this.products = response.data
                this.totalProductValue()
            //   console.log(this.orders)
            }
          }).catch(err => console.log(err));
      }
    },
    createProduct(){
        if(process.browser){
            let data = {
                name: this.name,
                price: this.price,
                countInStock: this.stock,
                expireDate: new Date()
            }
          let url = API_URL("product/create");
          this.$axios.post(url, data).then(response => {
            console.log(response)
            if(response.status == 201){
                this.stock = ''
                this.price = ''
                this.name = ''
                this.$toast.open({
                    position: "top",
                    message: "Successfully product added",
                    type: "success",
                });        
            //   console.log(this.orders)
            }
          }).catch(err => {
                this.$toast.open({
                    position: "top",
                    message: "Product creation faield",
                    type: "warning",
                });     
          });
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