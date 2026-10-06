const token = import.meta.env.VITE_TG_BOT_TOKEN
const chatId = import.meta.env.VITE_TG_CHAT_ID

export class NotConfiguredError extends Error {}

export interface Lead {
    name: string
    phone: string
    message: string
}

export async function sendLead(lead: Lead) {
    if (!token || !chatId) {
        throw new NotConfiguredError('VITE_TG_BOT_TOKEN yoki VITE_TG_CHAT_ID .env faylda yo\'q')
    }

    const text = [
        '🆕 Yangi ariza',
        `👤 Ism: ${lead.name}`,
        `📞 Tel: ${lead.phone}`,
        lead.message && `💬 Izoh: ${lead.message}`,
    ].filter(Boolean).join('\n')

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
        signal: AbortSignal.timeout(15000),
    })
    const data = await res.json().catch(() => null)

    if (!res.ok || !data?.ok) {
        throw new Error(data?.description ?? `HTTP ${res.status}`)
    }
}
