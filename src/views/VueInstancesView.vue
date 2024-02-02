<script setup>
import VueInstances from '../components/VueInstances.vue'
</script>

<template>
  <div class="VueInstances">
    <h1>VueInstances</h1>
    <br />
    <VueInstances />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .VueInstances {
    display: flex;
    flex-direction: column;
  }
}
</style>
