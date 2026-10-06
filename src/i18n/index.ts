import en from "./en.json"
import ru from "./ru.json"
import uz from "./uz.json"
import uzCyrl from "./uz-cyrl.json"

export const languages = {
    uz,
    'uz-Cyrl': uzCyrl,
    ru,
    en
}

export type Locale = keyof typeof languages

// short — header'dagi tugmada, name — ochiladigan ro'yxatda ko'rinadi
export const localeNames: Record<Locale, { short: string, name: string, og: string }> = {
    uz: { short: 'UZ', name: "O'zbekcha", og: 'uz_UZ' },
    'uz-Cyrl': { short: 'ЎЗ', name: 'Ўзбекча', og: 'uz_UZ' },
    ru: { short: 'RU', name: 'Русский', og: 'ru_RU' },
    en: { short: 'EN', name: 'English', og: 'en_US' },
}

export const defaultLocale: Locale = 'uz'

const STORAGE_KEY = 'locale'

const isLocale = (value: unknown): value is Locale =>
    typeof value === 'string' && value in languages

export const getInitialLocale = (): Locale => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (isLocale(saved)) return saved
    } catch {
        // localStorage yopiq bo'lishi mumkin (private rejim)
    }
    return defaultLocale
}

export const saveLocale = (locale: Locale) => {
    try {
        localStorage.setItem(STORAGE_KEY, locale)
    } catch {
        // saqlab bo'lmasa ham sayt ishlayveradi
    }
}
