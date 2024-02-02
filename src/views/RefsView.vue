<script setup>
import Refs from '../components/Refs.vue'
</script>

<template>
  <div class="Refs">
    <h1>Refs</h1>
    <br />
    <Refs />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .Refs {
    display: flex;
    flex-direction: column;
  }
}
</style>
