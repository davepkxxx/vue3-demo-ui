<template>
  <demo-card
    outline
    class="example"
    :class="{ solid }"
  >
    <slot />
  </demo-card>
</template>
<script setup>
defineProps({
  solid: Boolean,
});
</script>
<style scoped>
.example {
  padding: 24px;
}

.example > :deep(*) {
  margin: 8px;
}

.example.solid {
  background-color: var(--demo-outline);
}
</style>
