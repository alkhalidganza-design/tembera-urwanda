<script setup>
import heroImage from '../assets/your-image.jpg'

// Sample data for Rwanda's top destinations
const destinations = [
  {
    id: 1,
    title: 'Volcanoes National Park',
    description: 'Home to the magnificent mountain gorillas and rich bamboo forests.',
    tag: 'Wildlife'
  },
  {
    id: 2,
    title: 'Nyungwe Forest',
    description: 'One of the oldest rainforests in Africa, famous for canopy walks.',
    tag: 'Adventure'
  },
  {
    id: 3,
    title: 'Lake Kivu',
    description: 'Relax by the beautiful inland sea with stunning emerald green waterfronts.',
    tag: 'Relaxation'
  }
]
</script>

<template>
  <div>
    <section
      class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-black/40"></div>

      <div class="relative text-center px-4">
        <h1 class="text-5xl font-bold mb-4">Welcome to Rwanda</h1>
        <p class="text-xl mb-8 text-green-300">The Land of a Thousand Hills</p>
      </div>
    </section>

    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
          Explore Key Destinations
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="place in destinations" 
            :key="place.id"
            class="group relative bg-white rounded-2xl p-6 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl border border-gray-100"
          >
            <span class="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-4">
              {{ place.tag }}
            </span>

            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
              {{ place.title }}
            </h3>

            <p class="text-gray-600">
              {{ place.description }}
            </p>

            <div class="absolute bottom-0 left-0 h-1 w-0 bg-green-500 rounded-b-2xl transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>