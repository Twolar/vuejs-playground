<script setup>
import ComputedProperties from '../components/ComputedProperties.vue';
</script>

<template>
    <div class="ComputedProperties">
      <h1>ComputedProperties</h1>
      <br/>  
      <ComputedProperties />
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .ComputedProperties {
      display: flex;
      flex-direction: column;
    }
  }
  </style>
  