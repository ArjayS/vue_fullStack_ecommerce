import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

// @2:47:45 - Commenting this fake data out
// const products = [
//   {
//     id: "123",
//     name: "Running Shoes",
//     price: "60.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-1.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "234",
//     name: "Basketball Shoes",
//     price: "120.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-2.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "345",
//     name: "Bright Red Shoes",
//     price: "90.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-3.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "456",
//     name: "Fancy Shoes",
//     price: "190.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-4.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "567",
//     name: "Skateboard Shoes",
//     price: "75.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-5.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "678",
//     name: "High Heels",
//     price: "200.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-6.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "789",
//     name: "Dark Shoes",
//     price: "100.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-7.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "890",
//     name: "Classic Shoes",
//     price: "40.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-8.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "901",
//     name: "Plain Shoes",
//     price: "54.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-9.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "112",
//     name: "Teal Dress Shoes",
//     price: "330.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-10.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "223",
//     name: "Fancy Boots",
//     price: "230.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-11.jpg",
//     averageRating: "5.0",
//   },
//   {
//     id: "334",
//     name: "Gold Shoes",
//     price: "180.00",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim quam. Mauris nisl tellus, fringilla sed cursus eu, convallis non diam. Mauris quis fringilla nunc. Aenean leo lacus, lobortis sit amet venenatis a, aliquet tristique erat. Etiam laoreet mauris ut dapibus tincidunt. Pellentesque non ex at nisl ornare aliquam sed non ante. Nam lobortis magna id massa cursus, sit amet condimentum metus facilisis. Donec eu tortor at est tempor cursus et sed velit. Morbi rutrum elementum est vitae fringilla. Phasellus dignissim purus turpis, ac varius enim auctor vulputate. In ullamcorper vestibulum mauris. Nulla malesuada pretium mauris, lobortis eleifend dolor iaculis vitae.",
//     imageUrl: "/images/shoes-12.jpg",
//     averageRating: "5.0",
//   },
// ];

export let cartItems = [products[0], products[2], products[3]];

const app = express();
app.use(bodyParser.json());

// From Postman activating the res.send through a GET request of localhost:8000/hello
app.get("/hello", (req, res) => {
  res.send("Hello!");
});

// From Postman activating the res.send through a POST of request localhost:8000/hello
app.post("/hello", (req, res) => {
  res.send(`Hello ${req.body.name}`);
});

// From Postman activating the res.send through a GET request of localhost:8000/hello/Robert and adding a parameter of Robert
app.get("/hello/:name", (req, res) => {
  res.send(`Hello ${req.params.name}!`);
});

// @1:48:30, First endpoint for getting all the products
app.get("/api/products", async (req, res) => {
  // @2:15:45, Adding an asynchronous code to connect to the mongodb driver

  // Connection to mongoDB logic
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("vue-db-ecommerce");

  // MongoDB GET logic for the route: /api/products
  const products = await db.collection("products").find({}).toArray();
  // MongoDB GET logic for the route: /api/products

  res.status(200).json(products);

  client.close();
});

// @1:48:30, Second endpoint for getting all of a specific users cart products
app.get("/api/users/:userId/cart", async (req, res) => {
  // @2:20:00 working with the `/api/users/:userId/cart` route, and connecting and communcating with mongoDB
  const { userId } = req.params;

  // Connection to mongoDB logic
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("vue-db-ecommerce");

  // MongoDB GET logic for the route: /api/users/:userId/cart
  const user = await db.collection("users").findOne({ id: userId });
  if (!user) return res.status(404).json("Could not find user");
  const products = await db.collection("products").find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map((id) =>
    products.find((product) => product.id === id)
  );
  // MongoDB GET logic for the route: /api/users/:userId/cart

  res.status(200).json(cartItems);

  client.close();
});

// @1:51:00, Third endpoint for getting a single specific products
app.get("/api/products/:productId", async (req, res) => {
  // 2:25:00, working with the `/api/products/:productId` route, and connecting and communicating with mongoDB
  const { productId } = req.params;

  // Connection to mongoDB logic
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("vue-db-ecommerce");

  // const product = products.find((product) => product.id === productId); <--- This corresponds to looping over the products variable in this file, above.

  // MongoDB GET logic for the route: /api/products/:productId
  const product = await db.collection("products").findOne({ id: productId });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json("Could not find the product!");
  }
  // MongoDB GET logic for the route: /api/products/:productId

  client.close();
});

// @1:57:30, Fourth endpoint for adding an item on a cart, which the client will send a req.body
app.post("/api/users/:userId/cart", async (req, res) => {
  // 2:27:05, Adding the logic to connect and communicate with the mongoDB for this POST request
  const { userId } = req.params;
  const { productId } = req.body;

  // Connection to mongoDB logic
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("vue-db-ecommerce");

  // const product = products.find((product) => product.id === productId); <--- This corresponds to looping over the products variable in this file, above.

  // MongoDB POST logic for the route: /api/users/:userId/cart
  await db.collection("users").updateOne(
    { id: userId },
    {
      $addToSet: { cartItems: productId },
    }
  );

  const user = await db.collection("users").findOne({ id: userId });
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map((id) =>
    products.find((product) => product.id === id)
  );
  // MongoDB POST logic for the route: /api/users/:userId/cart

  res.status(200).json(cartItems);

  // Old logic below only corresponds to the data above
  // if (product) {
  //   cartItems.push(product);
  //   res.status(200).json(cartItems);
  // } else {
  //   res.status(404).json("Could not find the product!");
  // }

  client.close();
});

// @2:00:10, Fifth endpoint is for removing item in the cart
app.delete("/api/users/:userId/cart/:productId", async (req, res) => {
  // @2:31:20, Adding the logic to connect and communicate with the mongoDB for this DELETE request
  const { userId, productId } = req.params;

  // Connection to mongoDB logic
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db("vue-db-ecommerce");

  // cartItems = cartItems.filter((product) => product.id !== productId); <-- This only corresponds to looping over the products variable in this file, above.

  // MongoDB DELETE logic for the route: /api/users/:userId/cart/:productId
  await db.collection("users").updateOne(
    { id: userId },
    {
      $pull: { cartItems: productId },
    }
  );

  const user = await db.collection("users").findOne({ id: userId });
  const products = await db.collection("products").find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map((id) =>
    products.find((product) => product.id === id)
  );
  // MongoDB DELETE logic for the route: /api/users/:userId/cart/:productId

  res.status(200).json(cartItems);

  client.close();
});

// Server listening to PORT = 8000
app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
