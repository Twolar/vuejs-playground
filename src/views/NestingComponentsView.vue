<script setup>
import NestingComponents from '../components/NestingComponents.vue'
</script>

<template>
  <div class="NestingComponents">
    <h1>NestingComponents</h1>
    <br />
    <NestingComponents />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .NestingComponents {
    display: flex;
    flex-direction: column;
  }
}
</style>
