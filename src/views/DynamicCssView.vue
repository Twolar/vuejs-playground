<script setup>
import DynamicCss from '../components/DynamicCss.vue';
</script>

<template>
    <div class="DynamicCss">
      <h1>DynamicCss</h1>
      <br/>  
      <DynamicCss />
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .DynamicCss {
      display: flex;
      flex-direction: column;
    }
  }
  </style>
  