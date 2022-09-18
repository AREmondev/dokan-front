<template>
    <client-only>
        <div  class="container py-5">
            <form class="w-100 mb-5">
                 <div class="form-row row">
                    <div class="form-group col-md-5">
                        <label for="inputEmail4">Name</label>
                        <input Value="Rohaman Tredurs" disabled type="text" class="form-control" >
                    </div>
                    <div class="form-group col-md-5">
                        <label for="inputEmail4">Village</label>
                        <input value="Andhorail"  disabled type="text" class="form-control" >
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputEmail4">Due</label>
                        <input value="20000" disabled type="text"  class="form-control" >
                    </div>
                </div>
            </form>
            <Stock :userId="userId" :products="products" />
        </div>
    </client-only>
</template>

<script>
import {API_URL, token} from "~/plugins/api"
import Stock from "~/components/stock/stock.vue";
export default {
    components: {Stock },
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