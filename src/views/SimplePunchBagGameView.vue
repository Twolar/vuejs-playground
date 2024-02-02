<script setup>
import SimplePunchBagGame from '../components/SimplePunchBagGame.vue'
</script>

<template>
  <div class="SimplePunchBagGame">
    <h1>SimplePunchBagGame</h1>
    <br />
    <SimplePunchBagGame />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .SimplePunchBagGame {
    display: flex;
    flex-direction: column;
  }
}
</style>
