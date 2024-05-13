<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import { schemaForgotPassword } from './validation'

// data
const emit = defineEmits();
const params = ref({
  email: ''
})
const error = ref('')

// methods
const passwordReset = () => {
  error.value = '';
  try {
    schemaForgotPassword.validateSync(params.value);
  } catch (err: any) {
    error.value = err.message
    console.log('error schema', error.value);
  }
  console.log('Password reset', params.value);

}

const login = () => {
  emit('action', 'login');
}
</script>

<template>
  <div class="p-4">
    <form class="flex flex-col gap-6">

      <div class="flex flex-col gap-3">
        <span class="text-red-400">{{ error }}</span>
      </div>

      <div class="">
        <input v-model="params.email" type="text"
          class="p-2 block w-full text-green-700 rounded-md shadow-md placeholder:text-gray-600"
          placeholder="Correo electrónico">
      </div>
      <div>
        <a class="hover:text-green-700 text-gray-600 cursor-pointer" @click="login">
          <small>Inicia session</small>
        </a>
      </div>
      <div class="flex justify-end">
        <div class="">
          <button type="button"
            class="bg-green-800 px-2 py-1 text-white hover:text-green-800 hover:bg-white hover:shadow-inner"
            @click="passwordReset">
            Restablecer contraseña
          </button>
        </div>
      </div>
    </form>
  </div>
</template>