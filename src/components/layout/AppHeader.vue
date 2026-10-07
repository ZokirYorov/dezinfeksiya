<template>
  <header
      class="sticky top-0 z-40 border-b transition-colors duration-300"
      :class="scrolled ? 'header-dotted border-slate-200' : 'border-transparent bg-white'"
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
      <a
          href="#top"
          class="flex items-center gap-3 rounded-full bg-white/95 py-1 pl-1 pr-4 transition-shadow"
          :class="{ 'shadow-sm ring-1 ring-slate-200/70': scrolled }"
          @click="closeMenu"
      >
        <img :src="logo" alt="" width="44" height="44" class="h-11 w-11 rounded-full">
        <span class="text-xl font-extrabold text-indigo-900">{{ t('brand') }}</span>
      </a>

      <nav class="hidden lg:block" :aria-label="t('brand')">
        <ul
            class="flex items-center gap-1 rounded-xl bg-white/95 p-1 transition-shadow"
            :class="{ 'shadow-sm ring-1 ring-slate-200/70': scrolled }"
        >
          <li v-for="item in sections" :key="item.id">
            <a
                :href="`#${item.id}`"
                class="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                :class="active === item.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-indigo-700'"
                :aria-current="active === item.id ? 'true' : undefined"
            >{{ t(item.label) }}</a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2 sm:gap-3">
        <LanguageSwitcher />
        <a
            :href="site.phoneHref"
            class="hidden items-center gap-2 rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-800 sm:inline-flex"
        >
          <i class="fa-solid fa-phone" aria-hidden="true"></i>
          {{ site.phone }}
        </a>
        <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/95 text-slate-700 transition-shadow hover:bg-slate-100 lg:hidden"
            :class="{ 'shadow-sm ring-1 ring-slate-200/70': scrolled }"
            :aria-label="isOpen ? t('nav.closeMenu') : t('nav.openMenu')"
            :aria-expanded="isOpen"
            aria-controls="mobile-menu"
            @click="isOpen = !isOpen"
        >
          <i class="fa-solid text-xl" :class="isOpen ? 'fa-xmark' : 'fa-bars'" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <transition
        enter-from-class="opacity-0 -translate-y-2"
        leave-to-class="opacity-0 -translate-y-2"
        enter-active-class="transition duration-200"
        leave-active-class="transition duration-150"
    >
      <nav v-if="isOpen" id="mobile-menu" class="border-t border-slate-200 bg-white lg:hidden">
        <ul class="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
          <li v-for="item in sections" :key="item.id">
            <a
                :href="`#${item.id}`"
                class="block rounded-lg px-4 py-3 text-base font-medium"
                :class="active === item.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50'"
                @click="closeMenu"
            >{{ t(item.label) }}</a>
          </li>
          <li class="pt-2">
            <a
                :href="site.phoneHref"
                class="flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-4 py-3 font-semibold text-white"
            >
              <i class="fa-solid fa-phone" aria-hidden="true"></i>
              {{ site.phone }}
            </a>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import logo from '@/assets/Logo.jpg'
import LanguageSwitcher from './LanguageSwitcher.vue'
import { sections, site } from '@/config/site'
import { useActiveSection } from '@/composables/useActiveSection'

const { t } = useI18n()
const active = useActiveSection(sections.map((s) => s.id))

const isOpen = ref(false)
const scrolled = ref(false)

const closeMenu = () => {
  isOpen.value = false
}

const onScroll = () => {
  scrolled.value = window.scrollY > 10
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>
