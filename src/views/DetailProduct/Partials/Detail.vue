<script setup lang="ts">
import type { ProductDetails } from '@/Interface';
import { defineProps, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

// props
const props = defineProps<{
  product: ProductDetails
}>()

// data
const store = useStore()
const qty = ref(1)


// methods
const addToCart = () => {
  const product = {
    ...props.product,
    qty: qty.value
  }

  store.dispatch('cart/addProductToCart', product)
}

</script>

<template>
  <div class="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
    <div class=" font-primary">
      <h1 class="leading-relaxed font-extrabold text-3xl text-emerald-500 py-2 sm:py-4 flex flex-col">
        <span class="mb-[-20px]">
          <small class="text-[12px] text-gray-400 font-light">{{ product.sku }}</small>
        </span>
        {{ product.name }}
      </h1>
      <p class="font-medium text-gray-400 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      <div class="text-xl text-emerald-500 font-medium py-4 px-1">
        $ <span class="text-2xl">{{ product.price }}</span>
      </div>
    </div>
    <div class="w-full">
      <div class="flex justify-start space-x-2 w-full">
        <div class="flex flex-col items-start space-y-1 flex-grow-0">
          <label class="text-gray-500 text-base">Cantidad.</label>
          <input type="number" inputmode="numeric" id="quantity" name="quantity" min="1" step="1"
            class="text-gray-900 px-4 py-2 border block border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
            v-model="qty">
        </div>
      </div>
      <div class="flex justify-around gap-4">
        <RouterLink to="/"
          class="pt-3 pb-3 bg-gray-400 text-gray-800 hover:text-white w-full mt-4 rounded-sm font-primary font-semibold text-xl flex justify-center items-center  hover:bg-gray-500 cursor-none">

          <font-awesome-icon :icon="['fas', 'angle-left']" class="text-xl mr-2" />
          Ir al Inicio

        </RouterLink>

        <button @click="addToCart"
          class="pt-3 pb-3 bg-green-400 text-emerald-800 hover:text-white w-full mt-4 rounded-sm font-primary font-semibold text-xl flex justify-center items-center  hover:bg-green-600 cursor-none">

          Agregar al
          <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-xl ml-2" />

        </button>
      </div>
    </div>
  </div>
</template>