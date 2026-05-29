<template>
  <section class="max-w-5xl mx-auto p-6">
    <h1 class="text-3xl font-semibold text-green-800 mb-4">Southern Province — Gallery</h1>

    <p class="text-gray-700 mb-6">Experience the Southern province with a curated set of local photos showcasing its unique scenery.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      <figure v-for="(p, i) in photos" :key="i" class="bg-white rounded shadow overflow-hidden">
        <button class="w-full h-52 p-0 m-0 border-0" @click="open(p)">
          <img :src="p.src" :alt="p.alt" class="w-full h-52 object-cover" loading="lazy" />
        </button>
        <figcaption class="p-3 text-sm text-gray-700">
          <div class="font-medium text-green-800">{{ p.title }}</div>
          <div class="text-xs mt-1">{{ p.caption }}</div>
        </figcaption>
      </figure>
    </div>

    <Lightbox v-if="showLightbox" :src="current.full" :alt="current.alt" :caption="current.title + ' — ' + current.caption" @close="closeLightbox" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Lightbox from '../../components/Lightbox.vue'
import south from '../../assets/south.jpg'
import southern from '../../assets/southern.jpg'
import southernProvince from '../../assets/southern province.jpg'

const photos = [
  { title: 'Southern Bay', caption: 'Beautiful southern landscapes with warm light.', src: south, full: south, alt: 'Southern bay' },
  { title: 'Southern Trail', caption: 'A scenic southern hiking trail and open fields.', src: southern, full: southern, alt: 'Southern trail' },
  { title: 'Province Views', caption: 'Rich textures and local scenery of the Southern province.', src: southernProvince, full: southernProvince, alt: 'Southern province view' },
  { title: 'Southern Pro', caption: 'Portrait-style capture of southern life and terrain.', src: southernProvince, full: southernProvince, alt: 'Southern pro' }
]

const showLightbox = ref(false)
const current = ref(photos[0])

function open(p) {
  current.value = p
  showLightbox.value = true
}

function closeLightbox() { showLightbox.value = false }
</script>
