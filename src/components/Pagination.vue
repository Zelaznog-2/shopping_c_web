<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { ListPagination } from '@/Interfase'

defineProps<{
  list: ListPagination
}>()

const emit = defineEmits()

const goPage = (url: String) => {
  const page = url.split('=')
  emit('goPage', page[1])
}


</script>

<template>
  <ul class="flex">
    <li v-for="(item, index) in list" :key="`pagination-${index}`">
      <button class="mx-1 flex h-9 w-9 items-center justify-center rounded-full"
        :class="`${item.active ? 'bg-gradient-to-tr from-green-600 to-green-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out' : 'border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'}`"
        :disabled="!item.url" @click="goPage(item.url)">

        <font-awesome-icon :icon="['fas', 'angle-left']" v-if="item.label.includes('Previous')" />
        <font-awesome-icon :icon="['fas', 'angle-right']" v-else-if="item.label.includes('Next')" />
        <span v-else>{{ item.label }}</span>
      </button>
    </li>
  </ul>
</template>