<script>
export default {
  data() {
    return {
      name: '',
      age: ''
    };
  },
  methods: {
  },
};
</script>

<template>
  <div>
    <label>Name:</label>
    <!-- Binds to model defined -->
    <input type="text" v-model="name" />
    <span>{{ name }}</span>
    <br>
    <label>Age:</label>
    <input type="text" v-model="age" />
    {{ age }}
  </div>
</template>

<style scoped></style>
