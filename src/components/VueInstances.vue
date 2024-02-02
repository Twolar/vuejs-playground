<script>
import Vue from 'vue';
var one = new Vue({
  el: "#vue-one",
  data: {
    title: "Vue Instance One",
  },
  methods: {},
  computed: {
    greet: function () {
      return "Hello from Vue Instance One";
    },
  },
});

var two = new Vue({
  el: "#vue-two",
  data: {
    title: "Vue Instance Two",
  },
  methods: {
    changeTitleOfOne: function () {
      one.title = "Title Changed"
    }
  },
  computed: {
    greet: function () {
      return "Hello from Vue Instance TWO";
    },
  },
});

two.title = "Vue Instance Two - Title changed from outside the instance";
</script>

<template>
  <div>
    <div id="vue-one">
      <h2>{{ title }}</h2>
      <p>{{ greet }}</p>
    </div>
    <br />
    <div id="vue-two">
      <h2>{{ title }}</h2>
      <p>{{ greet }}</p>
      <button v-on:click="changeTitleOfOne">ChangeTitleOfOne</button>
    </div>
  </div>
</template>

<style scoped></style>
