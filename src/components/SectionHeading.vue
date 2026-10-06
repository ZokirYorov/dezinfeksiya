<template>
  <div class="mx-auto mb-12 max-w-2xl text-center" data-aos="fade-up">
    <h2 class="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{{ title }}</h2>
    <p v-if="subtitle" class="mt-3 text-lg text-slate-600">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>
