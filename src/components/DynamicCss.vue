<script>
export default {
  data() {
    return {
      available: false,
      nearby: false,
    };
  },
  methods: {},
  computed: {
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby,
      };
    },
  },
};
</script>

<template>
  <div>
    <h2>Example 1</h2>
    <div v-bind:class="{ red: true, blue: false }"></div>
    <div
      v-on:click="available = !available"
      v-bind:class="{ available: available }"
    >
      <span>TaxiDriver</span>
    </div>
    <br>
    <button v-on:click="nearby = !nearby">Toggle Nearby</button>
    <button v-on:click="available = !available">Toggle Available</button>
    <h2>Example 2</h2>
    <div v-bind:class="compClasses">
      <span>TaxiDriver2</span>
    </div>
  </div>
</template>

<style scoped>
span {
  background: red;
  display: inline-block;
  padding: 10px;
  color: #fff;
  margin: 10px 0px;
}

.available span {
  background: green;
}

.nearby span:after {
  content: "nearby";
  margin-left: 10px;
}
</style>
