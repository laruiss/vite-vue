<template>
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
  <ReloadPrompt />
  <router-view />
</template>

<script setup>
import { useTimeAgo } from '@vueuse/core'
import ReloadPrompt from '@/components/ReloadPrompt.vue'

// replaced dynamicaly
const date = '__DATE__'
const timeAgo = useTimeAgo(date)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
