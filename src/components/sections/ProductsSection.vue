<script setup>
import { nextTick, ref } from 'vue'
import products from '@/data/products.json'
import OrderModal from '@/components/ui/OrderModal.vue'

const productImages = import.meta.glob('../../assets/images/bolsa-*', {
  eager: true,
  import: 'default',
})

const getProductImage = (imageName) => (
  imageName ? productImages[`../../assets/images/${imageName}`] : null
)

const getTastingNotes = (notes) => notes.split('·').map((note) => note.trim())

const selectedProduct = ref(null)
const triggerButton = ref(null)
const openOrder = (product, event) => {
  selectedProduct.value = product
  triggerButton.value = event.currentTarget
}
const closeOrder = async () => {
  selectedProduct.value = null
  await nextTick()
  triggerButton.value?.focus()
}
</script>

<template>
  <section id="productos" class="section-space bg-beige" aria-labelledby="products-title">
    <div class="page-container">
      <div class="max-w-3xl"><p class="eyebrow">Nuestra cosecha</p><h2 id="products-title" class="display-title mt-4 text-coffee">Una variedad para cada forma de disfrutar el café.</h2><p class="mt-6 max-w-2xl text-base leading-7 text-roast/80 sm:text-lg">Seleccionamos y tostamos cada lote para expresar con claridad su origen, aroma y carácter.</p></div>
      <div class="mt-12 grid gap-5 md:grid-cols-2">
        <article v-for="(product, index) in products" :key="product.id" class="group relative flex min-h-[28rem] overflow-hidden rounded-[2rem] border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl" :class="index === 1 ? 'border-gold bg-coffee text-warm-white' : 'border-roast/15 bg-warm-white text-coffee'">
          <div class="absolute -right-12 -top-12 size-40 rounded-full border-[26px] opacity-10" :class="index === 1 ? 'border-gold' : 'border-roast'"></div>
          <div class="relative z-10 flex min-w-0 flex-1 flex-col p-5 sm:p-7 lg:p-8 xl:p-9">
            <span v-if="product.badge" class="w-fit rounded-full bg-gold px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-coffee">{{ product.badge }}</span>
            <h3 class="font-display text-2xl font-bold sm:text-3xl xl:text-4xl" :class="product.badge ? 'mt-5' : 'mt-1'">{{ product.name }}</h3>
            <p class="mt-5 max-w-xl text-sm leading-6" :class="index === 1 ? 'text-cream/80' : 'text-roast/75'">{{ product.description }}</p>

            <dl class="mt-7 space-y-5 border-t pt-6 text-xs" :class="index === 1 ? 'border-warm-white/15 text-cream/85' : 'border-roast/15 text-roast/75'">
              <div class="flex items-start gap-3">
                <svg class="mt-0.5 size-4 shrink-0" :class="index === 1 ? 'text-gold' : 'text-forest'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 3c-5 0-8 4-8 9s3 9 8 9 8-4 8-9-3-9-8-9Z"/><path d="M8 19c0-6 4-9 8-14"/></svg>
                <div class="min-w-0">
                  <dt class="font-bold">Notas de cata</dt>
                  <dd class="mt-2 flex flex-wrap gap-1.5">
                    <span v-for="note in getTastingNotes(product.notes)" :key="note" class="max-w-full rounded-full border px-2.5 py-1 leading-4" :class="index === 1 ? 'border-gold/30 bg-gold/10 text-cream' : 'border-roast/15 bg-beige text-roast'">{{ note }}</span>
                  </dd>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg class="mt-0.5 size-4 shrink-0" :class="index === 1 ? 'text-gold' : 'text-forest'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 19 6-9 4 5 3-4 5 8"/><path d="M3 19h18"/></svg>
                <div class="min-w-0">
                  <dt class="font-bold">Altitud</dt>
                  <dd class="mt-1 leading-5">{{ product.altitude }}</dd>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <span class="size-4 shrink-0 rounded-full border-2" :class="index === 1 ? 'border-gold' : 'border-forest'" aria-hidden="true"></span>
                <div>
                  <dt class="font-bold">Cuerpo</dt>
                  <dd class="mt-2 flex items-center gap-1.5" role="img" :aria-label="`Cuerpo: ${product.body} de 5`">
                    <span v-for="level in 5" :key="level" class="h-1.5 w-5 rounded-full" :class="level <= product.body ? (index === 1 ? 'bg-gold' : 'bg-forest') : (index === 1 ? 'bg-warm-white/20' : 'bg-roast/15')" aria-hidden="true"></span>
                    <span class="sr-only">Cuerpo: {{ product.body }} de 5</span>
                  </dd>
                </div>
              </div>
            </dl>

            <div class="mt-auto flex flex-col items-start gap-5 pt-8"><p><span class="block text-[10px] font-bold uppercase tracking-widest opacity-60">Precio</span><strong class="mt-1 block font-display text-2xl">{{ product.price }}</strong></p><button type="button" class="btn-primary" :aria-label="`Configurar pedido de ${product.name}`" @click="openOrder(product, $event)">Pedir por WhatsApp <span aria-hidden="true">↗</span></button></div>
          </div>
          <figure v-if="getProductImage(product.image)" class="relative z-10 my-7 mr-4 h-[15rem] w-[6rem] shrink-0 self-start overflow-hidden rounded-[1.5rem] border shadow-inner sm:my-9 sm:mr-7 sm:h-[20rem] sm:w-[8rem] md:mr-4 md:h-[17rem] md:w-[6.5rem] lg:mr-7 lg:h-[20rem] lg:w-[8rem] xl:mr-9 xl:h-[24rem] xl:w-[11rem]" :class="index === 1 ? 'border-gold/35 bg-[#160e09]' : 'border-roast/15 bg-coffee'">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(196,154,87,0.16),_transparent_68%)]"></div>
            <img :src="getProductImage(product.image)" :alt="`Bolsa de café ${product.name}`" class="relative h-full w-full object-contain transition duration-500 ease-out group-hover:scale-[1.025]" width="720" height="1280" loading="lazy" decoding="async" />
            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-coffee/25 to-transparent"></div>
          </figure>
        </article>
      </div>
    </div>
    <OrderModal v-if="selectedProduct" :product="selectedProduct" @close="closeOrder" />
  </section>
</template>
