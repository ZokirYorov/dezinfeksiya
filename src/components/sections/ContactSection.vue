<template>
  <section id="contact" class="overflow-hidden bg-gradient-to-b from-white to-indigo-50 py-14 sm:py-20 lg:py-28">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <form
          class="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-10"
          novalidate
          data-aos="fade-up"
          @submit.prevent="submit"
      >
        <h2 class="text-2xl font-extrabold text-slate-900 sm:text-3xl">{{ t('contact.title') }}</h2>
        <p class="mt-2 text-slate-600">{{ t('contact.subtitle') }}</p>

        <div class="mt-8 space-y-5">
          <div>
            <label for="lead-name" class="mb-1.5 block text-sm font-semibold text-slate-700">{{ t('contact.name') }}</label>
            <input
                id="lead-name"
                v-model.trim="form.name"
                type="text"
                autocomplete="name"
                :placeholder="t('contact.namePlaceholder')"
                :aria-invalid="!!errors.name"
                :aria-describedby="errors.name ? 'lead-name-error' : undefined"
                :class="inputClass(errors.name)"
                @input="errors.name = ''"
            >
            <p v-if="errors.name" id="lead-name-error" class="mt-1.5 text-sm text-red-600">{{ t(errors.name) }}</p>
          </div>

          <div>
            <label for="lead-phone" class="mb-1.5 block text-sm font-semibold text-slate-700">{{ t('contact.phone') }}</label>
            <input
                id="lead-phone"
                :value="form.phone"
                type="tel"
                inputmode="tel"
                autocomplete="tel"
                :placeholder="t('contact.phonePlaceholder')"
                :aria-invalid="!!errors.phone"
                :aria-describedby="errors.phone ? 'lead-phone-error' : undefined"
                :class="inputClass(errors.phone)"
                @input="onPhoneInput"
                @focus="keepCursorAfterPrefix"
                @click="keepCursorAfterPrefix"
                @keyup="keepCursorAfterPrefix"
            >
            <p v-if="errors.phone" id="lead-phone-error" class="mt-1.5 text-sm text-red-600">{{ t(errors.phone) }}</p>
          </div>

          <div>
            <label for="lead-message" class="mb-1.5 block text-sm font-semibold text-slate-700">{{ t('contact.message') }}</label>
            <textarea
                id="lead-message"
                v-model.trim="form.message"
                rows="3"
                :placeholder="t('contact.messagePlaceholder')"
                :class="inputClass('')"
            />
          </div>
        </div>

        <div
            v-if="status === 'success' || status === 'error'"
            role="status"
            class="mt-6 flex gap-3 rounded-xl p-4 text-sm"
            :class="status === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-800'"
        >
          <i
              class="fa-solid mt-0.5"
              :class="status === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'"
              aria-hidden="true"
          ></i>
          <span>{{ status === 'success' ? t('contact.success') : t(serverError, { phone: site.phone }) }}</span>
        </div>

        <button
            type="submit"
            class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-700 px-6 py-4 font-semibold text-white transition hover:bg-indigo-800 disabled:cursor-wait disabled:opacity-70"
            :disabled="status === 'sending'"
        >
          <i v-if="status === 'sending'" class="fa-solid fa-spinner animate-spin" aria-hidden="true"></i>
          <i v-else class="fa-solid fa-paper-plane" aria-hidden="true"></i>
          {{ status === 'sending' ? t('contact.sending') : t('contact.submit') }}
        </button>
        <p class="mt-4 text-center text-xs text-slate-500">
          <i class="fa-solid fa-lock mr-1" aria-hidden="true"></i>{{ t('contact.privacy') }}
        </p>
      </form>

      <div class="text-center lg:text-left" data-aos="fade-left">
        <img
            :src="personImage"
            :alt="t('contact.imageAlt')"
            width="461"
            height="437"
            loading="lazy"
            decoding="async"
            class="mx-auto w-full max-w-sm lg:mx-0"
        >
        <p class="mt-6 text-lg font-semibold text-slate-900">{{ t('contact.orCall') }}</p>
        <a :href="site.phoneHref" class="mt-2 inline-flex items-center gap-3 whitespace-nowrap text-2xl font-extrabold sm:text-3xl text-indigo-700 hover:text-indigo-900">
          <i class="fa-solid fa-phone text-xl sm:text-2xl" aria-hidden="true"></i>
          {{ site.phone }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import personImage from '@/assets/person.png'
import { site } from '@/config/site'
import { NotConfiguredError, sendLead } from '@/services/telegram'

const { t } = useI18n()

const PHONE_PREFIX = '+998 '

const form = reactive({ name: '', phone: PHONE_PREFIX, message: '' })
const errors = reactive({ name: '', phone: '' })
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const serverError = ref('')

const inputClass = (error: string) => [
  'w-full rounded-xl border bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:bg-white focus:outline-none focus:ring-4',
  error
    ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
    : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-100',
]

// Raqamni "+998 90 123 45 67" ko'rinishiga keltiradi. "+998 " doim turadi va o'chmaydi.
const formatPhone = (value: string) => {
  let digits = value.replace(/\D/g, '')
  if (digits.startsWith('998')) digits = digits.slice(3)
  // to'liq raqam (+998 bilan) prefiks ustiga paste qilinsa, ikkinchi 998 ni ham olib tashlaymiz
  if (digits.length > 9 && digits.startsWith('998')) digits = digits.slice(3)
  digits = digits.slice(0, 9)
  const parts = [digits.slice(0, 2), digits.slice(2, 5), digits.slice(5, 7), digits.slice(7, 9)]
  return PHONE_PREFIX + parts.filter(Boolean).join(' ')
}

// Kursor "+998 " ichiga kirib qolmasin
const keepCursorAfterPrefix = (e: Event) => {
  const input = e.target as HTMLInputElement
  requestAnimationFrame(() => {
    if ((input.selectionStart ?? 0) < PHONE_PREFIX.length) {
      input.setSelectionRange(input.value.length, input.value.length)
    }
  })
}

const onPhoneInput = (e: Event) => {
  const input = e.target as HTMLInputElement
  form.phone = formatPhone(input.value)
  input.value = form.phone
  errors.phone = ''
}

const validate = () => {
  errors.name = !form.name
    ? 'contact.errors.nameRequired'
    : form.name.length < 2 ? 'contact.errors.nameShort' : ''
  errors.phone = form.phone.replace(/\D/g, '').length === 12 ? '' : 'contact.errors.phoneInvalid'

  const firstInvalid = errors.name ? 'lead-name' : errors.phone ? 'lead-phone' : ''
  if (firstInvalid) document.getElementById(firstInvalid)?.focus()
  return !firstInvalid
}

const submit = async () => {
  if (status.value === 'sending' || !validate()) return

  status.value = 'sending'
  try {
    await sendLead({ ...form })
    status.value = 'success'
    form.name = ''
    form.phone = PHONE_PREFIX
    form.message = ''
  } catch (err) {
    console.error('Ariza yuborilmadi:', err)
    serverError.value = err instanceof NotConfiguredError ? 'contact.errors.notConfigured' : 'contact.errors.network'
    status.value = 'error'
  }
}
</script>
