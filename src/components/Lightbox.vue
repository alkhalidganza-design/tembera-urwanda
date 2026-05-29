<template>
  <div class="lb-overlay" @click.self="close">
    <div class="lb-content">
      <button class="lb-close" @click="close" aria-label="Close">✕</button>
      <img :src="src" :alt="alt" class="lb-image" />
      <div class="lb-caption">{{ caption }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  caption: { type: String, default: '' }
})

const emit = defineEmits(['close'])

function close() { emit('close') }
</script>

<style scoped>
.lb-overlay{
  position:fixed;inset:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:60;padding:20px;
}
.lb-content{position:relative;max-width:1000px;width:100%;background:#fff;border-radius:8px;overflow:hidden}
.lb-image{width:100%;height:auto;display:block}
.lb-caption{padding:12px;color:#244; background:#fff}
.lb-close{position:absolute;top:8px;right:8px;background:rgba(255,255,255,0.8);border:0;padding:6px 8px;border-radius:6px;cursor:pointer}
</style>
