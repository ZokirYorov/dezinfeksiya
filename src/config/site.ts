// Sayt bo'ylab ishlatiladigan umumiy ma'lumotlar.
export const site = {
    phone: '+998 90 123 45 67',
    phoneHref: 'tel:+998901234567'
} as const

// Menyu bo'limlari: id — sahifadagi <section id="...">, label — i18n kaliti.
export const sections = [
    { id: 'about', label: 'nav.about' },
    { id: 'services', label: 'nav.services' },
    { id: 'faq', label: 'nav.faq' },
    { id: 'contact', label: 'nav.contact' }
] as const
