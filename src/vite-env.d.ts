/// <reference types="vite/client" />
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module 'aos'

interface ImportMetaEnv {
    readonly VITE_TG_BOT_TOKEN?: string
    readonly VITE_TG_CHAT_ID?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
