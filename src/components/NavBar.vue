<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import logo from '../assets/tour.jpg'

// Track state of each dropdown menu
const isGalleryOpen = ref(false)
const isDestinationOpen = ref(false)
const navRef = ref(null)

function toggleGallery() {
  isGalleryOpen.value = !isGalleryOpen.value
  if (isGalleryOpen.value) isDestinationOpen.value = false
}

function toggleDestination() {
  isDestinationOpen.value = !isDestinationOpen.value
  if (isDestinationOpen.value) isGalleryOpen.value = false
}

function closeAll() {
  isGalleryOpen.value = false
  isDestinationOpen.value = false
}

function onDocClick(e) {
  if (!navRef.value) return
  if (!navRef.value.contains(e.target)) closeAll()
}

onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<template>
  <nav ref="navRef" class="bg-green-800 text-white px-8 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <img :src="logo" class="h-10 w-10 object-cover rounded-full" alt="Tembera logo">
    </div>
    <ul class="flex gap-10 items-center justify-end">
      <li><RouterLink to="/" class="hover:text-yellow-300">Home</RouterLink></li>
      <li><RouterLink to="/about" class="hover:text-yellow-300">About</RouterLink></li>
      <li><RouterLink to="/services" class="hover:text-yellow-300">Services</RouterLink></li>
      
      <!-- Gallery Dropdown -->
      <li class="relative cursor-pointer py-2">
        <span
          class="hover:text-yellow-300 flex items-center gap-1 select-none"
          role="button"
          tabindex="0"
          @click.stop="toggleGallery"
          @keydown.enter.stop="toggleGallery"
        >
          Gallery <span class="text-xs transition-transform duration-200" :class="{ 'rotate-180': isGalleryOpen }">▼</span>
        </span>

        <!-- Dropdown Menu Box (Using mt-2 adds a stable bridge so mouse doesn't get lost) -->
        <ul
          v-show="isGalleryOpen"
          class="absolute left-0 top-full mt-1 bg-white text-green-900 rounded shadow-lg py-2 w-48 z-50 border border-gray-100"
        >
          <li>
            <RouterLink to="/gallery/photos" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors" @click="closeAll">Photos</RouterLink>
          </li>
          <li>
            <RouterLink to="/gallery/videos" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors" @click="closeAll">Videos</RouterLink>
          </li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative cursor-pointer py-2">
        <span
          class="hover:text-yellow-300 flex items-center gap-1 select-none"
          role="button"
          tabindex="0"
          @click.stop="toggleDestination"
          @keydown.enter.stop="toggleDestination"
        >
          Destination <span class="text-xs transition-transform duration-200" :class="{ 'rotate-180': isDestinationOpen }">▼</span>
        </span>

        <!-- Dropdown Menu Box -->
        <ul
          v-show="isDestinationOpen"
          class="absolute left-0 top-full mt-1 bg-white text-green-900 rounded shadow-lg py-2 w-48 z-50 border border-gray-100"
        >
          <li>
            <RouterLink to="/dest/northern" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors" @click="closeAll">Northern</RouterLink>
          </li>
          <li>
            <RouterLink to="/dest/southern" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors" @click="closeAll">Southern</RouterLink>
          </li>
          <li>
            <RouterLink to="/dest/eastern" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors" @click="closeAll">Eastern</RouterLink>
          </li>
          <li>
            <RouterLink to="/dest/western" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors" @click="closeAll">Western</RouterLink>
          </li>
          <li>
            <RouterLink to="/dest/kigali" class="block px-4 py-2 hover:bg-green-50 hover:text-green-700 transition-colors" @click="closeAll">Kigali</RouterLink>
          </li>
        </ul>
      </li>
      
      <li><RouterLink to="/contacts" class="hover:text-yellow-300">Contacts</RouterLink></li>
    </ul>
  </nav>

  <!-- This is where your clicked pages will render dynamically -->
  <main class="p-8">
    <RouterView />
  </main>
</template>