import { onBeforeUnmount, onMounted, ref } from 'vue'

// Ekranda qaysi bo'lim turganini kuzatadi — menyuda o'sha punkt belgilanadi.
export function useActiveSection(ids: readonly string[]) {
    const active = ref('')
    let observer: IntersectionObserver | undefined

    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) active.value = entry.target.id
            }
        }, { rootMargin: '-45% 0px -50% 0px' })

        ids.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer!.observe(el)
        })
    })

    onBeforeUnmount(() => observer?.disconnect())

    return active
}
