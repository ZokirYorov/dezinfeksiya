import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { localeNames, saveLocale, type Locale } from '@/i18n'

const setMeta = (selector: string, content: string) => {
    document.querySelector(selector)?.setAttribute('content', content)
}

// Til almashganda sahifa sarlavhasi, description va <html lang> ham yangilanadi.
export function useSeo() {
    const { t, locale } = useI18n()

    watch(locale, (value) => {
        document.documentElement.lang = value
        document.title = t('meta.title')
        setMeta('meta[name="description"]', t('meta.description'))
        setMeta('meta[property="og:title"]', t('meta.title'))
        setMeta('meta[property="og:description"]', t('meta.description'))
        setMeta('meta[property="og:locale"]', localeNames[value as Locale].og)
        saveLocale(value as Locale)
    }, { immediate: true })
}
