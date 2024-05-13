<script setup lang="ts">
import { useStore } from 'vuex';
import CardProduct from '../components/CardProduct.vue';
import Pagination from '../components/Pagination.vue';

// data
const store = useStore()
const products = store.state.products.products

// methods
const getProducts = (page: number = 1) => {
  store.dispatch('products/getProducts', page)
}

getProducts()
</script>

<template>
  <div class="mx-auto max-w-6xl">
    <div class="">
      <h1
        class="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
        Shopping C!</h1>
      <p class="max-w-xl text-center px-2 mx-auto text-base text-gray-600">¡Los productos más importantes del país los
        tenemos aquí!</p>
    </div>
    <div class="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
      <CardProduct :detail="item" v-for="(item, index) in products.data" :key="`product-${index}`" />
    </div>
    <div class="mt-20 flex justify-center">
      <Pagination :list="products.links" @goPage="(page) => getProducts(page)" />
    </div>
  </div>
</template>
