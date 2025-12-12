<script setup lang="ts">
import 'primeicons/primeicons.css'

const email = import.meta.env.VITE_EMAIL
const githubUrl = import.meta.env.VITE_GITHUB
const linkedinUrl = import.meta.env.VITE_LINKEDIN
</script>

<template>
  <nav>
    <div>
      <a :href="githubUrl">
        <i class="pi pi-github"></i>
      </a>
      <a :href="linkedinUrl">
        <i class="pi pi-linkedin"></i>
      </a>
      <a :href="`mailto:${email}?subject=Hello`">
        <i class="pi pi-envelope"></i>
      </a>
    </div>
    <div>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Reach out</a>
    </div>
  </nav>
</template>

<style scoped>
nav {
  z-index: 10;
  font-size: 18px;
  text-align: right;
  padding: 1rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-background-soft);
  backdrop-filter: blur(5px);
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(
      90deg,
      var(--theme-blue),
      var(--theme-red),
      var(--theme-orange),
      var(--theme-purple),
      var(--theme-blue)
    )
    1;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media screen and (max-width: 500px) {
  nav {
    font-size: 12px;
  }
}
</style>
