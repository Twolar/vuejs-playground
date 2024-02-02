<script setup>
import Loops from '../components/Loops.vue'
</script>

<template>
  <div class="Loops">
    <h1>Loops</h1>
    <br />
    <Loops />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .Loops {
    display: flex;
    flex-direction: column;
  }
}
</style>
