<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
} from "vue";
import locations from "@/data/locations.json";
import { GRIND_OPTIONS, Order, QUANTITY_OPTIONS } from "@/models/Order";
import { useWhatsApp } from "@/composables/useWhatsApp";

const props = defineProps({
  product: { type: Object, required: true },
});
const emit = defineEmits(["close"]);
const { createWhatsAppUrl } = useWhatsApp();
const order = reactive(new Order(props.product));
const modal = ref(null);
const closeButton = ref(null);

const provinces = computed(
  () =>
    locations.find(({ department }) => department === order.department)
      ?.provinces ?? [],
);
const whatsappUrl = computed(() => createWhatsAppUrl(order.buildMessage()));
const wholesaleError = computed(
  () =>
    order.requiresWholesaleQuantity &&
    order.wholesaleQuantity !== "" &&
    !order.wholesaleQuantityIsValid,
);

function closeModal() {
  emit("close");
}

function updateWholesaleQuantity(event) {
  order.setWholesaleQuantity(event.target.value);
  event.target.value = order.wholesaleQuantity;
}

function submitOrder() {
  if (!order.isValid) return;
  window.open(whatsappUrl.value, "_blank", "noopener,noreferrer");
  closeModal();
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    closeModal();
    return;
  }
  if (event.key !== "Tab" || !modal.value) return;

  const focusable = [
    ...modal.value.querySelectorAll("button, input, select, textarea, [href]"),
  ].filter((element) => !element.disabled && element.tabIndex !== -1);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

onMounted(async () => {
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", handleKeydown);
  await nextTick();
  closeButton.value?.focus();
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[100] grid place-items-center bg-coffee/75 p-3 backdrop-blur-sm sm:p-6"
      @mousedown.self="closeModal"
    >
      <section
        ref="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-title"
        :aria-describedby="`order-description-${product.id}`"
        class="flex max-h-[94svh] w-full max-w-3xl flex-col overflow-hidden rounded-[1.75rem] bg-warm-white text-coffee shadow-2xl"
      >
        <header
          class="flex items-start justify-between gap-5 border-b border-roast/10 px-5 py-5 sm:px-8 sm:py-6"
        >
          <div>
            <h2
              id="order-title"
              class="font-display text-3xl font-bold sm:text-4xl"
            >
              Pedido
            </h2>
            <p
              class="mt-2 text-xs font-semibold uppercase tracking-[.18em] text-forest"
            >
              Variedad seleccionada:
            </p>
            <p
              class="mt-2 text-2xl font-bold uppercase tracking-[.18em] text-forest"
            >
              {{ product.name }}
            </p>
            <p
              :id="`order-description-${product.id}`"
              class="mt-2 max-w-2xl text-sm leading-6 text-roast/70"
            >
              {{ product.description }}
            </p>
          </div>
          <button
            ref="closeButton"
            type="button"
            class="grid size-10 shrink-0 place-items-center rounded-full border border-roast/15 text-2xl leading-none text-roast transition hover:border-roast hover:bg-cream"
            aria-label="Cerrar pedido"
            @click="closeModal"
          >
            ×
          </button>
        </header>

        <form
          class="overflow-y-auto px-5 py-6 sm:px-8 sm:py-7"
          @submit.prevent="submitOrder"
        >
          <fieldset>
            <legend class="text-sm font-bold">
              1. Selecciona la cantidad
              <span class="text-roast" aria-hidden="true">*</span>
            </legend>
            <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              <label
                v-for="option in QUANTITY_OPTIONS"
                :key="option.value"
                class="cursor-pointer"
              >
                <input
                  v-model="order.quantity"
                  type="radio"
                  name="quantity"
                  :value="option.value"
                  class="peer sr-only"
                  required
                />
                <span
                  class="flex min-h-12 items-center justify-center rounded-xl border border-roast/20 bg-beige px-3 text-center text-sm font-semibold transition peer-checked:border-forest peer-checked:bg-forest peer-checked:text-warm-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold"
                  >{{ option.label }}</span
                >
              </label>
            </div>
            <div v-if="order.requiresWholesaleQuantity" class="mt-4">
              <label for="wholesale-quantity" class="text-sm font-semibold"
                >Cantidad de kilos</label
              >
              <input
                id="wholesale-quantity"
                :value="order.wholesaleQuantity"
                type="text"
                inputmode="numeric"
                autocomplete="off"
                maxlength="3"
                placeholder="Ej. 25"
                class="m-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20 sm:max-w-xs"
                :class="wholesaleError ? 'border-red-600' : 'border-roast/20'"
                :aria-invalid="wholesaleError"
                aria-describedby="wholesale-help"
                @input="updateWholesaleQuantity"
              />
            </div>
          </fieldset>

          <fieldset class="mt-7 border-t border-roast/10 pt-6">
            <legend class="text-sm font-bold">
              2. Elige la presentación
              <span class="text-roast" aria-hidden="true">*</span>
            </legend>
            <div class="mt-3 grid grid-cols-2 gap-2">
              <label class="cursor-pointer"
                ><input
                  :checked="order.presentation === 'ground'"
                  type="radio"
                  name="presentation"
                  value="ground"
                  class="peer sr-only"
                  @change="order.setPresentation('ground')"
                /><span
                  class="flex min-h-12 items-center justify-center rounded-xl border border-roast/20 bg-beige px-3 text-sm font-semibold transition peer-checked:border-forest peer-checked:bg-forest peer-checked:text-warm-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold"
                  >Molido</span
                ></label
              >
              <label class="cursor-pointer"
                ><input
                  :checked="order.presentation === 'whole'"
                  type="radio"
                  name="presentation"
                  value="whole"
                  class="peer sr-only"
                  @change="order.setPresentation('whole')"
                /><span
                  class="flex min-h-12 items-center justify-center rounded-xl border border-roast/20 bg-beige px-3 text-sm font-semibold transition peer-checked:border-forest peer-checked:bg-forest peer-checked:text-warm-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold"
                  >Grano entero</span
                ></label
              >
            </div>
          </fieldset>

          <fieldset v-if="order.presentation === 'ground'" class="mt-6">
            <legend class="text-sm font-bold">
              3. Selecciona el tipo de molido
              <span class="text-roast" aria-hidden="true">*</span>
            </legend>
            <div class="mt-3 grid gap-2 sm:grid-cols-2">
              <label
                v-for="option in GRIND_OPTIONS"
                :key="option.value"
                class="cursor-pointer"
              >
                <input
                  v-model="order.grind"
                  type="radio"
                  name="grind"
                  :value="option.value"
                  class="peer sr-only"
                  required
                />
                <span
                  class="block rounded-xl border border-roast/20 bg-beige px-4 py-3 transition peer-checked:border-forest peer-checked:bg-forest peer-checked:text-warm-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold"
                  ><strong class="block text-sm">{{ option.label }}</strong
                  ><small class="mt-1 block opacity-70">{{
                    option.detail
                  }}</small></span
                >
              </label>
            </div>
          </fieldset>

          <fieldset class="mt-7 border-t border-roast/10 pt-6">
            <legend class="text-sm font-bold">
              4. Datos de entrega
              <span class="font-normal text-roast/60">(opcional)</span>
            </legend>
            <div class="mt-3 grid gap-4 sm:grid-cols-2">
              <label class="text-sm font-semibold"
                >Departamento
                <select
                  :value="order.department"
                  class="mt-2 w-full rounded-xl border border-roast/20 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
                  @change="order.setDepartment($event.target.value)"
                >
                  <option value="">Seleccionar</option>
                  <option
                    v-for="location in locations"
                    :key="location.department"
                    :value="location.department"
                  >
                    {{ location.department }}
                  </option>
                </select>
              </label>
              <label class="text-sm font-semibold"
                >Provincia
                <select
                  v-model="order.province"
                  :disabled="!order.department"
                  class="mt-2 w-full rounded-xl border border-roast/20 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20 disabled:cursor-not-allowed disabled:bg-cream disabled:text-roast/45"
                >
                  <option value="">Seleccionar</option>
                  <option
                    v-for="province in provinces"
                    :key="province"
                    :value="province"
                  >
                    {{ province }}
                  </option>
                </select>
              </label>
              <label class="text-sm font-semibold sm:col-span-2"
                >Dirección de entrega
                <textarea
                  v-model.trim="order.address"
                  rows="2"
                  maxlength="180"
                  placeholder="Calle, número y referencia"
                  class="mt-2 w-full resize-none rounded-xl border border-roast/20 bg-white px-4 py-3 font-normal outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
                ></textarea>
              </label>
            </div>
          </fieldset>

          <div
            class="sticky -bottom-7 mt-7 border-t border-roast/10 bg-warm-white py-5"
          >
            <button
              type="submit"
              :disabled="!order.isValid"
              class="btn-primary w-full disabled:cursor-not-allowed disabled:bg-roast/25 disabled:text-roast/55 disabled:shadow-none"
              :aria-disabled="!order.isValid"
            >
              Pedir por WhatsApp <span aria-hidden="true">↗</span>
            </button>
            <p
              v-if="!order.isValid"
              class="mt-2 text-center text-xs text-roast/60"
            >
              Completa los campos obligatorios para continuar.
            </p>
          </div>
        </form>
      </section>
    </div>
  </Teleport>
</template>
