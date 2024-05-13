<script setup lang="ts">
//import
import { RouterView } from 'vue-router'
import Header from './layout/Header.vue';
import { useStore } from 'vuex';

// data
const store = useStore()

// methods
const getTokenUserId = async () => {
  const user_id = localStorage.getItem('userId');

  if (user_id) {
    const data = {
      user_id: user_id,
    }
    const result = await store.dispatch('auth/loginId', data)
    if (result) {
      setTimeout(() => {
        store.dispatch('user/getMe');
      }, 500);
    }
  } else {
    return null;
  }
}

getTokenUserId()

</script>

<template>
  <Header />
  <div class="flex flex-col justify-between min-h-screen">
    <main>
      <RouterView />
    </main>
    <footer class="py-4 flex justify-center font-primary items-center">Desarrollado por CG
    </footer>
  </div>

</template>
