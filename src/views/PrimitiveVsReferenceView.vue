<script setup>
import PrimitiveVsReference from '../components/PrimitiveVsReference.vue'
</script>

<template>
  <div class="PrimitiveVsReference">
    <h1>PrimitiveVsReference</h1>
    <PrimitiveVsReference />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .PrimitiveVsReference {
    display: flex;
    flex-direction: column;
  }
}
</style>