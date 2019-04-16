# Vue Boilerplate
This is a fullstack boilerplate for a Vue.js application utilizing Express, Sequalize, and a Postgres database. The frontend is setup within the './client' directory, while the beackend is in the './server' directory.
<br>

# Conveniences 
-The app is built without a CLI, utilizing webpack, in order to reduce unnecessary dependencies.<br>
-A very simple sign up/in form with frontend and backend validation has been implemented for user registration.<br>
-Scss modules are supported through webpack and store in their own './scss' directory under the './src' directory.<br>
-Vue Router has been setup as well using the connect-history-api-fallback package for serving the app via express as well as webpack's history-api-fallback option when using the client's dev environment.<br>
-A proxy has been setup to allow you to run your client and server at the same time to allow easy API call testing. Hot-reloading has been enabled through the use of webpack for your client and the npm package pm2 for your server. You will not need to create any new builds or restart your server manually, just simply save any files.<br>

# Starting the hot-reloading proxy
-cd into the client and server directories and 

```
yarn install
```

-Now cd in the root of the project and 

```
yarn run dev
```

<br>
-Now your Vue dev server will start in tandem with your express server and all requests will be rerouted back to the root of your dev environment, allowing you to test calls to your API. 
<br>

# Important
-You will need to ensure that your .env variables for your DB have been setup corerctly for this boilerplate to work, which means you will also need a local instance of Postgres running when you start this app. If you are not interested in this, simply remove the db directory and use the second app.listen function in server.js rather than the one directly above it. You can then go into the src directory and remove everything but App.js and Router.js. Now you will be able to start fresh with all of the conveniences still available, but without the bloat of a CLI installation.
