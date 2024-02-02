<script>
export default {
  data() {
    return {
      output: 'Your Fav Food'
    };
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs);
      this.output = this.$refs.input.value;
    }
  },
  computed: {
  }
};
</script>

<template>
  <div>
    <h2>Refs</h2>
    <input type="text" ref="input" />
    <button v-on:click="readRefs">Submit</button>
    <br>
    <p>Your favourite food: {{ output }}</p>
  </div>
</template>

<style scoped></style>
