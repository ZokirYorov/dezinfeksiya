<template>
  <footer class="bg-slate-900 text-slate-300">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
      <div>
        <a href="#top" class="flex items-center gap-3">
          <img :src="logo" alt="" width="44" height="44" loading="lazy" class="h-11 w-11 rounded-full">
          <span class="text-xl font-extrabold text-white">{{ t('brand') }}</span>
        </a>
        <p class="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{{ t('footer.description') }}</p>
      </div>

      <nav :aria-label="t('footer.navigation')">
        <h2 class="text-sm font-semibold uppercase tracking-wider text-white">{{ t('footer.navigation') }}</h2>
        <ul class="mt-4 space-y-2">
          <li v-for="item in sections" :key="item.id">
            <a :href="`#${item.id}`" class="text-slate-400 transition hover:text-white">{{ t(item.label) }}</a>
          </li>
        </ul>
      </nav>

      <div>
        <h2 class="text-sm font-semibold uppercase tracking-wider text-white">{{ t('footer.contacts') }}</h2>
        <ul class="mt-4 space-y-3">
          <li>
            <a :href="site.phoneHref" class="flex items-center gap-3 transition hover:text-white">
              <i class="fa-solid fa-phone w-4 text-indigo-400" aria-hidden="true"></i>
              {{ site.phone }}
            </a>
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-location-dot w-4 text-indigo-400" aria-hidden="true"></i>
            <address class="not-italic">{{ t('footer.address') }}</address>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
      © {{ year }} {{ t('brand') }}. {{ t('footer.rights') }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import logo from '@/assets/Logo.jpg'
import { sections, site } from '@/config/site'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>
