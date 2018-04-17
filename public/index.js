/* global Vue, VueRouter, axios */
var PracticePage = {
  template: "#practice-page",
  data: function() {
    return {
      message: "Welcome to Vue.js! from the practice page"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};



var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      recipes: []
    };
  },
  created: function() {
    axios.get("/v2/recipes").then(function(response) {
      this.recipes = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/practice", component: PracticePage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
