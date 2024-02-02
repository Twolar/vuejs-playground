<script setup>
import DataBindingTwoWay from "../components/DataBindingTwoWay.vue";
</script>

<template>
  <div class="databinding-twoway">
    <h1>This is an DataBindingTwoWay page</h1>
    <br />
    <DataBindingTwoWay />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .databinding-twoway {
    display: flex;
    flex-direction: column;
  }
}
</style>
