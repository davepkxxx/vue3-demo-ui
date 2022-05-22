<template>
  <div
    class="demo-card"
    :class="{ 'demo-card-outline': outline }"
  >
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "DemoCard",
};
</script>
<script lang="ts" setup>
defineProps<{
  outline: boolean;
}>();
</script>
<style>
.demo-card {
  display: block;
  position: relative;
  background-color: var(--demo-color);
  border-radius: 4px;
  border: 1px solid var(--demo-color);
}

.demo-card-outline {
  border-color: var(--demo-outline);
}
</style>
