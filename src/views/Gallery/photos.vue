<template>
	<section class="max-w-6xl mx-auto p-6">
		<h1 class="text-3xl font-semibold text-green-800 mb-6">Gallery — Photos</h1>

		<p class="text-gray-700 mb-6">A small selection of photos showcasing the landscapes, people and places that the site celebrates.</p>

		<!-- Masterclass Tour featured area -->
		<div class="mb-8 bg-white rounded shadow p-4">
			<h2 class="text-2xl font-semibold text-green-800 mb-3">Masterclass Tour</h2>
			<p class="text-sm text-gray-700 mb-4">Join our Masterclass Tour to explore curated locations with expert guides. Below are highlights from the tour.</p>

			<div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
				<button v-for="(m, idx) in master" :key="idx" class="block overflow-hidden rounded" @click="open(m)">
					<img :src="m.src" :alt="m.alt" class="w-full h-36 object-cover" loading="lazy" />
				</button>
			</div>

			<div class="flex items-center gap-3">
				<a href="/services" class="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700">Book Masterclass Tour</a>
				<span class="text-sm text-gray-600">Limited seats — reserve your spot.</span>
			</div>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			<figure v-for="(p, i) in photos" :key="i" class="bg-white rounded shadow overflow-hidden">
				<button class="w-full h-48 p-0 m-0 border-0" @click="open(p)">
					<img :src="p.src" :alt="p.alt" class="w-full h-48 object-cover" loading="lazy" />
				</button>
				<figcaption class="p-3 text-sm text-gray-700">
					<div class="font-medium text-green-800">{{ p.title }}</div>
					<div class="text-xs mt-1">{{ p.caption }}</div>
					<div class="text-xs text-gray-500 mt-2">Photo: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" class="underline">Unsplash</a></div>
				</figcaption>
			</figure>
		</div>

		<Lightbox v-if="showLightbox" :src="current.full" :alt="current.alt" :caption="current.title + ' — ' + current.caption" @close="closeLightbox" />
	</section>
</template>

<script setup>
import { ref } from 'vue'
import Lightbox from '../../components/Lightbox.vue'
	// use local assets
	const akagera = new URL('../../assets/Akagera.jpg', import.meta.url).href
	const akagera2 = new URL('../../assets/akagera national park.jpg', import.meta.url).href
	const virunga = new URL('../../assets/virunga.jpg', import.meta.url).href
	const canopy = new URL('../../assets/Canopy a.jpg', import.meta.url).href
	const tourimg = new URL('../../assets/tour.svg', import.meta.url).href
	const yourImage = new URL('../../assets/your-image.jpg', import.meta.url).href

	const master = [
	  { title: 'Akagera Plains', caption: 'Guided wildlife and landscape masterclass.', src: akagera2, full: akagera2, alt: 'Akagera national park' },
	  { title: 'Virunga Ridges', caption: 'Volcanic ridges and panoramic views.', src: virunga, full: virunga, alt: 'Virunga mountains' },
	  { title: 'Canopy Walk', caption: 'Experience the forest canopy.', src: canopy, full: canopy, alt: 'Forest canopy' }
	]

	const photos = [
	  { title: 'Akagera', caption: 'Akagera park vista.', src: akagera, full: akagera, alt: 'Akagera' },
	  { title: 'Virunga', caption: 'Virunga landscape.', src: virunga, full: virunga, alt: 'Virunga' },
	  { title: 'Canopy', caption: 'Tree canopy trail.', src: canopy, full: canopy, alt: 'Canopy' },
	  { title: 'Tour', caption: 'Tour branding image.', src: tourimg, full: tourimg, alt: 'Tour' },
	  { title: 'Local Scene', caption: 'Local daily life photograph.', src: yourImage, full: yourImage, alt: 'Local scene' }
	]

	const showLightbox = ref(false)
	const current = ref(photos[0])

	function open(p) {
	  current.value = p
	  showLightbox.value = true
	}

	function closeLightbox() { showLightbox.value = false }
</script>``