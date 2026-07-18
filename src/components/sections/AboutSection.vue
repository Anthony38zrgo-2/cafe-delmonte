<script setup>
import coffeeHandsCherries from "@/assets/images/coffee-hands-cherries.webp";
</script>

<template>
  <section
    id="nuestro-cafe"
    class="section-space relative overflow-hidden bg-cream"
    aria-labelledby="about-title"
  >
    <div class="leaf-pattern absolute inset-0 opacity-60"></div>
    <div
      class="page-container relative grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20"
    >
      <figure
        class="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full border-[1.25rem] border-forest bg-forest shadow-2xl shadow-coffee/15"
      >
        <img
          :src="coffeeHandsCherries"
          alt="Manos sosteniendo cerezas maduras de café en el cafetal"
          class="absolute inset-0 h-full w-full object-cover object-center"
          width="1536"
          height="2048"
          loading="lazy"
          decoding="async"
        />
        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-forest/10 to-coffee/95"
        ></div>
        <figcaption
          class="absolute inset-x-0 bottom-0 p-7 text-warm-white sm:p-9"
        >
          <div class="mb-5 h-px w-14 bg-gold"></div>
          <p class="font-display text-3xl leading-tight drop-shadow-sm">
            Producido por nosotros, cuidado desde la semilla.
          </p>
          <p class="mt-4 text-sm leading-6 text-cream/85">
            Cada decisión en la finca protege la calidad del grano y el carácter
            de su origen.
          </p>
        </figcaption>
      </figure>
      <div>
        <p class="eyebrow">Nuestro café</p>
        <h2 id="about-title" class="display-title mt-4">
          Productores de nuestras propias variedades.
        </h2>
        <p class="mt-7 text-xl leading-8 text-roast">
          En Café Delmonte somos productores de nuestras propias variedades de
          café.
        </p>
        <dl class="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          <div class="border-l-2 border-gold pl-4">
            <dt class="text-xs font-bold uppercase tracking-wider text-forest">
              Origen
            </dt>
            <dd class="mt-2 font-display text-xl">Jaén - Cajamarca</dd>
          </div>
          <div class="border-l-2 border-gold pl-4">
            <dt class="text-xs font-bold uppercase tracking-wider text-forest">
              Altura
            </dt>
            <dd class="mt-2 font-display text-xl">1500 a 2000 msnm</dd>
          </div>
          <div class="border-l-2 border-gold pl-4">
            <dt class="text-xs font-bold uppercase tracking-wider text-forest">
              Proceso
            </dt>
            <dd class="mt-2 font-display text-xl">
              Lavado o honey, con secado meticuloso para preservar aromas
              limpios.
            </dd>
          </div>
          <div class="border-l-2 border-gold pl-4">
            <dt class="text-xs font-bold uppercase tracking-wider text-forest">
              Perfil
            </dt>
            <dd class="mt-2 font-display text-xl">Dulce, frutal y floral</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
