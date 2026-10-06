<template>
  <section id="services" class="overflow-hidden bg-slate-50 py-14 sm:py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading :title="t('services.title')" :subtitle="t('services.subtitle')" />

      <div class="grid gap-6 md:grid-cols-3">
        <article
            v-for="(item, i) in services"
            :key="item.key"
            class="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-xl"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
        >
          <div class="aspect-[4/3] overflow-hidden">
            <img
                :src="item.image"
                :alt="t(`services.${item.key}.imageAlt`)"
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            >
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-xl font-bold text-slate-900">{{ t(`services.${item.key}.title`) }}</h3>
            <p class="mt-3 flex-1 leading-relaxed text-slate-600">{{ t(`services.${item.key}.text`) }}</p>
            <a href="#contact" class="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-700 hover:text-indigo-900">
              {{ t('cta.order') }}
              <i class="fa-solid fa-arrow-right text-sm transition group-hover:translate-x-1" aria-hidden="true"></i>
            </a>
          </div>
        </article>
      </div>

      <div class="mt-20 grid items-center gap-10 lg:grid-cols-2">
        <img
            :src="peopleImage"
            :alt="t('services.trustImageAlt')"
            width="528"
            height="510"
            loading="lazy"
            decoding="async"
            class="mx-auto w-full max-w-md rounded-3xl"
            data-aos="fade-right"
        >
        <div data-aos="fade-left">
          <img :src="shieldIcon" alt="" width="64" height="64" class="h-16 w-16">
          <h3 class="mt-6 text-2xl font-extrabold text-slate-900 sm:text-3xl">{{ t('services.trustTitle') }}</h3>
          <p class="mt-4 text-lg leading-relaxed text-slate-600">{{ t('services.trustText') }}</p>
          <a
              href="#contact"
              class="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-800"
          >
            {{ t('cta.request') }}
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeading from '../SectionHeading.vue'
import bedbugs from '@/assets/klop.jpg'
import cockroaches from '@/assets/tarakan.jpg'
import scorpions from '@/assets/chayon.jpg'
import peopleImage from '@/assets/people.png'
import shieldIcon from '@/assets/icons.png'

const { t } = useI18n()

const services = [
  { key: 'bedbugs', image: bedbugs },
  { key: 'cockroaches', image: cockroaches },
  { key: 'scorpions', image: scorpions },
]
</script>
