<script setup>
defineProps({
  offlineReady: Boolean,
  needRefresh: Boolean,
})

defineEmits(['close', 'updateServiceWorker'])
</script>

<template>
  <div
    v-if="offlineReady || needRefresh"
    role="alert"
    class="new-content-wrapper"
  >
    <div class="mb-2">
      <span v-if="offlineReady">
        App prête pour le hors-ligne
      </span>
      <span v-else>
        Nouveau contenu disponible, cliquer sur "Recharger" pour mettre à jour.
      </span>
    </div>

    <div class="actions">
      <button
        v-if="needRefresh"
        class="button"
        @click="$emit('updateServiceWorker')"
      >
        Recharger
      </button>
      <button
        class="button  secondary"
        @click="$emit('close')"
      >
        Fermer
      </button>
    </div>
  </div>
</template>

<style scoped>
.new-content-wrapper {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #aaa;
  z-index: 1;
  border-radius: 5px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.actions {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;
}
</style>
