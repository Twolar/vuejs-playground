<script>
import leftChev from "./assets/leftChev.svg";
import rightChev from "./assets/rightChev.svg";

export default {
  data() {
    return {
      isSidebarVisible: true,
      success: false,
      leftChev: leftChev,
      rightChev: rightChev
    };
  },
  methods: {
    toggleSidebar: function () {
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  },
  computed: {
  }
};
</script>

<template>
  <div id="app">
    <div class="sidebar-wrapper">
      <div class="sidebar-menu-icon-wrapper">
        <img
          :src="isSidebarVisible ? leftChev : rightChev"
          v-on:click="toggleSidebar"
          class="chevron-icon"
          alt="Toggle Menu"
        />
      </div>

      <div class="sidebar" v-if="isSidebarVisible">
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/DataBinding">DataBinding</router-link></li>
            <li>
              <router-link to="/DataBindingTwoWay"
                >DataBindingTwoWay</router-link
              >
            </li>
            <li><router-link to="/Events">Events</router-link></li>
            <li>
              <router-link to="/EventModifiers">EventModifiers</router-link>
            </li>
            <li>
              <router-link to="/KeyboardEvents">KeyboardEvents</router-link>
            </li>
            <li>
              <router-link to="/ComputedProperties"
                >ComputedProperties</router-link
              >
            </li>
            <li><router-link to="/DynamicCsss">DynamicCss</router-link></li>
            <li><router-link to="/Conditionals">Conditionals</router-link></li>
            <li><router-link to="/Loops">Loops</router-link></li>
            <li>
              <router-link to="/SimplePunchBagGame"
                >SimplePunchBagGame</router-link
              >
            </li>
            <li><router-link to="/VueInstances">VueInstances</router-link></li>
            <li><router-link to="/Refs">Refs</router-link></li>
            <li><router-link to="/ComponentCss">ComponentCss</router-link></li>
            <li>
              <router-link to="/NestingComponents"
                >NestingComponents</router-link
              >
            </li>
            <li><router-link to="/Props">Props</router-link></li>
            <li><router-link to="/PrimitiveVsReference">PrimitiveVsReference</router-link></li>
            <li><router-link to="/Slots">Slots</router-link></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
}

.sidebar-wrapper {
  border-right: solid 1px #313131;
  height: 100%;
  padding-right: 1rem;
}

.sidebar-menu-icon-wrapper {
  width: 100%;
  margin-bottom: 1rem;
}

.chevron-icon {
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #313131;
}

.sidebar {
  width: 100%;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  margin-bottom: 1rem;
}

.content {
  flex-grow: 1;
  padding-left: 1rem;
}
</style>
