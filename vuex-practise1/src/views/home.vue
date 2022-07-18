<template>
    <h2>I am an actual place</h2>
    <!-- <product-list-one></product-list-one>
  <product-list-two></product-list-two> -->
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
</template>

<script>
import productListOne from '@/components/product-list-one.vue'
import ProductListTwo from '@/components/product-list-two.vue'

export default {
    components: {
        productListOne,
        ProductListTwo
    },
    data() {
        return {
           
        }
    }
}
</script>

<style>
</style>