<script>
import HelloWorld from './HelloWorld.vue'

export default {
  components: {
    'app-header': HelloWorld
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
  }
};
</script>

<template>
  <div>
    <span>Nested Component:</span>
    <app-header />
  </div>
</template>

<style scoped></style>
