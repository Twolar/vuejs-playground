<script setup>
import KeyboardEvents from "../components/KeyboardEvents.vue";
</script>

<template>
  <div class="keyboard-events">
    <h1>This is an KeyboardEvents page</h1>
    <br />
    <KeyboardEvents />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .keyboard-events {
    display: flex;
    flex-direction: column;
  }
}
</style>
