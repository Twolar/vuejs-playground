<script>
export default {
  data() {
    return {
      age: 25,
      x: 0,
      y: 0,
    };
  },
  methods: {
    add: function (number) {
      this.age += number;
    },
    subtract: function (number) {
      this.age -= number;
    },
    updateXY: function (event) {
      // Automatically get event object when its an event
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
};
</script>

<template>
  <div>
    <div>
      <h2>Age: {{ age }}</h2>
      <button @click="add(1)">Add a year</button>
      <button v-on:click="subtract(1)">Subtract a year</button>
    </div>

    <div id="canvas" v-on:mousemove="updateXY">{{ x }}, {{ y }}</div>
  </div>
</template>

<style scoped>
#canvas {
  width: 600px;
  padding: 200px 20px;
  text-align: center;
  border: 1px solid #333;
}
</style>
