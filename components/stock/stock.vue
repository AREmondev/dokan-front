<template>
    <client-only>
        <div >
            
            <form class="w-100">
                <div class="form-row row">
                    <div class="form-group col-md-6">
                        <label for="inputState">Products</label>
                        <select v-model="productId" @change="selectProduct(productId)" id="inputState" class="form-control">
                            <option selected>Products</option>
                            <option :value="pd._id" v-for="pd in products" :key="pd.id">{{pd.name}}</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="qty">Unit Price</label>
                        <input disabled v-model="selectedProduct.price" type="number" class="form-control" id="qty">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="qty">Quentity</label>
                        <input v-model="qty" type="number" class="form-control" id="qty">
                    </div>
                    <div class="form-group col-md-2">
                        <label for="total">Total Price</label>
                        <input disabled v-model="calculteSelectedprice" type="number" class="form-control" id="total">
                    </div>
                </div>
                <button @click.prevent="addselectedProduct" type="submit" class="btn w-100 d-block btn-primary mt-3">Add Products</button>
            </form>
            <div v-if="addedProducts.length > 0" class="added-product mt-5">
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
                <button @click.prevent="createStock" class="btn w-100 d-block btn-primary mt-3">Place Order</button>
            </div>

        </div>
    </client-only>
</template>

<script>
import {API_URL, token} from "~/plugins/api"
export default {
    props: {
        products: {
            type: Array,
            default: [],
            required: true,
        },
        userId: {
            type: String,
            default: "",
            required: true
        }
    },
    data(){
        return {
            productId: '',
            qty: 1,
            unit_price: '',
            selectedProduct: {
                "id": '',
                "name": '',
                "price": '',
                "qty": '',
                "unite_price": '',
            },
            cartTotal: 0,
            cartQty: 0,
            addedProducts: []
        }
    },
    created: {
        getQuery(){
        }
    },
    computed: {
        calculteSelectedprice(){
            return parseInt(this.qty) * parseInt(this.selectedProduct.price)
        },
        calculteAddedPrice(){
            let totalPrice = 0 
            for(let i = 0; i < this.addedProducts.length; i++){
                let price = this.addedProducts[i].total_price
                totalPrice = parseInt(totalPrice) + parseInt(price)
            }
            return totalPrice
        },
        calculteAddedQty(){
            let totalQty = 0 
            for(let i = 0; i < this.addedProducts.length; i++){
                let price = this.addedProducts[i].total_price
                let qty = this.addedProducts[i].qty
                totalQty = parseInt(totalQty) + parseInt(qty)
            }
            return totalQty
        },
        
    },
    created() {
    },
    methods: {
        selectProduct(id){
            if(process.browser){
                let url = API_URL(`product/${id}`);
                let token = "Bearer " + localStorage.getItem("token")
                this.$axios.get(url, {headers: {Authorization: token}}).then(response => {
                    if(response.status == 200){
                        this.selectedProduct.name = response.data.name;
                        this.selectedProduct.price = response.data.price;
                    }
                }).catch(err => console.log(err));
            }
        },
        addselectedProduct(){
            let newSelectedProduct = {
                "_id": this.productId,
                'name' : this.selectedProduct.name,
                'unite_price': this.selectedProduct.price,
                "qty": parseInt(this.qty),
                'total_price': this.calculteSelectedprice,
            }
            const isEmpty = Object.values(newSelectedProduct).some(x => (x == null || x == ''));
            if(isEmpty){
                alert("Fill all field");
                return false;
            }
            this.addedProducts = [...this.addedProducts, newSelectedProduct]
            let totalPrice = 0 
            let totalQty = 0 
            for(let i = 0; i < this.addedProducts.length; i++){
                let price = this.addedProducts[i].total_price
                let qty = this.addedProducts[i].qty
                totalPrice = parseInt(totalPrice) + parseInt(price)
                totalQty = parseInt(totalQty) + parseInt(qty)
            }
            this.cartTotal = totalPrice
            this.cartQty = totalQty
            this.qty = 1
            this.selectedProduct = {
                "name": '',
                "price": '',
                "qty": '',
                "unite_price": '',
            }
        },
        removeFromCart(id){
            this.addedProducts = this.addedProducts.filter(product => product._id != id)
        },
        createStock(){
            if(process.browser){
                let products = {};
                for (const product of this.addedProducts) {
                    products[product._id] = {
                        ...product
                    }
                }
                let data =  {
                    "products": products,
                    "type": 'stock',
                    "customer": null
                }
                console.log(data)
                let url = API_URL(`customer/order`);
                let brToken = 'Bearer '+localStorage.getItem("token")
                this.$axios.post(url, data, {headers: {Authorization: brToken}}).then(response => {
                    console.log(response)
                    if(response.status == 201){
                        this.$toast.open({
                            position: "top",
                            message: "Successfully stock create",
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