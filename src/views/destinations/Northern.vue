    <template>
	<section class="max-w-5xl mx-auto p-6">
		<h1 class="text-3xl font-semibold text-green-800 mb-4">Northern Province — Gallery</h1>

		<p class="text-gray-700 mb-6">Highlights from the Northern province: volcanic ridges, national parks and canopy trails.</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			<figure v-for="(p, i) in photos" :key="i" class="bg-white rounded shadow overflow-hidden">
				<button class="w-full h-44 p-0 m-0 border-0" @click="open(p)">
					<img :src="p.src" :alt="p.alt" class="w-full h-44 object-cover" loading="lazy" />
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

// Local assets for Northern province
const north = new URL('../../assets/north.jpg', import.meta.url).href
const northernProvince = new URL('../../assets/northern province.jpg', import.meta.url).href
const northernPic = new URL('../../assets/northern.jpg', import.meta.url).href
const province = new URL('../../assets/province.jpg', import.meta.url).href

const photos = [
	{ title: 'Northern Panorama', caption: 'Wide northern landscapes and mountain vistas.', src: north, full: north, alt: 'Northern panorama' },
	{ title: 'Province Highlights', caption: 'Signature scenes from the northern province.', src: northernProvince, full: northernProvince, alt: 'Northern province' },
	{ title: 'Northern Trek', caption: 'A closer look at northern nature and terrain.', src: northernPic, full: northernPic, alt: 'Northern trek' },
	{ title: 'Province View', caption: 'Additional northern province visual from the local collection.', src: province, full: province, alt: 'Province view' }
]

const showLightbox = ref(false)
const current = ref(photos[0])

function open(p) {
	current.value = p
	showLightbox.value = true
}

function closeLightbox() { showLightbox.value = false }
</script>