<script>
export default {
  data() {
    return {
      name: "Shaun",
      job: "Dev",
      website: "test.com",
      websiteTag: '<a href="test.com">Test Website</a>',
      msg: "Your message here"
    };
  },
  methods: {
    greet(time) {
      return "Good " + time + " " + this.name;
    },
  },
};
</script>

<template>
  <div>
    <p>{{ msg }}</p>
    <p>{{ name }}</p>
    <p>{{ job }}</p>
    <p>{{ website }}</p>
    <p v-html="websiteTag"></p>
    <p>{{ greet('morning') }}</p>
  </div>
</template>

<style scoped></style>
