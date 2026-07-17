<script setup>
import { PRODUCTS } from '@/constants/products'
import { useWhatsApp } from '@/composables/useWhatsApp'
const { createWhatsAppUrl } = useWhatsApp()
const productUrl = (name) => createWhatsAppUrl(`Hola, quisiera pedir la variedad ${name} de Café Delmonte. ¿Podrían darme más información?`)
</script>

<template>
  <section id="productos" class="section-space bg-beige" aria-labelledby="products-title">
    <div class="page-container">
      <div class="max-w-3xl"><p class="eyebrow">Nuestra cosecha</p><h2 id="products-title" class="display-title mt-4 text-coffee">Una variedad para cada forma de disfrutar el café.</h2><p class="mt-6 max-w-2xl text-base leading-7 text-roast/80 sm:text-lg">Seleccionamos y tostamos cada lote para expresar con claridad su origen, aroma y carácter.</p></div>
      <div class="mt-12 grid gap-5 md:grid-cols-2">
        <article v-for="(product, index) in PRODUCTS" :key="product.name" class="group relative flex min-h-[28rem] flex-col overflow-hidden rounded-[2rem] border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-9" :class="index === 1 ? 'border-gold bg-coffee text-warm-white' : 'border-roast/15 bg-warm-white text-coffee'">
          <div class="absolute -right-12 -top-12 size-40 rounded-full border-[26px] opacity-10" :class="index === 1 ? 'border-gold' : 'border-roast'"></div>
          <div class="flex items-start justify-between gap-4"><p class="text-xs font-bold uppercase tracking-[.18em]" :class="index === 1 ? 'text-gold' : 'text-forest'">{{ product.notes }}</p><span v-if="product.badge" class="rounded-full bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-coffee">{{ product.badge }}</span></div>
          <h3 class="mt-7 max-w-md font-display text-3xl font-bold sm:text-4xl">{{ product.name }}</h3>
          <p class="mt-5 max-w-xl text-sm leading-6" :class="index === 1 ? 'text-cream/80' : 'text-roast/75'">{{ product.description }}</p>
          <dl class="mt-7 grid grid-cols-2 gap-x-4 gap-y-3 border-t pt-6 text-xs" :class="index === 1 ? 'border-warm-white/15 text-cream/85' : 'border-roast/15 text-roast/75'">
            <div><dt class="font-bold">Origen</dt><dd class="mt-1">Jaén - Cajamarca</dd></div><div><dt class="font-bold">Tueste</dt><dd class="mt-1">Medio</dd></div><div class="col-span-2"><dt class="font-bold">Presentación</dt><dd class="mt-1">En grano o molido según preferencia.</dd></div>
          </dl>
          <div class="mt-auto flex flex-col items-start justify-between gap-5 pt-8 sm:flex-row sm:items-end"><p><span class="block text-[10px] font-bold uppercase tracking-widest opacity-60">Precio</span><strong class="mt-1 block font-display text-2xl">{{ product.price }}</strong></p><a :href="productUrl(product.name)" target="_blank" rel="noopener noreferrer" class="btn-primary" :aria-label="`Pedir ${product.name} por WhatsApp`">Pedir por WhatsApp <span aria-hidden="true">↗</span></a></div>
        </article>
      </div>
    </div>
  </section>
</template>
