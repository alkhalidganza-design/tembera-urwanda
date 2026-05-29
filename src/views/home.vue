<script setup>
import heroImage from '../assets/your-image.jpg'
</script>

<template>
  <!-- hero -->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative text-center px-4">
      <h1 class="text-5xl font-bold mb-4">Welcome to Rwanda</h1>
      <p class="text-xl mb-8 text-green-300">the Land of a thousand Hills</p>
    </div>
  </section>
</template>