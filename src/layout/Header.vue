<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { useStore } from 'vuex';

// data
const store = useStore()
const cart = store.state.cart.cart
const user = store.state.user.user
const auth = store.state.auth
const userRef = ref('Session')

watch(store.state.user, () => {
  console.log('user', user);

  userRef.value = user.name
})



</script>

<template>
  <header class="border-b border-palette-lighter sticky top-0 z-20 bg-white">
    <div class="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
      <RouterLink class=" cursor-pointer" to="/">
        <h1 class="flex items-center">
          <img alt="logo" class="h-10 w-10 mr-1 object-contain" src="./../assets/logo_bag_green.png">
          Shopping C
        </h1>
      </RouterLink>
      <div>
        <div class="flex justify-around gap-4">
          <RouterLink class="text-green-500 relative" to="/cart">
            <font-awesome-icon :icon="['fas', 'cart-shopping']" class="text-xl" />
            <div v-if="cart.qty > 0"
              class="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-4 -translate-y-4">
              {{ cart.qty }}</div>
          </RouterLink>
          <RouterLink class="text-gray-500 relative flex flex-col" to="/auth" v-if="!auth.isAuth">
            <font-awesome-icon :icon="['fas', 'user']" class="text-xl" />
            <small>{{ userRef }}</small>
          </RouterLink>
          <RouterLink class="text-gray-500 relative flex flex-col" to="/auth" v-if="auth.isAuth">
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="text-xl" />
            <small>{{ userRef }}</small>
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>