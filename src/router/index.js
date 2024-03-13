import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/DataBinding",
      name: "DataBinding",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/DataBindingView.vue"),
    },
    {
      path: "/DataBindingTwoWay",
      name: "DataBindingTwoWay",
      component: () => import("../views/DataBindingTwoWayView.vue"),
    },
    {
      path: "/Events",
      name: "Events",
      component: () => import("../views/EventsView.vue"),
    },
    {
      path: "/EventModifiers",
      name: "EventModifiers",
      component: () => import("../views/EventModifiersView.vue"),
    },
    {
      path: "/KeyboardEvents",
      name: "KeyboardEvents",
      component: () => import("../views/KeyboardEventsView.vue"),
    },
    {
      path: "/ComputedProperties",
      name: "ComputedProperties",
      component: () => import("../views/ComputedPropertiesView.vue"),
    },
    {
      path: "/DynamicCss",
      name: "DynamicCss",
      component: () => import("../views/DynamicCssView.vue"),
    },
    {
      path: "/Conditionals",
      name: "Conditionals",
      component: () => import("../views/ConditionalsView.vue"),
    },
    {
      path: "/Loops",
      name: "Loops",
      component: () => import("../views/LoopsView.vue"),
    },
    {
      path: "/SimplePunchBagGame",
      name: "SimplePunchBagGame",
      component: () => import("../views/SimplePunchBagGameView.vue"),
    },
    {
      path: "/VueInstances",
      name: "VueInstances",
      component: () => import("../views/VueInstancesView.vue"),
    },
    {
      path: "/Refs",
      name: "Refs",
      component: () => import("../views/RefsView.vue"),
    },
    {
      path: "/ComponentCss",
      name: "ComponentCss",
      component: () => import("../views/ComponentCssView.vue"),
    },
    {
      path: "/NestingComponents",
      name: "NestingComponents",
      component: () => import("../views/NestingComponentsView.vue"),
    },
    {
      path: "/Props",
      name: "Props",
      component: () => import("../views/PropsView.vue"),
    },
    {
      path: "/PrimitiveVsReference",
      name: "PrimitiveVsReference",
      component: () => import("../views/PrimitiveVsReferenceView.vue"),
    },
    {
      path: "/Slots",
      name: "Slots",
      component: () => import("../views/SlotsView.vue"),
    },
  ],
});

export default router;
