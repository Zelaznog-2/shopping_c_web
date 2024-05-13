<script setup lang="ts">
import { ref } from "vue";
import Login from "./Partials/Login.vue"
import Register from "./Partials/Register.vue"
import PasswordReset from "./Partials/PasswordReset.vue"


// data
const action = ref('login')

// methods
const changeAction = (value: string) => {
  action.value = value
}

</script>

<template>
  <div class="container mx-auto mb-20 min-h-screen">
    <div class="flex flex-col items-center mt-12">
      <img src="../../assets/logo_bag_green.png" alt="" class="h-28 w-28">
      <span class="leading-relaxed font-primary font-extrabold text-2xl text-center text-emerald-600 ">
        Iniciar session
      </span>
    </div>
    <div class="flex justify-center mt-10">
      <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-200 shadow-inner overflow-hidden sm:rounded-lg">
        <Login @action="(value: string) => changeAction(value)" v-if="action === 'login'" />
        <Register @action="(value: string) => changeAction(value)" v-else-if="action === 'register'" />
        <PasswordReset @action="(value: string) => changeAction(value)" v-else />
      </div>
    </div>
  </div>
</template>