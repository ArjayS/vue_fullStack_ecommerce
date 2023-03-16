Tutorial for this Full Stack (MEVN) Vue,NodeJS, MongoDB, Express, Postman https://www.youtube.com/watch?v=Gb066FcOufU

# vue_fullStack_ecommerce

Setup at @ 9:30

- Downloading vue/cli

@13:00,

- Within the 'fsv-front-end' directory, type "npm run serve" to see your Vue app running on localhost.

NOTE:
in vscode during work, use 'yarn dev' to run the app and see the website

@18:30,

- Add Router for multi-page viewing using 'npm add router'.

@20:00,

- Create different pages in the view directory

@22:00,

- Fill the details in each of the view pages.

@22:50,

- Defining the paths to display the Pages

@ 28:00,

- <router-view> a space in the screen that our app would render whatever the app matching component for the url. Ex, for /Cart, router-view will view that. Simlar to the /ProductsPage, and /ProductDetailPage

@28:35,

- We will now start implementing more specific data for each of our page using provided files and fake json data files.

@31:10, Working on the views pages that we have, CartPage.vue, ProductDetailPage.vue, ProductsPage.vue, and App.vue by adding some styling

@33:10, Working on ProductsPage.vue

@35:00, Continue working on the ProductsPage.vue by adding and looping throught the products fake data and also adding router-link

- @40:30 explaining why Router-link is better than the <a></a> anchor tag. Router-link allows you to navigate through pages without doing a full-page refresh, which this improves users experience and performance because we do not need to reload and refresh a page everytime we change a page

@41:45, Working on the ProductDetailPage.vue

@43:00, Explaining the `product: products.find((p) => p.id === this.$route.params.id)`

@43:30, Continue working on ProductDetailPage.vue

@47:30, Working on CartPage.vue

@54:00, Adding totalPrice using the computed property method added in the data() from the CartPage.vue component

@55:40, Finished up with the 3 Main Component views for our ecommerce site

@55:45, Working on properly setting up the navigation bar

@58:50, Adding the NavBar.vue component to the App.vue main file component

@1:01:45, Making a 404 page to be able to display error if a user goes to a non-existing endpoint. By creating a NotFoundPage.vue views page.

@1:05:15, Also, make the NotFoundPage show for a specific :id / :url endpoint for a product by working on the ProductDetailPage.vue

@1:08:00, Split out the grid in the products page to separate re-usable components. By creating ProductsGrid.vue and ProductsGridItem.vue This is where we are introducing props

@1:18:30, Breaking down the CartPage.vue component as a Challenge

@1:26:15, Building the Backend using NodeJS. Instruction on how to install it. Also, explaining the use of ExpressJS

@1:27:20, Creating a directory for our backend called, fsv-back-end. Then doing, 'npm init -y'

@1:28:25, Installing package we will need for our backend: ExpressJS, (development packages 'npm install --save-dev') Babel (@babel/core) (@babel/node) (@babel/preset-env) (@babel/cli) (@babel/plugin-transform-runtime), (installing for production) @babel/runtime and creating a new folder called 'src' and within that creating a file called, server.js. After installing everything regarding babel we will create a new file in the root directory called .babelrc, and fill in the necessary object code in

@1:32:30, Writing a bit of [modern jsvascript code with the help of babel packages] server.js. How to run the initial server.js code is 'npx babel-node src/server.js'. Then go to localhost:8000/hello.

@1:36:10, Developing the back-end first is better than developing the front-end (same as my experience). Introducing postman.com to communicate with the backend. We have to download and install the program for postman tool. Working with postman.

@1:40:20, Installing a package called body-parser, for Express to be able to parse the body (npm install body-parser). We then need to add some code in the server.js file

@1:41:00, Communicating postman to the our running server @ localhost:8000 by setting up the POST request in our server.js file

(EXERCISE FILES > CH02 > 02_04 > Start)

@1:42:30, Introducing more ways of communicating to our server

@1:43:00, Express allows us to use url (/:id -> ie. /users/123/cart) parameters through GET request and us inputing the :id to deliver to the server.

@1:45:50, (EXERCISE FILES > CH02 > 02_05 > Start)

@1:46:20, Creating a database through json object and an array of objects

@1:48:30, Defining the first endpoint for getting all the products

@1:49:25, Defining the second endpoint for getting all the products by a specific user in there cart

@1:51:00, Defining the third endpoint for getting a single specific products

@1:52:30, Testing our 3 endpoints through postman

@1:54:30, Installing Nodemon (development install, npm install --save-dev nodemon). Change the command to run the server from 'npx babel-node src/server' to 'npx nodemon --exec npx babel-node src/server.js'. I created a 'start' command in the package.json so that I will only hit 'npm start' in the ommand line to start the server.

@1:57:30, Continue writing endpoints, Fourth endpoint for adding an item on a cart, which the client will send a req.body

@2:00:10, Fifth endpoint is for removing items in the cart
