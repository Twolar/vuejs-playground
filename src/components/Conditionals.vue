<script>
export default {
  data() {
    return {
      error: false,
      success: false
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
    <button v-on:click="error = !error">Toggle Error</button>
    <button v-on:click="success = !success">Toggle Success</button>
    <!-- Removes element -->
    <p v-if="error">There has been an error</p>
    <p v-else-if="success">Wowa, success!</p>

    <!-- Hide/shows element -->
    <p v-show="error">There has been an error</p>
    <p v-show="success">Wowa, success!</p>
  </div>
</template>

<style scoped></style>
