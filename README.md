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

@2:02:00, Testing the two new routes (adding and removing an item) in postman

@2:03:30, Talking about and installing MongoDB. Was able to install mongoDB in wsl2 though this link: https://dev.to/seanwelshbrown/installing-mongodb-on-windows-subsystem-for-linux-wsl-2-19m9. Two terminals are needed, FIRST terminal is to run `mongod` and the SECOND terminal is to run `mongo` <- it is the shell of mongodb

@2:08:00, Showing the commands to run the mongodb. The DOCS to learn more about the mongoDB commands: https://docs.mongodb.com

@2:08:20, Commands and guide to create our ecommerce database,

- @2:08:25, Creating a new database for our backend,:

> show dbs ---> Shows all the database in the system
> use vue-db-ecommerce ---> Creates a database in the system

@2:10:30, Putting the data in the db one-by-one because the mongo shell does not like to put all the array of products object at once. Basic steps are below,

> db.products.insertMany([{

    id: "123",
    name: "Running Shoes",
    price: "60.00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
    imageUrl: "/images/shoes-1.jpg",
    averageRating: "5.0",

}]) ---> The `.products` is the collection within the 'vue-db-ecommerce' database that we would want to insert the object data into. Paste each object one-by-one with a comma in-between and close it all off with a `])`

> show collections ---> which will initiate by showing us that we have only a 'products' collections. And then we type,
> db.products.find({}) ---> which will show us what is inside the 'products' collection
> db.products.find({}).pretty() ---> which will show us a more organze version of the 'products' collection

@2:12:05, For the Product section in our client: Searching for a criteria within the 'products' collection,

> db.products.find({ id:'123' }).pretty() ---> Searching id: 123 within the 'products' collection
> db.products.findOne({ id:'123' }) ---> Searching at-most, one product within our query

@2:13:20, For the Shopping Cart section in our client: Assigning one user

> db.users.insertOne({ ---> Inserting the 'users' collection in our database, vue-db-ecommerce.
> ... id: '12345',
> ... cartItems: [
>
> > ... '123',
> > ... '234',
> > ... '456',
> > ... ]
> > ... })

> ^C ---> Typing CTRL + C to exit the mongodb shell, mongo

@2:14:30, Incorporating MongoDB within our Express Server in src/server.js. We will install the mongodb driver in our porject on our back-end server directory (package.json).
`npm install mongodb` <--- this package will allow us to 'connect to' and 'modify' our local database from inside our express server code, making our data more persistent.
