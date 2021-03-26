
<script setup lang="ts">
import { useRegisterSW } from 'virtual:pwa-register/vue'

const {
  offlineReady,
  needRefresh,
  updateServiceWorker,
} = useRegisterSW()

const close = async () => {
  offlineReady.value = false
  needRefresh.value = false
}
</script>

<template>
  <div
    v-if="offlineReady || needRefresh"
    class="fixed  right-0  bottom-0  p-2  m-2  border  rounded  border-gray-400  z-1  shadow-md"
    role="alert"
  >
    <div class="mb-2">
      <span v-if="offlineReady">
        App ready to work offline
      </span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <button
      v-if="needRefresh"
      @click="updateServiceWorker()"
      class="bg-[#41B883]  rounded  px-2  py-1  text-white"
    >
      Reload
      <fa-icon icon="sync-alt"/>
    </button>
    <button
      @click="close"
      class="rounded  px-2  py-1"
    >
      Close
      <fa-icon icon="times"/>
    </button>
  </div>
</template>

<style>
button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>
