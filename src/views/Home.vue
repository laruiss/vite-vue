<template>
  <div class="text-center">
    <img alt="Vue logo" src="@/assets/logo.png" class="mx-auto" /> <!-- @ is an alias for /src -->
    <p>
      Some icons from fontawesome:
      <fa-icon :icon="['far', 'building']" />
      <fa-icon :icon="['fas', 'building']" />
      <fa-icon icon="building" /> <!-- Default is solid -->
      <fa-icon icon="power-off" />
    </p>
    <HelloWorld msg="Welcome to Your Vue.js App powered by Vite!"/>
  </div>
</template>

<script>
// @ is an alias for /src, See vite.config.js and https://vitejs.dev/config/#resolve-alias
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
}
</script>
