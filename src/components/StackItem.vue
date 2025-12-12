<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template class="stackItem">
  <p>{{ title }}</p>
</template>
