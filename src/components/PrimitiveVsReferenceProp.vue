<script>
// Ninja prop passed down from the view
export default {
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    };
  },
  methods: {
    deleteNinja: function() {
      this.ninjas.pop();
    }
  },
  computed: {
  }
};
</script>

<template>
  <div>
    <div id="ninjas">
      <ul>
        <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show" style="cursor: pointer;">
          <h2>{{ ninja.name }}</h2>
          <h3 v-show="ninja.show"> {{ ninja.speciality }}</h3>
        </li>
      </ul>
      <br>
      <button v-on:click="deleteNinja">Delete Ninja</button>
    </div>
  </div>
</template>

<style scoped></style>
