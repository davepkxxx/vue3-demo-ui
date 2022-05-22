<template>
  <component
    :is="component"
    :href="href"
    class="demo-button"
    :class="classes"
  >
    <slot />
  </component>
</template>
<script lang="ts">
import { computed } from "vue";

export default {
  name: "DemoButton",
};
</script>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    href?: string;
    color?: string;
    display?: string;
  }>(),
  {
    color: "primary",
    display: "solid",
  },
);



const component = computed(() => props.href === undefined ? "button" : "a");

const classes = computed(() => {
  const cls = [];
  props.color && cls.push(`demo-button-${props.color}`);
  props.display && cls.push(`demo-button-${props.display}`);
  return cls;
});
</script>
<style>
.demo-button {
  display: inline-flex;
  position: relative;
  flex-flow: row nowrap;
  align-items: center;
  padding: 6px 16px;
  margin: 0;
  font-family: inherit;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1.75;
  text-decoration: none;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  cursor: pointer;
  user-select: none;
}

.demo-button:disabled,
.demo-button.disabled {
  color: var(--demo-disabled-fgcolor);
  background: var(--demo-disabled);
  border-color: var(--demo-disabled);
  pointer-events: none;
}

.demo-button-solid {
  color: var(--demo-color);
}

.demo-button-primary.demo-button-solid {
  background-color: var(--demo-primary);
  border-color: var(--demo-primary);
}

.demo-button-primary.demo-button-solid:hover {
  background-color: var(--demo-primary-hover);
  border-color: var(--demo-primary-hover);
}

.demo-button-plain {
  color: var(--demo-primary);
  background-color: transparent;
  border-color: transparent;
}

.demo-button-primary.demo-button-plain:hover {
  color: var(--demo-primary-hover);
  background-color: var(--demo-primary-hover-inverse);
  border-color: var(--demo-primary-hover-inverse);
}

.demo-button-outline {
  color: var(--demo-primary);
  background-color: transparent;
  border-color: var(--demo-primary);
}

.demo-button-primary.demo-button-outline:hover {
  color: var(--demo-primary-hover);
  background-color: var(--demo-primary-hover-inverse);
  border-color: var(--demo-primary-hover);
}
</style>
