<template>
    <div id="product-list-one">
        <h2>Product list one</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">{{ product.name }}</span>
                <span class="price">R{{ product.price }}</span>
            </li>
        </ul>
        <button @click="reducePrice(4)">Decrease</button>
    </div>
</template>

<script>
import store from '@/store'
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
    computed: {
        products() {
            return this.$store.state.products
        },
        ...mapGetters([
            "saleProducts"
        ])
    },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions([
            "reducePrice"
        ])
    },
}
</script>

<style>
#product-list-one {
    text-align: start;
}
</style>