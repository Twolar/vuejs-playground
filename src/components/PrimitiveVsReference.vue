<script>
import PrimitiveVsReferenceProp from './PrimitiveVsReferenceProp.vue'

export default {
  data() {
    return {
      ninjasProp: [
        { name: 'RYU', speciality: 'VueComponents', show: false},
        { name: 'KEN', speciality: 'ReactComponents', show: false},
        { name: 'CHUN-LI', speciality: 'AngularDirectives', show: false},
        { name: 'AKUMA', speciality: 'EmberTemplates', show: false},
        { name: 'DHALSIM', speciality: 'BackboneViews', show: false},
        { name: 'BLANKA', speciality: 'MeteorTemplates', show: false},
        { name: 'ZANGIEF', speciality: 'AureliaComponents', show: false},
        { name: 'SAGAT', speciality: 'VueXStore', show: false}
      ]
    };
  },
  methods: {
  },
  computed: {
  },
  components: {
    PrimitiveVsReferenceProp
  }
};
</script>

<template>
  <div>
    <PrimitiveVsReferenceProp v-bind:ninjas="this.ninjasProp" />
    <br><hr><br>
    <PrimitiveVsReferenceProp v-bind:ninjas="this.ninjasProp" />
  </div>
</template>

<style scoped></style>
