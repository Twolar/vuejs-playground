<script setup>
import DataBinding from '../components/DataBinding.vue';
</script>

<template>
    <div class="dataBinding">
      <h1>This is an data binding page</h1>
      <br/>  
      <DataBinding />
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .dataBinding {
      display: flex;
      flex-direction: column;
    }
  }
  </style>
  