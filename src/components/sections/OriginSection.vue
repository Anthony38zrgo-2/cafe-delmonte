<script setup>
import cultivoImage from "@/assets/images/cultivo.webp";
import procesoImage from "@/assets/images/proceso.webp";
import tuesteImage from "@/assets/images/tueste.webp";
</script>

<template>
  <section
    id="origen"
    class="section-space bg-warm-white"
    aria-labelledby="origin-title"
  >
    <div class="page-container">
      <div class="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p class="eyebrow">De la finca a tu hogar</p>
          <h2 id="origin-title" class="display-title mt-4">
            Un proceso preciso. Un origen que se respeta.
          </h2>
          <p class="mt-6 leading-7 text-roast/75">
            El verdadero café de especialidad hasta tu hogar, con almacén en
            Lima y envíos a todo el Perú.
          </p>
        </div>
        <ol class="grid gap-4 sm:grid-cols-3">
          <li class="rounded-3xl bg-beige p-6">
            <span class="font-display text-4xl text-gold">01</span>
            <h3 class="mt-6 font-display text-2xl">Cultivo</h3>
            <figure
              class="mt-6 aspect-square w-full overflow-hidden rounded-2xl border border-roast/10 bg-cream shadow-sm"
            >
              <img
                :src="cultivoImage"
                alt="Recolección manual de cerezas maduras de café"
                class="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                width="2048"
                height="2048"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p class="mt-3 text-sm leading-6 text-roast/70">
              Cosechado en altura, donde cada cereza madura lentamente.
            </p>
          </li>
          <li class="rounded-3xl bg-cream p-6">
            <span class="font-display text-4xl text-gold">02</span>
            <h3 class="mt-6 font-display text-2xl">Proceso</h3>
            <figure
              class="mt-6 aspect-square w-full overflow-hidden rounded-2xl border border-roast/10 bg-beige shadow-sm"
            >
              <img
                :src="procesoImage"
                alt="Selección y secado cuidadoso de los granos de café"
                class="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                width="2048"
                height="2048"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p class="mt-3 text-sm leading-6 text-roast/70">
              Lavado o honey, con secado meticuloso para preservar aromas
              limpios.
            </p>
          </li>
          <li class="rounded-3xl bg-forest p-6 text-warm-white">
            <span class="font-display text-4xl text-gold">03</span>
            <h3 class="mt-6 font-display text-2xl">Tueste</h3>
            <figure
              class="mt-6 aspect-square w-full overflow-hidden rounded-2xl border border-gold/30 bg-coffee shadow-sm"
            >
              <img
                :src="tuesteImage"
                alt="Granos de café recién tostados saliendo de la tostadora"
                class="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                width="2048"
                height="2048"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p class="mt-3 text-sm leading-6 text-cream/80">
              Tueste medio que revela dulzor, fruta y notas florales.
            </p>
          </li>
        </ol>
      </div>
      <div
        class="mt-14 grid gap-4 rounded-[2rem] border border-roast/10 bg-beige p-6 sm:grid-cols-3 sm:p-8"
      >
        <p class="flex items-center gap-3 font-semibold">
          <span class="text-2xl text-forest" aria-hidden="true">✓</span>Café de
          origen propio
        </p>
        <p class="flex items-center gap-3 font-semibold">
          <span class="text-2xl text-forest" aria-hidden="true">✓</span>En grano
          o molido
        </p>
        <p class="flex items-center gap-3 font-semibold">
          <span class="text-2xl text-forest" aria-hidden="true">✓</span>Envíos a
          todo el Perú
        </p>
      </div>
    </div>
  </section>
</template>
