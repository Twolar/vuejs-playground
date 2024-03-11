<script setup>
import Props from '../components/Props.vue'
var ninjasProp = [
        { name: 'RYU', speciality: 'VueComponents', show: false},
        { name: 'KEN', speciality: 'ReactComponents', show: true},
        { name: 'CHUN-LI', speciality: 'AngularDirectives', show: false},
        { name: 'AKUMA', speciality: 'EmberTemplates', show: true},
        { name: 'DHALSIM', speciality: 'BackboneViews', show: false}
      ]

</script>

<template>
  <div class="Props">
    <h1>Props</h1>
    <br />
    <Props v-bind:ninjas="ninjasProp" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .Props {
    display: flex;
    flex-direction: column;
  }
}
</style>
