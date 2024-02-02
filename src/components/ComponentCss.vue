<script>
export default {
  data() {
    return {
      ninjas: [
        {
          name: 'Taylor',
          age: 25
        },
        {
          name: 'Aaron',
          age: 26
        },
        {
          name: 'Tim',
          age: 27
        },
      ]
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
    <h2>List Ninjas</h2>
    <ul class="ninjas">
      <li v-for="ninja in ninjas">
        <p>{{ ninja.name }} - {{ ninja.age }}</p>
      </li>
    </ul>
  </div>
</template>

<!-- Adds attributes to different divs so that the styling stays scoped to this template... -->
<style scoped>
h2 {
  color: purple;
}
</style>
