<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <NavBar />

    <main class="pt-24">
      <router-view />
    </main>

    <Footer />
  </div>
</template>
