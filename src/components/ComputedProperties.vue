<script>
export default {
  data() {
    return {
      age: 20,
      a: 0,
      b: 0
    };
  },
  methods: {
  },
  // VueJS runs all the functions regardless, i.e. AddToB is run when AddToA button is clicked
  // ComputedProperties solves this issue
  computed: {
    addToA: function () {
      return this.a + this.age;
    },
    addToB: function () {
      return this.b + this.age;
    }
  }
};
</script>

<template>
  <div>
    <button v-on:click="a++">Add to A</button>
    <button v-on:click="b++">Add to B</button>
    <p>A - {{ a }}</p>
    <p>B - {{ b }}</p>
    <p>Age + A = {{  addToA }}</p>
    <p>Age + B = {{  addToB }}</p>
  </div>
</template>

<style scoped></style>
