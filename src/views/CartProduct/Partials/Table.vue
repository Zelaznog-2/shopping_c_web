<script setup lang="ts">
import type { ProductDetails } from '@/Interface';
import functionUtil from '@/util/functionUtil';
import { useStore } from 'vuex';


// data
const store = useStore()
const cart = store.state.cart.cart;

// methods
const changeQtyProduct = (event: any, product: ProductDetails) => {
  product.qty = event.target.value
  store.dispatch('cart/addProductToCart', product)
}

const deleteProduct = (product: ProductDetails) => {
  store.dispatch('cart/removeProductFromCart', product)
}

</script>

<template>
  <div class="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
    <table class="mx-auto">
      <thead>
        <tr class="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
          <th class="text-emerald-600 font-normal px-6 py-4">Producto</th>
          <th class="text-emerald-600 font-normal px-6 py-4">Cantidad</th>
          <th class="text-emerald-600 font-normal px-6 py-4 hidden sm:table-cell">Precio</th>
          <th class="text-emerald-600 font-normal px-6 py-4">Borrar</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-palette-lighter" v-if="cart.list.length > 0">
        <tr class="text-sm sm:text-base text-gray-600 text-center" v-for="(item, index) in cart.list"
          :key="`item-${index}`">
          <td class="text-emerald-600 font-medium px-4 sm:px-6 py-4 flex items-center">
            <img :src="item.image" :alt="item.name" height="64" width="64" class="hidden sm:inline-flex">
            <RouterLink class="pt-1 ml-3 hover:text-emerald-500" :to="`/details/${item.sku}`">
              {{ item.name }}
            </RouterLink>
          </td>
          <td class="font-primary font-medium px-4 sm:px-6 py-4">
            <input type="number" inputmode="numeric" @change="changeQtyProduct($event, item)" id="variant-quantity"
              name="variant-quantity" min="1" step="1"
              class="text-gray-900 px-4 py-2 border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
              :value="item.qty">
          </td>
          <td class="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
            $
            <span class="text-lg">
              {{ item.price }}
            </span>
          </td>
          <td class="text-red-500 text-2xl font-medium px-4 sm:px-6 py-4">
            <button aria-label="delete-item" class="rounder-lg" @click="deleteProduct(item)">
              <font-awesome-icon :icon="['far', 'circle-xmark']" />
            </button>
          </td>
        </tr>
        <tr class="text-center">
          <td></td>
          <td class="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Subtotal</td>
          <td class="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
            <span class="text-xl">{{ functionUtil.formatCurrency(cart.total) }}</span>
          </td>
          <td></td>
        </tr>
        <tr class="text-center">
          <td></td>
          <td class="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Iva 16%</td>
          <td class="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4"><span class="text-xl">
              {{ functionUtil.formatCurrency(cart.ivaTotal) }}
            </span>
          </td>
          <td></td>
        </tr>
        <tr class="text-center">
          <td></td>
          <td class="font-primary text-base text-gray-600 font-semibold uppercase px-4 sm:px-6 py-4">Total</td>
          <td class="font-primary text-lg text-palette-primary font-medium px-4 sm:px-6 py-4">
            <span class="text-xl">
              {{ functionUtil.formatCurrency(cart.total + cart.ivaTotal) }}
            </span>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>