<script>
export default {
  data() {
    return {
      health: 100,
      ended: false
    };
  },
  methods: {
    punch: function () {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function () {
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {},
};
</script>

<template>
  <div>
    <!-- Bag Image -->
    <div id="bag" v-bind:class="{ burst: ended }"></div>

    <!-- Bag Health -->
    <div id="bag-health">
      <div v-bind:style="{ width: health + '%' }"></div>
    </div>

    <!-- Game Controls -->
    <div id="controls">
      <button v-on:click="punch" v-show="!ended">Punch</button>
      <button v-on:click="restart">Restart</button>
    </div>
  </div>
</template>

<style scoped>
#bag {
  width: 200px;
  height: 500px;
  margin: 0 auto;
  background: url(/bag.png) center no-repeat;
  background-size: 80%;
}

#bag.burst {
  background: url(/bag-burst.png) center no-repeat;
  background-size: 80%;
}


#bag-health {
  width: 200px;
  border: 2px solid #000;
  margin: 0 auto 20px auto; 
}

#bag-health div {
 height: 20px;
 background: crimson;
}

#controls {
  width: 120px;
  margin: 0 auto;
}
</style>
