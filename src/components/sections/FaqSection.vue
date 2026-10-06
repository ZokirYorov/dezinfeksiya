<template>
  <section id="faq" class="py-14 sm:py-20 lg:py-28">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <SectionHeading :title="t('faq.title')" />

      <div class="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white" data-aos="fade-up">
        <div v-for="(key, index) in questions" :key="key">
          <h3>
            <button
                :id="`faq-q-${index}`"
                type="button"
                class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-slate-900 transition hover:text-indigo-700"
                :aria-expanded="openIndex === index"
                :aria-controls="`faq-a-${index}`"
                @click="toggle(index)"
            >
              {{ t(`faq.${key}.question`) }}
              <i
                  class="fa-solid fa-chevron-down shrink-0 text-sm text-slate-400 transition-transform duration-300"
                  :class="{ 'rotate-180 text-indigo-700': openIndex === index }"
                  aria-hidden="true"
              ></i>
            </button>
          </h3>
          <div
              :id="`faq-a-${index}`"
              role="region"
              :aria-labelledby="`faq-q-${index}`"
              class="grid transition-all duration-300"
              :class="openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
            <div class="overflow-hidden">
              <p class="px-6 pb-5 leading-relaxed text-slate-600">{{ t(`faq.${key}.answer`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeading from '../SectionHeading.vue'

const { t } = useI18n()

const questions = ['q1', 'q2', 'q3']
const openIndex = ref<number | null>(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
