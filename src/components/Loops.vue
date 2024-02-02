<script>
export default {
  data() {
    return {
      characters: ["Mario", "Luigi", "Yoshi", "Bowser"],
      ninjas: [
        { name: "Ryu", age: 25 },
        { name: "Yoshi", age: 35 },
        { name: "Ken", age: 55 },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<template>
  <div>
    <h2>Characters</h2>
    <ul>
      <li v-for="character in characters">{{ character }}</li>
    </ul>
    <br />

    <h2>Ninjas</h2>
    <ul>
      <li v-for="ninja in ninjas">
        <p>{{ ninja.name }} - {{ ninja.age }}</p>
      </li>
    </ul>
    <br />

    <h2>Ninjas Index</h2>
    <ul>
      <li v-for="(ninja, index) in ninjas">
        <p>{{ index }}: {{ ninja.name }} - {{ ninja.age }}</p>
      </li>
    </ul>

    <h2>Ninjas Template</h2>
    <template v-for="(ninja, index) in ninjas">
      <p>{{ index }}: {{ ninja.name }} - {{ ninja.age }}</p>
    </template>

    <h2>Ninjas Val | Key</h2>
    <ul>
      <li v-for="ninja in ninjas">
        <template v-for="(val, key) in ninja">
          <p>{{ key }}: {{ val }}</p>
        </template>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
