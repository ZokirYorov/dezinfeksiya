<template>
  <section id="top" class="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
      <div data-aos="fade-right">
        <span class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-sm ring-1 ring-indigo-100">
          <i class="fa-solid fa-shield-virus" aria-hidden="true"></i>
          {{ t('hero.badge') }}
        </span>
        <h1 class="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {{ t('hero.title') }}
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          {{ t('hero.text') }}
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
              href="#contact"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-700/25 transition hover:bg-indigo-800"
          >
            {{ t('cta.request') }}
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
          <a
              :href="site.phoneHref"
              class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 ring-1 ring-indigo-200 transition hover:bg-indigo-50"
          >
            <i class="fa-solid fa-phone" aria-hidden="true"></i>
            {{ t('cta.call') }}
          </a>
        </div>

        <ul class="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
          <li v-for="point in points" :key="point" class="flex items-center gap-2 text-sm font-medium text-slate-700">
            <i class="fa-solid fa-circle-check text-emerald-500" aria-hidden="true"></i>
            {{ t(point) }}
          </li>
        </ul>
      </div>

      <div class="relative" data-aos="fade-left">
        <div class="absolute -inset-4 -z-0 rounded-[2rem] bg-indigo-200/40 blur-2xl" aria-hidden="true"></div>
        <img
            :src="heroImage"
            :alt="t('hero.imageAlt')"
            width="674"
            height="540"
            fetchpriority="high"
            class="relative w-full rounded-3xl object-cover shadow-2xl"
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import heroImage from '@/assets/logo.png'
import { site } from '@/config/site'

const { t } = useI18n()
const points = ['hero.points.safe', 'hero.points.fast', 'hero.points.city']
</script>
