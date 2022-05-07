<script setup>
import { useTimeAgo } from '@vueuse/core'
import { ref } from 'vue'
import { useRegisterSW } from 'virtual:pwa-register/vue'

import ReloadPrompt from '@/components/ReloadPrompt.vue'

// replaced dynamicaly
const date = '__DATE__'
const timeAgo = useTimeAgo(date)

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
  <h1>App Vue3+Vite</h1>
  <div
    id="nav"
    class="flex  justify-center  text-lg  font-bold"
  >
    <router-link to="/">
      Home
    </router-link>
    <span class="mx-2">|</span>
    <router-link to="/about">
      About
    </router-link>
  </div>
  <ReloadPrompt
    :offline-ready="offlineReady"
    :need-refresh="needRefresh"
    @close="close()"
    @update-service-worker="updateServiceWorker()"
  />
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
