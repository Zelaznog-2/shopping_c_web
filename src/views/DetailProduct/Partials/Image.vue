<script setup lang="ts">
import { defineProps } from 'vue';

// props
defineProps<{
  src: string,
}>()
</script>

<template>
  <div class="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
    <div class="relative h-96">
      <div
        style="display: block; overflow: hidden; position: absolute; inset: 0px; box-sizing: border-box; margin: 0px;">
        <img alt="alt" :src="src" decoding="async" class="transform duration-500 ease-in-out hover:scale-105"
          style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: medium; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
          sizes="100vw">
      </div>
    </div>
  </div>
</template>