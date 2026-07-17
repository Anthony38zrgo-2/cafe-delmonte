<script setup>
import { COMPANY_INFO } from '@/constants/company'
import { useWhatsApp } from '@/composables/useWhatsApp'
import heroImage from '@/assets/images/cafe-delmonte-hero.jpg'
const { whatsappUrl } = useWhatsApp()
</script>

<template>
  <section id="inicio" class="relative isolate min-h-[calc(100svh-4.5rem)] overflow-hidden bg-coffee text-warm-white">
    <img :src="heroImage" alt="Taza de café de especialidad, granos tostados y cerezas de café en una finca de Jaén, Cajamarca" class="absolute inset-0 h-full w-full object-cover object-[68%_center]" fetchpriority="high" />
    <div class="absolute inset-0 bg-gradient-to-r from-coffee via-coffee/90 to-coffee/15"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-coffee/75 via-transparent to-transparent"></div>
    <div class="page-container relative flex min-h-[calc(100svh-4.5rem)] items-center py-20">
      <div class="max-w-3xl">
        <p class="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.24em] text-gold"><span class="h-px w-10 bg-gold"></span>Café de especialidad peruano</p>
        <h1 class="font-display text-5xl font-bold leading-[.98] tracking-[-.035em] sm:text-6xl lg:text-8xl">Nuestro café,<br /><span class="text-cream">nuestra pasión</span></h1>
        <p class="mt-7 max-w-xl text-lg leading-8 text-cream/90 sm:text-xl">{{ COMPANY_INFO.description }}. Del cafetal de Jaén hasta tu taza.</p>
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#productos" class="btn-light">Descubrir variedades <span aria-hidden="true">↓</span></a>
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="btn-primary">Pedir por WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
        <dl class="mt-14 grid max-w-2xl grid-cols-3 gap-5 border-t border-warm-white/20 pt-7">
          <div><dt class="text-[10px] font-bold uppercase tracking-wider text-gold">Altura</dt><dd class="mt-1 font-display text-lg">1500–2000 <small class="font-sans text-xs">msnm</small></dd></div>
          <div><dt class="text-[10px] font-bold uppercase tracking-wider text-gold">Tueste</dt><dd class="mt-1 font-display text-lg">Medio</dd></div>
          <div><dt class="text-[10px] font-bold uppercase tracking-wider text-gold">Envíos</dt><dd class="mt-1 font-display text-lg">Todo el Perú</dd></div>
        </dl>
      </div>
    </div>
  </section>
</template>
