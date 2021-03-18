<template>
  <div id="nav" class="flex  justify-center  text-lg  font-bold">
    <router-link to="/">Home</router-link>
    <span class="mx-1">|</span>
    <router-link to="/about">About</router-link>
  </div>
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
