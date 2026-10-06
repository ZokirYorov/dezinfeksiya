<template>
  <section id="about" class="overflow-hidden py-14 sm:py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading :title="t('about.title')" :subtitle="t('about.subtitle')" />

      <div class="grid gap-6 md:grid-cols-3">
        <article
            v-for="(item, i) in features"
            :key="item.key"
            class="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
        >
          <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-2xl text-indigo-700">
            <i class="fa-solid" :class="item.icon" aria-hidden="true"></i>
          </div>
          <h3 class="mt-6 text-xl font-bold text-slate-900">{{ t(`about.${item.key}.title`) }}</h3>
          <p class="mt-3 leading-relaxed text-slate-600">{{ t(`about.${item.key}.text`) }}</p>
        </article>
      </div>

      <div
          class="relative mt-16 overflow-hidden rounded-3xl bg-cover bg-center"
          :style="{ backgroundImage: `url(${bannerImage})` }"
          data-aos="zoom-in"
      >
        <div class="bg-gradient-to-r from-indigo-950/90 via-indigo-900/75 to-indigo-900/10 px-6 py-14 sm:px-12 lg:py-20">
          <div class="max-w-lg">
            <p class="text-2xl font-extrabold leading-snug text-white sm:text-3xl">{{ t('about.bannerTitle') }}</p>
            <p class="mt-4 text-indigo-100">{{ t('about.bannerText') }}</p>
            <a
                href="#contact"
                class="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-800 transition hover:bg-indigo-50"
            >
              {{ t('cta.request') }}
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeading from '../SectionHeading.vue'
import bannerImage from '@/assets/cardImage.png'

const { t } = useI18n()

const features = [
  { key: 'fast', icon: 'fa-bolt' },
  { key: 'safe', icon: 'fa-shield-heart' },
  { key: 'experience', icon: 'fa-award' },
]
</script>
