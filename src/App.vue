<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Nav from './components/Nav.vue'
import About from './views/About.vue'
import PortfolioView from './views/PortfolioView.vue'
import ContactView from './views/ContactView.vue'
import Footer from './components/Footer.vue'

const targetX = ref(0)
const targetY = ref(0)
const haloX = ref(0)
const haloY = ref(0)
let rafId = 0

const handleMouseMove = (e: MouseEvent) => {
  targetX.value = e.clientX
  targetY.value = e.clientY
}

const animateHalo = () => {
  haloX.value += (targetX.value - haloX.value) * 0.12
  haloY.value += (targetY.value - haloY.value) * 0.12
  rafId = requestAnimationFrame(animateHalo)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  rafId = requestAnimationFrame(animateHalo)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="cursor-halo" :style="{ left: haloX + 'px', top: haloY + 'px' }"></div>
  <Nav />
  <HelloWorld />
  <About />
  <PortfolioView />
  <ContactView />
  <Footer />
</template>

<style>
.cursor-halo {
  position: fixed;
  width: 1000px;
  height: 1000px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--theme-purple-30) 0%, transparent 70%);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: opacity 0.3s ease;
  mix-blend-mode: screen;
}
</style>
