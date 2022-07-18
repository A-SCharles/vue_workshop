<template>
    <div id="product-list-two">
        <h2>Product list two</h2>
        <ul>
            <li v-for="product in saleProducts">
                <span class="name">
                    {{ product.name }}
                </span>

                <span class="price">
                    R{{ product.price }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // props : ['products'],
    computed: {
        products() {
            return this.$store.state.products
        },
        saleProducts() {
            return this.$store.getters.saleProducts
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style>
#product-list-two {
    text-align: start;
}
</style>