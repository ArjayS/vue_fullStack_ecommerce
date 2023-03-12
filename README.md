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
