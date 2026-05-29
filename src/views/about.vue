<template>
  <section class="bg-white text-green-900 py-16 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12 text-center">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight">Discover the heart of our tour experience</h1>
        <p class="mt-5 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-8">
          We connect travelers with authentic destinations across Rwanda, blending nature, culture and comfort into every route. Our goal is to make your tour feel effortless, inspiring and unforgettable.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-4">
        <article class="rounded-3xl border border-green-100 bg-green-50 shadow-sm overflow-hidden">
          <div class="h-56 overflow-hidden">
            <img :src="missionImage" alt="Mission" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h2 class="text-xl font-semibold text-green-900 mb-3">Our Mission</h2>
            <p class="text-gray-600 leading-7">
              To offer guided tours that highlight the best of every region, while supporting local communities and sustainable travel.
            </p>
          </div>
        </article>

        <article class="rounded-3xl border border-green-100 bg-green-50 shadow-sm overflow-hidden">
          <div class="h-56 overflow-hidden">
            <img :src="valuesImage" alt="Values" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h2 class="text-xl font-semibold text-green-900 mb-3">Our Values</h2>
            <p class="text-gray-600 leading-7">
              Respect, quality and curiosity shape every itinerary. We choose local partners and meaningful experiences for every traveler.
            </p>
          </div>
        </article>

        <article class="rounded-3xl border border-green-100 bg-green-50 shadow-sm overflow-hidden">
          <div class="h-56 overflow-hidden">
            <img :src="tourImage" alt="Tours" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h2 class="text-xl font-semibold text-green-900 mb-3">What We Offer</h2>
            <p class="text-gray-600 leading-7">
              Tailored tours, expert guides and seamless planning so you can focus on exploring landscapes, culture and local stories.
            </p>
          </div>
        </article>

        <article class="rounded-3xl border border-green-100 bg-green-50 shadow-sm overflow-hidden">
          <div class="h-56 overflow-hidden">
            <img :src="canopyImage" alt="Canopy" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h2 class="text-xl font-semibold text-green-900 mb-3">The Canopy</h2>
            <p class="text-gray-600 leading-7">
              Explore the canopy trail experience, where nature meets adventure high above the forest floor in green, peaceful surroundings.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const missionImage = new URL('../assets/akagera national park.jpg', import.meta.url).href
const valuesImage = new URL('../assets/virunga.jpg', import.meta.url).href
const tourImage = new URL('../assets/culture.jpg', import.meta.url).href
const canopyImage = new URL('../assets/Canopy a.jpg', import.meta.url).href
</script>