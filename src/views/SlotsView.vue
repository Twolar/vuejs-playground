<script setup>
import Slots from '../components/Slots.vue'
</script>

<template>
  <div class="Slots">
    <h1>Slots</h1>
    <br />
    <Slots />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .Slots {
    display: flex;
    flex-direction: column;
  }
}
</style>
