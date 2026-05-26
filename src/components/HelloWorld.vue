<script setup>
import { ref } from 'vue'
</script>

<template>
  <section class="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-8">
    <div class="max-w-3xl w-full text-center bg-white rounded-xl shadow-md p-8">
      <h1 class="text-4xl font-bold mb-4">SOS School </h1>
      <p class="text-lg text-gray-700 mb-6">welcome principal Hakizayezu></p>

      <div class="mb-10">
        <ul class="mx-auto grid gap-2 max-w-md text-left">
          <li v-for="person in people" :key="person.name" class="rounded border border-slate-200 px-4 py-3 text-slate-700">
            <strong>{{ person.name }}</strong> — {{ person.role }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
  

