/* global Vue, VueRouter, axios */

var RecipesShowPage = {
  template: "#recipes-show-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      recipe: {}
    };
  },
  created: function() {
                               // params[:id]
    axios.get("/v2/recipes/" + this.$route.params.id).then(function(response) {
      console.log(response.data);
      this.recipe = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};


var RecipesNewPage = {
  template: "#recipes-new-page",
  data: function() {
    return {
      ingredients: "",
      title: "",
      directions: "",
      imageUrl: "",
      chef: "",
      prepTime: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      // gets the info from the form
      // makes an object to send to the API
      var params = {
        input_ingredients: this.ingredients,
        input_title: this.title,
        input_directions: this.directions,
        input_image_url: this.imageUrl,
        input_chef: this.chef,
        input_prep_time: this.prepTime
      };
      axios
        .post("/v2/recipes", params)
        .then(function(response) {
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};


var LogoutPage = {
  template: "<h1>Logout</h1>",
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("jwt");
    router.push("/");
  }
};

var LoginPage = {
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
      };
      axios
        .post("/user_token", params)
        .then(function(response) {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          router.push("/");
        })
        .catch(
          function(error) {
            this.errors = ["Invalid email or password."];
            this.email = "";
            this.password = "";
          }.bind(this)
        );
    }
  }
};

var SignupPage = {
  template: "#signup-page",
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/v2/users", params)
        .then(function(response) {
          router.push("/login");
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
};

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
      recipes: [],
      currentRecipe: {title: "", directions: "", prep_time: "", ingredients: "", chef: ""},
      errors: []
    };
  },
  created: function() {
    axios.get("/v2/recipes").then(function(response) {
      console.log(response.data);
      this.recipes = response.data;
    }.bind(this));
  },
  methods: {
    setCurrentRecipe: function(inputRecipe) {
      this.currentRecipe = inputRecipe;
    },
    updateRecipe: function() {
      // grab the info from the form
      var params = {
        input_title: this.currentRecipe.title,
        input_chef: this.currentRecipe.chef,
        input_ingredients: this.currentRecipe.ingredients,
        input_directions: this.currentRecipe.directions,
        input_prep_time: this.currentRecipe.prep_time
      };
      // make an axios request
      axios.patch("/v2/recipes/" + this.currentRecipe.id, params).then(function(response) {

        console.log('done with the updating');
      })
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/practice", component: PracticePage },
    { path: "/signup", component: SignupPage },
    { path: "/login", component: LoginPage },
    { path: "/recipes/:id", component: RecipesShowPage },
    { path: "/recipes/new", component: RecipesNewPage },
    { path: "/logout", component: LogoutPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router,
  created: function() {
    var jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = jwt;
    }
  }
});
