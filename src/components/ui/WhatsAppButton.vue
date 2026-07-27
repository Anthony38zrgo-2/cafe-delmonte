<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { COMPANY_INFO } from "@/constants/company";
import { useWhatsApp } from "@/composables/useWhatsApp";
import featuredCoffee from "@/assets/images/bolsa-geisha-catimor.png";

const panelOpen = ref(false);
const customMessage = ref("");
const { createWhatsAppUrl, whatsappUrl } = useWhatsApp();

const handleFloatingButton = () => {
  if (!panelOpen.value) {
    panelOpen.value = true;
    return;
  }

  window.open(whatsappUrl.value, "_blank", "noopener,noreferrer");
};

const closePanel = () => {
  panelOpen.value = false;
};

const sendCustomMessage = () => {
  const message = customMessage.value.trim();
  if (!message) return;

  window.open(
    createWhatsAppUrl(`Hola, quisiera hacer la siguiente consulta sobre Café Delmonte: ${message}`),
    "_blank",
    "noopener,noreferrer",
  );
};

const handleEscape = (event) => {
  if (event.key === "Escape") closePanel();
};

onMounted(() => document.addEventListener("keydown", handleEscape));
onBeforeUnmount(() => document.removeEventListener("keydown", handleEscape));
</script>

<template>
  <Transition name="whatsapp-panel">
    <aside
      v-if="panelOpen"
      id="whatsapp-questions"
      class="whatsapp-question-panel"
      role="dialog"
      aria-modal="false"
      aria-labelledby="whatsapp-panel-title"
    >
      <button
        type="button"
        class="whatsapp-panel-close"
        aria-label="Cerrar opciones de WhatsApp"
        @click="closePanel"
      >
        ×
      </button>

      <div class="whatsapp-panel-header">
        <span class="whatsapp-panel-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26A9.9 9.9 0 0 1 12.05 2a9.82 9.82 0 0 1 7.02 2.91 9.83 9.83 0 0 1 2.9 7.03c0 5.45-4.44 9.88-9.92 9.88" />
          </svg>
        </span>
        <div>
          <p>{{ COMPANY_INFO.name }}</p>
          <span>En línea · pedidos y consultas</span>
        </div>
      </div>

      <div class="whatsapp-panel-body">
        <figure class="whatsapp-panel-visual">
          <img
            :src="featuredCoffee"
            alt="Bolsa de café Geisha con Catimor de Café Delmonte"
            width="1000"
            height="2400"
          />
          <figcaption>De Jaén a tu taza</figcaption>
        </figure>

        <div class="whatsapp-panel-content">
          <h2 id="whatsapp-panel-title">{{ COMPANY_INFO.whatsapp.panelTitle }}</h2>
          <p class="whatsapp-panel-description">
            {{ COMPANY_INFO.whatsapp.panelDescription }}
          </p>

          <div class="whatsapp-question-list" aria-label="Consultas frecuentes por WhatsApp">
            <a
              v-for="question in COMPANY_INFO.whatsapp.questions"
              :key="question.label"
              :href="createWhatsAppUrl(question.message)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{{ question.label }}</span>
              <i aria-hidden="true">›</i>
            </a>
          </div>

          <form class="whatsapp-custom-message" @submit.prevent="sendCustomMessage">
            <label for="whatsapp-custom-message">¿Tienes otra consulta?</label>
            <textarea
              id="whatsapp-custom-message"
              v-model="customMessage"
              maxlength="200"
              rows="3"
              placeholder="Escribe tu mensaje para enviarlo por WhatsApp"
              required
            ></textarea>
            <div class="whatsapp-message-actions">
              <span aria-live="polite">{{ customMessage.length }}/200</span>
              <button type="submit" :disabled="!customMessage.trim()">
                Enviar <span aria-hidden="true">↗</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </aside>
  </Transition>

  <button
    type="button"
    class="floating-contact"
    :class="{ 'is-active': panelOpen }"
    :aria-expanded="panelOpen"
    aria-controls="whatsapp-questions"
    :aria-label="panelOpen ? 'Abrir pedido general en WhatsApp' : 'Mostrar opciones de pedido por WhatsApp'"
    :title="panelOpen ? 'Abrir WhatsApp' : 'Pedir por WhatsApp'"
    @click="handleFloatingButton"
  >
    <span class="whatsapp-glyph" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26A9.9 9.9 0 0 1 12.05 2a9.82 9.82 0 0 1 7.02 2.91 9.83 9.83 0 0 1 2.9 7.03c0 5.45-4.44 9.88-9.92 9.88" />
      </svg>
    </span>
  </button>
</template>
