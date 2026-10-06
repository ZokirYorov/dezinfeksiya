<template>
  <transition
      enter-from-class="opacity-0 translate-y-4"
      leave-to-class="opacity-0 translate-y-4"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
  >
    <button
        v-if="visible"
        type="button"
        class="fixed bottom-4 right-4 z-30 sm:bottom-6 sm:right-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-700 text-white shadow-lg transition hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        :aria-label="t('scrollTop')"
        :title="t('scrollTop')"
        @click="scrollToTop"
    >
      <i class="fa-solid fa-arrow-up" aria-hidden="true"></i>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const visible = ref(false)

const onScroll = () => {
  visible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
