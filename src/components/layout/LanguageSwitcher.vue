<template>
  <div ref="root" class="relative">
    <button
        type="button"
        class="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-200"
        :aria-label="t('nav.language')"
        :aria-expanded="isOpen"
        aria-haspopup="listbox"
        @click="isOpen = !isOpen"
    >
      <i class="fa-solid fa-globe text-slate-500" aria-hidden="true"></i>
      {{ localeNames[current].short }}
      <i
          class="fa-solid fa-chevron-down text-[10px] text-slate-400 transition-transform"
          :class="{ 'rotate-180': isOpen }"
          aria-hidden="true"
      ></i>
    </button>

    <transition
        enter-from-class="opacity-0 -translate-y-1"
        leave-to-class="opacity-0 -translate-y-1"
        enter-active-class="transition duration-150"
        leave-active-class="transition duration-100"
    >
      <ul
          v-if="isOpen"
          role="listbox"
          :aria-label="t('nav.language')"
          class="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl bg-white py-1 shadow-lg ring-1 ring-slate-200"
      >
        <li v-for="code in codes" :key="code" role="option" :aria-selected="code === current">
          <button
              type="button"
              class="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition hover:bg-slate-50"
              :class="code === current ? 'font-semibold text-indigo-700' : 'text-slate-700'"
              @click="select(code)"
          >
            {{ localeNames[code].name }}
            <i v-if="code === current" class="fa-solid fa-check text-xs" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { languages, localeNames, type Locale } from '@/i18n'

const { t, locale } = useI18n()
const codes = Object.keys(languages) as Locale[]
const current = computed(() => locale.value as Locale)

const root = ref<HTMLElement>()
const isOpen = ref(false)

const select = (code: Locale) => {
  locale.value = code
  isOpen.value = false
}

// Ro'yxatdan tashqariga bosilsa yoki Esc bosilsa yopiladi
const onClickOutside = (e: MouseEvent) => {
  if (!root.value?.contains(e.target as Node)) isOpen.value = false
}
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', onClickOutside)
  document.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside)
  document.removeEventListener('keydown', onKeydown)
})
</script>
