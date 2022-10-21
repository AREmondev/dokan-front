<template>
    <client-only>
        <div class="px-2 py-4">
            
            <form class="w-100">
                <div class="form-row row">
                    <div v-if="transition" class="form-group col-md-4 mb-4">
                        <label for="memo">Order ammount </label>
                        <input disabled v-model="transition.due" type="string" class="form-control" id="memo">
                    </div>
                    <div class="form-group col-md-4">
                        <label for="memo">Memo</label>
                        <input v-model="memo" type="string" class="form-control" id="memo">
                    </div>
                </div>
                <button @click.prevent="updateMomo" type="submit" class="btn w-100 d-block btn-primary mt-3">Update Memo</button>
            </form>

        </div>
    </client-only>
</template>

<script>
import {API_URL, token} from "~/plugins/api"
export default {
    props: {
    },
    data(){
        return {
            memo: ''
        }
    },
    created() {
        this.getMomo()
    },
    computed: {
        
    },
    methods: {
        getMomo(){
            console.log('memo')
            let brToken = 'Bearer '+localStorage.getItem("token")
            
            let url = API_URL(`customer/order/${this.$route.query.id}`);
            this.$axios.get(url, {headers: {Authorization: brToken}}).then(response => {
                    console.log(response)
                    if(response.status == 200){
                        this.transition = response.data.transition;
                        this.memo = this.transition.memo
                        // this.$router.push("/all-orders")
                        
                    }
                }).catch(err => {
                    this.$toast.open({
                        position: "top",
                        message: "Order creation faield",
                        type: "warning",
                    });
                });
        },
        updateMomo(){
            console.log('memo')
            let brToken = 'Bearer '+localStorage.getItem("token")
            let data = {
                memo: this.memo
            }
            let url = API_URL(`customer/order/${this.$route.query.id}`);
            this.$axios.patch(url, data, {headers: {Authorization: brToken}}).then(response => {
                this.$router.push("/")
                if(response.status == 200){
                        // this.$router.push("/all-orders")
                        this.$toast.open({
                            position: "top",
                            message: "Successfully order create",
                            type: "success",
                        });
                    }
                }).catch(err => {
                    this.$toast.open({
                        position: "top",
                        message: "Order creation faield",
                        type: "warning",
                    });
                });
        },
        createOrder(){
            if(process.browser){
                let products = {};
                for (const product of this.addedProducts) {
                    products[product._id] = {
                        ...product
                    }
                }
                console.log(products)
                let data =  {
                    "products": products,
                    "type": 'order',
                    "customer": this.$route.query.id,
                    "memo": this.memo
                }
                console.log(data)
                let url = API_URL(`customer/order`);
                let brToken = 'Bearer '+localStorage.getItem("token")
                this.$axios.post(url, data, {headers: {Authorization: brToken}}).then(response => {
                    console.log(response)
                    if(response.status == 201){
                        // this.$router.push("/all-orders")
                        this.$toast.open({
                            position: "top",
                            message: "Successfully order create",
                            type: "success",
                        });
                    }
                }).catch(err => {
                    this.$toast.open({
                        position: "top",
                        message: "Order creation faield",
                        type: "warning",
                    });
                });
            }
        }
    }
}
</script>

<style>

</style>