<script setup>
import { COMPANY_INFO } from '@/constants/company'
import { useWhatsApp } from '@/composables/useWhatsApp'
const { whatsappUrl } = useWhatsApp()
</script>
<template>
  <section id="contacto" class="contact-section relative overflow-hidden bg-forest py-20 text-warm-white sm:py-24" aria-labelledby="contact-title">
    <div class="absolute -right-24 -top-24 size-80 rounded-full border-[55px] border-gold/10"></div>
    <div class="contact-panel page-container relative text-center"><p class="text-xs font-bold uppercase tracking-[.24em] text-gold">Haz tu pedido</p><h2 id="contact-title" class="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">El verdadero café de especialidad hasta tu hogar.</h2><p class="mx-auto mt-6 max-w-2xl text-base leading-7 text-cream/85 sm:text-lg">Cuéntanos qué variedad deseas y si la prefieres en grano o molida. Te atenderemos directamente por WhatsApp.</p><a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-light mt-9" :aria-label="`Escribir a Café Delmonte al ${COMPANY_INFO.phoneDisplay}`">Escribir al {{ COMPANY_INFO.phoneDisplay }} <span aria-hidden="true">↗</span></a><p class="mt-6 text-sm text-cream/70">Almacén en Lima · Envíos a todo el Perú</p></div>
  </section>
</template>
