<template>
  <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
  >{{ t('skipToContent') }}</a>

  <AppHeader />

  <main id="main">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <FaqSection />
    <ContactSection />
  </main>

  <AppFooter />
  <ScrollTopButton />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import ScrollTopButton from './components/ScrollTopButton.vue'
import { useSeo } from './composables/useSeo'

const { t } = useI18n()
useSeo()
</script>
