// Function to open and close the search overlay
function SearchOn() {
  document.getElementById("overlay").style.display = "block";
}
function SearchOff() {
  document.getElementById("overlay").style.display = "none";
}

// Function to validate user login
function validateLogIn() {
  let validateUsername = document.forms["login"]["login_username"].value;
  let validatePassword = document.forms["login"]["login_password"].value;
  
  if (validateUsername=="" || validatePassword=="") {
    alert("Please put in all login information");
    return false;
  }
  else {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == validateUsername) {
        if (users[i].password == validatePassword) {
          alert("Log In successful!");
          // This code may be used to set the loginStatus as true so users can access features that are
          // only allowed after log in. However these values cannot be assigned from a Vue component.
          //
          // loginInfo.loginStatus = true;
          // loginInfo.loginUser = validateUsername;
          return true;
        } else {
          alert("Incorrect username or password");
          return false;
        }
      }
    }
    alert("Incorrect username or password");
    return false;
  }
}

// Function to validate user sign up
function validateSignUp() {
  let validateUsername = document.forms["signup"]["signup_username"].value;
  let validateEmail = document.forms["signup"]["signup_email"].value;
  let validatePassword = document.forms["signup"]["signup_password"].value;
  
  if (validateUsername=="" || validatePassword=="" || validateEmail=="") {
    alert("Please put in all login information");
    return false;
  }
  else {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == validateUsername) {
        alert("Username taken! Please choose a different username.");
        return false;
      }
    }
    alert("Sign up successful!");
    return true;
  }
}

// Recipes information
var recipes = [
  {
    id: 0,
    route: "/recipe0",
    title: "Simple Fried Egg",
    img: "egg1.jpeg",
    date: "25 November 2021",
    poster: "user001",
    caption: "Egg fried on a pan with optional seasoning. A beginner friendly dish, perfect for a quick meal.",
    ingredients: {
      ing0: "Egg", 
      ing1: "Cooking oil", 
      ing2: "Salt",
      ing3: "Pepper"
    },
    instructions: {
      ins0: "Pour cooking oil into the pan and pre-heat on stove.",
      ins1: "Crack the egg into the pan. Cover the pan with a lid to avoid oil splatters.",
      ins2: "Wait for 3 minutes.",
      ins3: "Flip the egg and wait for an additional 2-3 minutes.",
      ins4: "Once done, turn off the stove and serve the egg."
    },
    comments: {
      comment1: {username: 'user202', comment: 'This is a nice recipe!'},
      comment2: {username: 'user003', comment: 'I tried this recipe and I really enjoyed it!'}
    },
    rating: 5
  },
  {
    id: 1,
    route: "/recipe1",
    title: "Fried Egg on Toast",
    img: "egg-bread.jpeg",
    date: "23 November 2021",
    poster: "user202",
    caption: "Simple fried egg on a toast. A simple dish to fill your stomach. Any kind of bread can be used, even untoasted bread.",
    ingredients: {
      ing0: "Egg", 
      ing1: "Cooking oil", 
      ing2: "Bread",
      ing3: "Butter"
    },
    instructions: {
      ins0: "Pour cooking oil into the pan and pre-heat on stove.",
      ins1: "Crack the egg into the pan. Cover the pan with a lid to avoid oil splatters.",
      ins2: "Spread butter on a loaf of bread and put it into the toaster.",
      ins3: "Take the egg of the pan, or flip it if you prefer well-done egg.",
      ins4: "Put the egg on the toast, and you get a fried egg on toast!"
    },
    comments: {
      comment1: {username: 'user001', comment: 'I love toast!'},
      comment2: {username: 'user003', comment: 'This is the best breakfast recipe!'}
    },
    rating: 5
  },
  {
    id: 2,
    route: "/recipe2",
    title: "Yummy Fruits Salad",
    img: "fruit-salad.jpg",
    date: "24 January 2021",
    poster: "user003",
    caption: "Fruits cut up and mixed on a bowl, combined with fresh juice. Added cheese to make this recipe 100x more delicious.",
    ingredients: {
      ing0: "Fruits",
      ing1: "Cheese"
    },
    instructions: {
      ins0: "Cut up fruits of your choice.",
      ins1: "Select one fruit to put in the blender to make juice.",
      ins2: "Grate some cheese to your liking.",
      ins3: "Mix fruits, juice, and cheese into a bowl.",
      ins4: "You have a Yummy Fruits Salad!"
    },
    comments: {
      comment1: {username: 'user202', comment: 'Yum!'},
      comment2: {username: 'user001', comment: 'The most creative salad I have ever seen!'}
    },
    rating: 4
  },
  {
    id: 3,
    route: "/recipe3",
    title: "Crispy French Fries",
    img: "french-fries.jpg",
    date: "24 January 2021",
    poster: "user001",
    caption: "Homemade your fries to accompany your fried chicken! Or eat as is for movie snacks.",
    ingredients: {
      ing0: "Potato",
      ing1: "Frying Oil",
      ing2: "Salt"
    },
    instructions: {
      ins0: "Peel and cut your potatoes to its desired shape after washing them.",
      ins1: "Put the cut pieces into water and let it soak.",
      ins2: "Pour frying oil into a frying pan and let it heat.",
      ins3: "Deep fry the potatoes.",
      ins4: "Once done, take the fries out of the pan and pour salt to season."
    },
    comments: {
      comment1: {username: 'user202', comment: 'Nice!'}
    },
    rating: 4
  },
  {
    id: 4,
    route: "/recipe4",
    title: "Peeled Oranges",
    img: "orange.jpg",
    date: "24 January 2021",
    poster: "user003",
    caption: "Unlike your normal oranges",
    ingredients: {
      ing0: "Orange"
    },
    instructions: {
      ins0: "Take an unpeeled orange.",
      ins1: "Wash the unpeeled orange.",
      ins2: "Take the orange skin off the unpeeled orange.",
      ins3: "Your peeled orange is ready to eat!"
    },
    comments: {
      comment1: {username: 'user202', comment: 'Haha'}
    },
    rating: 2
  }
];

// Users information
var users = [
  {
    username: 'user001',
    password: 'user001'
  },
  {
    username: 'user202',
    password: 'user202'
  },
  {
    username: 'user003',
    password: 'user003'
  }
];

// Login information
var loginInfo = { loginStatus: false, loginUser: "user001" };

// Router
const Home = {
  template: '<recipes></recipes>'
};

const Login = {
  template: '<login></login>'
}

const Signup = {
  template: '<sign-up></sign-up>'
}

const Post = {
  template: '<post-recipe></post-recipe>'
}

const recipe0 = {
  template: '<recipe-detail v-bind:index="0"></recipe-detail>'
};
const recipe1 = {
  template: '<recipe-detail v-bind:index="1"></recipe-detail>'
};
const recipe2 = {
  template: '<recipe-detail v-bind:index="2"></recipe-detail>'
};
const recipe3 = {
  template: '<recipe-detail v-bind:index="3"></recipe-detail>'
};
const recipe4 = {
  template: '<recipe-detail v-bind:index="4"></recipe-detail>'
};

const routes = [
  { path: "", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/posting", component: Post },
  { path: "/recipe0", component: recipe0 },
  { path: "/recipe1", component: recipe1 },
  { path: "/recipe2", component: recipe2 },
  { path: "/recipe3", component: recipe3 },
  { path: "/recipe4", component: recipe4 }
];

const router = new VueRouter({
  routes
});

//Components
Vue.component('search-overlay', {
  data: function() {
    return {
      recipes: recipes,
      keyword: "",
      filterIn: "",
      filterOut: ""
    }
  },
  methods: {
    // Search result based on recipe title
    compareTitle: function(id) {
      if (this.recipes[id].title.toLowerCase().includes(this.keyword.toLowerCase())) {
        return true;
      }
    },
    // Search result based on included ingredients
    filterResultIn: function(id) {
      for (let i = 0; i < Object.keys(this.recipes[id].ingredients).length; i++) {
        if (this.filterIn == "" || this.filterIn.toLowerCase().includes(this.recipes[id].ingredients['ing' + String(i)].toLowerCase())) {
          return true;
        }
      }
    },
    // Search result based on excluded ingredients
    filterResultOut: function(id) {
      for (let i = 0; i < Object.keys(this.recipes[id].ingredients).length; i++) {
        if (this.filterOut.toLowerCase().includes(this.recipes[id].ingredients['ing' + String(i)].toLowerCase())) {
          return false;
        }
      }
      return true;
    }
  },
  template:
  '<div id="overlay">\
      <div class="outside" onclick="SearchOff()"></div>\
      <div class="search-overlay">\
          <div class="search-bar">\
              <input type="text" placeholder="Search..." v-model="keyword">\
          </div>\
          <!--Show search results-->\
          <div id="search-result">\
            <div v-for="recipe in recipes">\
            <router-link v-bind:to="recipe.route" onclick="SearchOff()">\
            <transition name="slide-fade">\
            <div class="result-list" v-if="compareTitle(recipe.id) && filterResultIn(recipe.id) && filterResultOut(recipe.id)">\
                <img v-bind:src="recipe.img">\
                <h4>{{recipe.title}}</h4>\
              </div></transition></router-link>\
            </div>\
          </div>\
          <div style="clear:both;"></div>\
          <div class="filter-ingredient">\
              <p>Ingredients you want to use </p>\
              <input type="text" placeholder="Write your ingredients..." v-model="filterIn">\
              <p>{{filterIn}}</p>\
          </div>\
          <div class="filter-ingredient">\
              <p>Ingredients you do not want to use </p>\
              <input type="text" placeholder="Write your ingredients..." v-model="filterOut">\
              <p>{{filterOut}}</p>\
          </div>\
      </div>\
  </div>'
})

Vue.component('heading', {
  data: {
    loginInfo: loginInfo
  },
  template: 
  '<div class="heading">\
  <search-overlay></search-overlay>\
  <img src="title.png" height="48" class="center">\
  <div class="nav">\
      <div class="search" onclick="SearchOn()">\
          Search...\
      </div>\
      <li style="float:left"><router-link to="/">Home</router-link></li>\
      <li v-if="loginInfo.loginStatus == false"><router-link to="/login">Log In</router-link></li>\
      <!--loginInfo.loginStatus will always be false in this version of the website-->\
      <li v-if="loginInfo.loginStatus == true">Hello, {{loginInfo.loginUser}}</li>\
      <li><router-link to="/posting">Submit a Recipe</router-link></li>\
  </div></div>'
})

// Home Page - Recipe List
Vue.component('recipes', {
  data: function() {
    return {
      recipes: recipes,
      textColor: {color: 'black'}
    }
  },
  template:
  '<div class="content">\
    <h1>Welcome to <i>Your Recipes</i>!</h1>\
    <p>Scroll here to view today\'s recommended recipes, or use the search bar to find recipes of your choice.</p>\
    <div class="recipe-list" v-for="recipe in recipes">\
      <router-link v-bind:to="recipe.route">\
      <img v-bind:src="recipe.img">\
      <div class="desc">\
        <h2 v-bind:style="textColor">{{recipe.title}}</h2>\
        <p class="info">{{recipe.date}} | @{{recipe.poster}}</p>\
        <p v-bind:style="textColor">{{recipe.caption}}</p>\
        <p v-bind:style="textColor">Ingredients: <label v-for="ingredient in recipe.ingredients">{{ingredient}}, </label></p>\
      </div></router-link>\
    </div>\
  </div>'
})

//Recipe Details Page
Vue.component('recipe-detail', {
  data: function() {
    return {
      recipes: recipes,
      index: 0
    }
  },
  props:['index'],
  template: '<div class="content">\
  <h1>{{recipes[index].title}}</h1>\
  <div class="recipe-detail">\
      <div class="info">\
          <!--Display average rating of the recipe-->\
          <div class="rating">\
            <img v-if="recipes[index].rating > 0" src="icons-star-active.png">\
            <img v-if="recipes[index].rating < 1" src="icons-star-inactive.png">\
            <img v-if="recipes[index].rating > 1" src="icons-star-active.png">\
            <img v-if="recipes[index].rating < 2" src="icons-star-inactive.png">\
            <img v-if="recipes[index].rating > 2" src="icons-star-active.png">\
            <img v-if="recipes[index].rating < 3" src="icons-star-inactive.png">\
            <img v-if="recipes[index].rating > 3" src="icons-star-active.png">\
            <img v-if="recipes[index].rating < 4" src="icons-star-inactive.png">\
            <img v-if="recipes[index].rating == 5" src="icons-star-active.png">\
            <img v-if="recipes[index].rating < 5" src="icons-star-inactive.png">\
          </div>\
          {{recipes[index].date}} | By: @{{recipes[index].poster}}\
      </div>\
      <!--Display the recipe-->\
      <img v-bind:src="recipes[index].img">\
      <p>{{recipes[index].caption}}</p>\
      <h2>Ingredients:</h2>\
      <ul>\
          <li v-for="ingredient in recipes[index].ingredients">{{ingredient}}</li>\
      </ul>\
      <h2>Instructions:</h2>\
      <ol>\
          <li v-for="instruction in recipes[index].instructions">{{instruction}}</li>\
      </ol>\
      <feedback v-bind:comments="recipes[index].comments"></feedback>\
    </div>\
  </div>'
})

Vue.component('feedback', {
  data: function() {
    return {
      feedbackStars: {
        star1: "icons-star-inactive.png",
        star2: "icons-star-inactive.png",
        star3: "icons-star-inactive.png",
        star4: "icons-star-inactive.png",
        star5: "icons-star-inactive.png"
      },
      username: loginInfo.loginUser,
      userComment: ""
    }
  },
  methods: {
    giveRating: function(activeStars) {
      switch (activeStars) {
        case 1:
          this.feedbackStars.star1 = "icons-star-active.png";
          this.feedbackStars.star2 = "icons-star-inactive.png";
          this.feedbackStars.star3 = "icons-star-inactive.png";
          this.feedbackStars.star4 = "icons-star-inactive.png";
          this.feedbackStars.star5 = "icons-star-inactive.png";
          break;
        case 2:
          this.feedbackStars.star1 = "icons-star-active.png";
          this.feedbackStars.star2 = "icons-star-active.png";
          this.feedbackStars.star3 = "icons-star-inactive.png";
          this.feedbackStars.star4 = "icons-star-inactive.png";
          this.feedbackStars.star5 = "icons-star-inactive.png";
          break;
        case 3: 
          this.feedbackStars.star1 = "icons-star-active.png";
          this.feedbackStars.star2 = "icons-star-active.png";
          this.feedbackStars.star3 = "icons-star-active.png";
          this.feedbackStars.star4 = "icons-star-inactive.png";
          this.feedbackStars.star5 = "icons-star-inactive.png";
          break;
        case 4:
          this.feedbackStars.star1 = "icons-star-active.png";
          this.feedbackStars.star2 = "icons-star-active.png";
          this.feedbackStars.star3 = "icons-star-active.png";
          this.feedbackStars.star4 = "icons-star-active.png";
          this.feedbackStars.star5 = "icons-star-inactive.png";
          break;
        case 5:
          this.feedbackStars.star1 = "icons-star-active.png";
          this.feedbackStars.star2 = "icons-star-active.png";
          this.feedbackStars.star3 = "icons-star-active.png";
          this.feedbackStars.star4 = "icons-star-active.png";
          this.feedbackStars.star5 = "icons-star-active.png";
          break;
      }  
    },
    sendComment: function() {
      // A validation can be added to only allow users to comment after loggin in

      let comment = document.forms["comment"]["inputComment"].value;
      // Validate that the comment box is not empty
      if (comment != "") {
        this.userComment = comment; //This code only adds the comment temporarily, another method may be used to upload the comment to a database
        document.forms["comment"]["inputComment"].value = "";
      }
    }
  },
  props: ['comments'],
  template: '<div><div class="feedback">\
  <h2>Rate this recipe</h2>\
  <!--The icons would change colours when hovered after JavaScript is added-->\
  <div class="rating">\
    <img v-bind:src="feedbackStars.star1" v-on:click="giveRating(1)">\
    <img v-bind:src="feedbackStars.star2" v-on:click="giveRating(2)">\
    <img v-bind:src="feedbackStars.star3" v-on:click="giveRating(3)">\
    <img v-bind:src="feedbackStars.star4" v-on:click="giveRating(4)">\
    <img v-bind:src="feedbackStars.star5" v-on:click="giveRating(5)">\
  </div>\
  <!--Currently there is no login feature, so user can comment without logging in.-->\
  <form name="comment" onsubmit="return false">\
    <input type="text" id="inputComment" name="inputComment" placeholder="Please enter your comment here..."> <br>\
    <input type="submit" value="Send" v-on:click="sendComment">\
  </form>\
  </div>\
  <!--Display comments-->\
  <div class="comment">\
    <div class="box" v-if="userComment != \'\'">\
      <h3>{{username}}</h3>\
      <p>{{userComment}}</p>\
    </div>\
    <div class="box" v-for="comment in comments">\
      <h3>{{comment.username}}</h3>\
      <p>{{comment.comment}}</p>\
    </div>\
  </div>'
})

// Login Page
Vue.component('login', {
  methods: {
    processLogin: function() {
      if (validateLogIn()) {
        this.$router.push("/");
      }
    }
  },
  template: 
  '<div class="login">\
  <h1>Log In</h1>\
  <form name="login" v-on:submit="processLogin">\
    <input type="text" id="login_username" name="username" placeholder="Username"><br>\
    <input type="password" id="login_password" name="password" placeholder="Password"><br>\
    <input type="submit" value="Log In">\
  </form>\
  <p>Don\'t have an account? Register <router-link to="/signup">here</router-link></p>\
</div>'
})

// Signup Page
Vue.component('sign-up', {
  methods: {
    processSignup: function() {
      if (validateSignUp()) {
        this.$router.push("/login");
        // Another function to add the new user to the users array may be added.
      }
    }
  },
  template:
  '<div class="login">\
  <h1>Sign Up</h1>\
  <form name="signup" v-on:submit="processSignup">\
    <input type="text" id="signup_username" placeholder="Username"><br>\
    <input type="email" id="signup_email" placeholder="E-mail"><br>\
    <input type="password" id="signup_password" placeholder="Password"><br>\
    <input type="submit" value="Sign Up">\
  </form>\
  </div>'
})

// Post Page
Vue.component('post-recipe', {
  methods: {
    submitRecipe: function() {
      // A login validation may be added, so only users who have logged in can send a recipe

      // Validate that all fields have been filled
      let postTitle = document.forms["post"]["post_title"].value;
      let postCaption = document.forms["post"]["post_caption"].value;
      let postIngredients = document.forms["post"]["post_ingredients"].value;
      let postInstructions = document.forms["post"]["post_instructions"].value;
  
      if (postTitle=="" || postCaption=="" || postIngredients=="" || postInstructions=="") {
        alert("Please fill in all the fields");
      } else {
        alert("Recipe sent successfully!");
        // The recipe may be sent to the website owner or admin
        this.$router.push("/");
      }
    }
  },
  template:
  '<div class="login">\
  <h1>Send Us Your Recipe</h1>\
  <p>Want to share your own recipe on our website? Send us your recipe!</p>\
  <form name="post" v-on:submit="submitRecipe">\
    <input type="text" name="post_title" placeholder="Title"><br>\
    <input type="text" name="post_caption" placeholder="Description of your recipe" style="padding-bottom: 64px;"><br>\
    <input type="text" name="post_ingredients" placeholder="Ingredients"><br>\
    <input type="text" name="post_instructions" placeholder="Instructions"><br>\
    <input type="submit" value="Submit">\
  </div>'
})

var app = new Vue({
  el: "#app",
  router
})