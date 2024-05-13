<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import { schemaRegister } from './validation';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'


// data
const emit = defineEmits();
const params = ref({
  name: '',
  email: '',
  phone: '',
  password: '',
  password_confirmation: '',
})
const error = ref('')
const store = useStore()
const router = useRouter()
const auth = store.state.auth

// methods
const register = async () => {
  error.value = '';
  try {
    schemaRegister.validateSync(params.value);
  } catch (err: any) {
    error.value = err.message
    return false
  }

  const result = await store.dispatch('auth/register', params.value)
  if (result) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Usuario Registrado",
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() => {
      store.dispatch('user/getMe')
      router.replace({ name: 'home' })
    }, 500);
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Ocurrió un error en el registro",
      showConfirmButton: false,
      timer: 1500
    });
  }
}

const login = () => {

  emit('login');
}
</script>

<template>
  <div class="p-4">
    <form class="flex flex-col gap-6">

      <div class="flex flex-col gap-3">
        <span class="text-red-400">{{ error }}</span>
      </div>

      <div class="">
        <input v-model="params.name" type="text"
          class="p-2 block w-full text-green-700 rounded-md shadow-md placeholder:text-gray-600"
          placeholder="Nombre y Apellido">
      </div>
      <div class="">
        <input v-model="params.phone" type="text"
          class="p-2 block w-full text-green-700 rounded-md shadow-md placeholder:text-gray-600" placeholder="Teléfono">
      </div>
      <div class="">
        <input v-model="params.email" type="text"
          class="p-2 block w-full text-green-700 rounded-md shadow-md placeholder:text-gray-600"
          placeholder="Correo electrónico">
      </div>
      <div class="">
        <input v-model="params.password" type="password"
          class="p-2 block w-full text-green-700 rounded-md shadow-md placeholder:text-gray-600"
          placeholder="Contraseña" minlength="8" maxlength="16">
      </div>
      <div class="">
        <input v-model="params.password_confirmation" type="password"
          class="p-2 block w-full text-green-700 rounded-md shadow-md placeholder:text-gray-600"
          placeholder="Confirmar contraseña" minlength="8" maxlength="16">
      </div>
      <div>
        <a class="hover:text-green-700 text-gray-600 cursor-pointer" @click="login">
          <small>¿Tienes cuenta? Inicia session</small>
        </a>
      </div>
      <div class="flex justify-end">
        <div class="flex flex-col gap-3">
          <button type="button"
            class="bg-green-800 px-2 py-1 text-white hover:text-green-800 hover:bg-white hover:shadow-inner"
            @click="register">
            Regístrate
          </button>
        </div>
      </div>
    </form>
  </div>
</template>