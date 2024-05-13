<script setup lang="ts">
import { defineProps } from 'vue';
import type { ProductDetails } from '@/Interface';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


// data
const store = useStore()
const router = useRouter()

// props
const props = defineProps<{
  detail: ProductDetails
}>()

const goDetail = () => {
  store.dispatch('products/setProductSelect', props.detail)
  router.push({ name: 'detail-product', params: { sku: props.detail.sku } })
}
</script>

<template>
  <div class="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter" @click="goDetail()">
    <div class="h-72 border-b-2 border-palette-lighter relative">
      <div class="block overflow-hidden absolute inset-0 box-border m-0">
        <img :alt="detail.name" :src="detail.image" decoding="async"
          class="transform duration-500 ease-in-out hover:scale-110 absolute inset-0 box-border m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"
          style="border: medium;" sizes="100vw">
      </div>
    </div>
    <div class="h-48 relative">
      <div class="text-2xl px-4 pt-2 font-semibold flex flex-col">
        <span class="mb-[-10px]">
          <small class="text-[12px] text-gray-400 font-light">{{ detail.sku }}</small>
        </span>
        {{ detail.name }}
      </div>
      <div class="text-large text-gray-600 pt-4 pl-4 font-light">
        Lorem ipsum dolor sit amet consectetur .
      </div>
      <div
        class="text-emerald-600 font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 py-2 bg-green-100 rounded-tl-sm triangle">
        $
        <span class="text-lg">{{ detail.price }}</span>
      </div>
    </div>
  </div>
</template>