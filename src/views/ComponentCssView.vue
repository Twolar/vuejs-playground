<script setup>
import ComponentCss from '../components/ComponentCss.vue'
</script>

<template>
  <div class="ComponentCss">
    <h1>ComponentCss</h1>
    <br />
    <ComponentCss />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .ComponentCss {
    display: flex;
    flex-direction: column;
  }
}
</style>
