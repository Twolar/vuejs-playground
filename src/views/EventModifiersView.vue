<script setup>
import EventModifiers from "../components/EventModifiers.vue";
</script>

<template>
  <div class="event-modifiers">
    <h1>This is an EventModifiers page</h1>
    <br />
    <EventModifiers />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .event-modifiers {
    display: flex;
    flex-direction: column;
  }
}
</style>
