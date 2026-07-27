<script setup>
import cultivoImage from "@/assets/images/cultivo.webp";
import procesoImage from "@/assets/images/proceso.webp";
import tuesteImage from "@/assets/images/tueste.webp";
</script>

<template>
  <section
    id="origen"
    class="origin-section section-space bg-warm-white"
    aria-labelledby="origin-title"
  >
    <div class="page-container">
      <div class="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p class="eyebrow">DE JAÉN A TU TAZA</p>
          <h2 id="origin-title" class="display-title mt-4">
            Un café cuidado en cada etapa.
          </h2>
          <p class="mt-6 leading-7 text-roast/75">
            Desde la selección de las cerezas hasta el tueste, cuidamos cada
            proceso para conservar la dulzura, el aroma y el carácter del café
            de Jaén.
          </p>
        </div>
        <ol class="grid gap-4 sm:grid-cols-3">
          <li class="process-card rounded-3xl bg-beige p-6">
            <span class="font-display text-4xl text-gold">01</span>
            <h3 class="mt-6 font-display text-2xl">Cosecha</h3>
            <figure
              class="process-visual mt-6 aspect-square w-full overflow-hidden rounded-2xl border border-roast/10 bg-cream shadow-sm"
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
              Cultivado en las zonas altas de Jaén y recolectado cuando las
              cerezas alcanzan su punto óptimo de maduración.
            </p>
          </li>
          <li class="process-card rounded-3xl bg-cream p-6">
            <span class="font-display text-4xl text-gold">02</span>
            <h3 class="mt-6 font-display text-2xl">Beneficio</h3>
            <figure
              class="process-visual mt-6 aspect-square w-full overflow-hidden rounded-2xl border border-roast/10 bg-beige shadow-sm"
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
              Procesado mediante métodos lavado o honey, con fermentación y
              secado controlados para desarrollar perfiles limpios y definidos.
            </p>
          </li>
          <li class="process-card process-card-featured rounded-3xl bg-forest p-6 text-warm-white">
            <span class="font-display text-4xl text-gold">03</span>
            <h3 class="mt-6 font-display text-2xl">Tueste</h3>
            <figure
              class="process-visual mt-6 aspect-square w-full overflow-hidden rounded-2xl border border-gold/30 bg-coffee shadow-sm"
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
              Tostado en lotes para resaltar las características de cada café y
              lograr una taza dulce, aromática y balanceada.
            </p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
