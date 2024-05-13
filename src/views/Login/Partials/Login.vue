<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import { schemaLogin } from './validation'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'


// data
const emit = defineEmits();
const params = ref({
  email: '',
  password: ''
})
const error = ref('')
const store = useStore()
const router = useRouter()
const auth = store.state.auth

// methods
const register = () => {
  emit('action', 'register');
}

const passwordReset = () => {
  emit('action', 'password-reset');
}

const login = async () => {
  error.value = '';
  try {
    schemaLogin.validateSync(params.value);
  } catch (err: any) {
    error.value = err.message
    return false
  }
  const result = await store.dispatch('auth/login', params.value)
  if (result) {
    store.dispatch('user/getMe')
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Usuario Registrado",
      showConfirmButton: false,
      timer: 1500
    });
    router.replace({ name: 'home' })
  }

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
        <span class="text-red-400" v-if="auth.errors.email">{{ auth.errors.email }}</span>
      </div>
      <div class="">
        <input v-model="params.password" type="password"
          class="p-2 block w-full text-green-700 rounded-md shadow-md placeholder:text-gray-600"
          placeholder="Contraseña" minlength="8" maxlength="16">
        <span class="text-red-400" v-if="auth.errors.password">{{ auth.errors.password }}</span>
      </div>
      <div>
        <a class="hover:text-green-700 text-gray-600 cursor-pointer" @click="passwordReset">
          <small>¿Olvidaste tu contraseña?</small>
        </a>
      </div>
      <div class="flex justify-end">
        <div class="flex flex-col gap-3">
          <button class="text-green-800 px-2 py-1 hover:bg-green-800 hover:text-white" @click="register">
            Regístrate
          </button>
          <button type="button" :disabled="auth.loading"
            class="bg-green-800 px-2 py-1 text-white hover:text-green-800 hover:bg-white hover:shadow-inner"
            @click="login">
            Iniciar session
          </button>
        </div>
      </div>
    </form>
  </div>
</template>