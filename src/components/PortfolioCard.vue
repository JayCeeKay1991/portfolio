<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  description: string
  year?: string
  stack?: string[]
}>()
</script>

<template>
  <div class="card-wrapper">
    <div class="card">
      <slot name="thumbnail"></slot>
      <div class="details">
        <h1>{{ title }}</h1>
        <h3>{{ year }}</h3>
        <p>{{ description }}</p>
        <ul class="stack" v-if="props.stack?.length">
          <li v-for="tech in props.stack" :key="tech" class="stack-item">
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  padding: 2px;
  border-radius: 20px;
  margin-top: 2rem;
  height: 800px;
  background: linear-gradient(45deg, var(--theme-blue), var(--theme-purple), var(--theme-blue));
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 500px;
  height: 600px;
  border-radius: 18px;
  height: 100%;
  padding: 2rem;
  background-color: var(--color-background);
}

.details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 400px;
}

p {
  font-size: 1.2rem;
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0.5rem 0 0;
  list-style: none;
}

.stack-item {
  font-size: 1rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--theme-blue);
  border-radius: 20px;
  color: var(--theme-blue);
}

@media screen and (max-width: 500px) {
  .card-wrapper {
    transform: scale(0.7);
    transform-origin: top left;
  }

  .details {
    min-width: auto;
  }
}
</style>
