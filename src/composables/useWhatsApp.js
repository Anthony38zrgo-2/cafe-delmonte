import { computed } from 'vue'
import { COMPANY_INFO } from '@/constants/company'

export function useWhatsApp() {
  const createWhatsAppUrl = (message = COMPANY_INFO.whatsappMessage) => {
    const phone = COMPANY_INFO.phone.replace(/\D/g, '')

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
  }

  const whatsappUrl = computed(() => createWhatsAppUrl())

  return {
    createWhatsAppUrl,
    whatsappUrl,
  }
}
