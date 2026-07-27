<script setup>
import { COMPANY_INFO } from '@/constants/company'
</script>

<template>
  <header class="site-header sticky top-0 z-50 border-b border-warm-white/10 bg-coffee/95 text-warm-white shadow-lg shadow-coffee/10 backdrop-blur">
    <div class="header-inner page-container flex min-h-18 items-center justify-between gap-5 py-3">
      <a href="#inicio" class="group flex items-center gap-3" :aria-label="`Ir al inicio de ${COMPANY_INFO.name}`">
        <span class="brand-mark grid size-11 place-items-center rounded-full border border-gold/60 bg-roast font-display text-xl text-cream transition group-hover:bg-forest">CD</span>
        <span><strong class="block font-display text-xl leading-none sm:text-2xl">Café Delmonte</strong><small class="mt-1 block text-[9px] font-bold uppercase tracking-[.22em] text-gold">Jaén · Cajamarca</small></span>
      </a>
      <nav class="primary-nav hidden items-center gap-2 md:flex" aria-label="Navegación principal">
        <a href="#productos" class="nav-link text-sm font-semibold transition hover:text-gold">Productos</a>
        <a href="#nuestro-cafe" class="nav-link text-sm font-semibold transition hover:text-gold">Nuestro café</a>
        <a href="#origen" class="nav-link text-sm font-semibold transition hover:text-gold">Origen</a>
        <a href="#contacto" class="header-cta rounded-full bg-forest px-5 py-2.5 text-sm font-bold transition hover:bg-olive">Pedir ahora</a>
      </nav>
      <a href="#productos" class="mobile-cta rounded-full border border-gold/50 px-4 py-2 text-xs font-bold md:hidden">Ver cafés</a>
    </div>
  </header>
</template>
