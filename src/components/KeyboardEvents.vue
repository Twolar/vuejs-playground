<script>
export default {
  data() {
    return {};
  },
  methods: {
    logName: function () {
      console.log("Your entered your name");
    },
    logAge: function () {
      console.log("Your entered your age");
    },
  },
};
</script>

<template>
  <div>
    <label>Name:</label>
    <input type="text" v-on:keyup.enter="logName" />
    <label>Age:</label>
    <input type="text" v-on:keyup.alt.enter="logAge" />
  </div>
</template>

<style scoped></style>
