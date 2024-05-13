<script setup lang="ts">
import ImagenPartial from "./Partials/Image.vue"
import DetailPartial from "./Partials/Detail.vue"
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter()
const store = useStore();
const product = store.state.products.products.select

// methods
const checkProduct = () => {
  if (!product) {
    router.replace({ name: "home" })
    return false;
  }
}

checkProduct()

</script>

<template>
  <div class="min-h-screen py-12 sm:pt-20">
    <div
      class="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto"
      v-if="product">
      <ImagenPartial :src="product.image" />
      <DetailPartial :product="product" />
    </div>
  </div>
</template>