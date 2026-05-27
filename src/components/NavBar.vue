<script setup>
import sosImage from '../assets/sos.svg'
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur-sm shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img :src="sosImage" alt="SOS" class="h-10 w-10 rounded-2xl bg-white/0 shadow-sm object-contain" />
        <div>
          <p class="text-sm font-semibold text-slate-900">SOS Local Site</p>
          <p class="text-xs text-slate-500">Technical High School</p>
        </div>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-slate-700 text-sm font-medium">
        <a href="#home" class="transition hover:text-blue-600">Home</a>
        <a href="#about" class="transition hover:text-blue-600">About</a>
        <a href="#contact" class="transition hover:text-blue-600">Contact</a>
      </nav>
    </div>
  </header>
</template>