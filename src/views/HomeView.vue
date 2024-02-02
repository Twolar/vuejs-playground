<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <div class="home">
    <HelloWorld />
    <br>
    <TheWelcome />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    display: flex;
    flex-direction: column;
  }
}
</style>
