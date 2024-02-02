<script setup>
import Events from "../components/Events.vue";
</script>

<template>
  <div class="event">
    <h1>This is an EventModifiers page</h1>
    <br />
    <Events />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .event {
    display: flex;
    flex-direction: column;
  }
}
</style>
