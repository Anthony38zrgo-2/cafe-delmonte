<script setup>
import { COMPANY_INFO } from "@/constants/company";
</script>
<template>
  <footer class="bg-coffee py-12 text-cream">
    <div
      class="page-container grid gap-9 border-b border-warm-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-end"
    >
      <div>
        <p class="font-display text-3xl font-bold">Café Delmonte</p>
        <p class="mt-3 max-w-md text-sm leading-6 text-cream/65">
          {{ COMPANY_INFO.description }}
        </p>
      </div>
      <nav
        class="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"
        aria-label="Navegación del pie de página"
      >
        <a href="#productos" class="hover:text-gold">Productos</a
        ><a href="#nuestro-cafe" class="hover:text-gold">Nuestro café</a
        ><a href="#origen" class="hover:text-gold">Origen</a
        ><a href="#contacto" class="hover:text-gold">Contacto</a>
      </nav>
    </div>
    <div
      class="page-container flex flex-col gap-2 pt-7 text-xs text-cream/50 sm:flex-row sm:justify-between"
    >
      <p>
        © {{ new Date().getFullYear() }} Café Delmonte. Todos los derechos
        reservados.
      </p>
      <p>Jaén, Cajamarca · Perú</p>
    </div>
  </footer>
</template>
