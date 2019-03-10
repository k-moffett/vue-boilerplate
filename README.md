# Vue Boilerplate
This is a fullstack boilerplate for a Vue.js application utilizing Express, Sequalize, and a Postgres database. The frontend is setup within the './client' directory, while the beackend is in the './server' directory.
<br>
# Conveniences 
-The app is built without a CLI, utilizing webpack, in order to reduce unnecessary dependencies.<br>
-A very simple sign up/in form has been implemented for user registration.<br>
-Scss files are supported through webpack and store in their own './scss' directory under the './src' directory.<br>
-Vue Router has been setup as well using the connect-history-api-fallback package for serving the app via express as well as webpack's history-api-fallback option when using the client's dev environment.<br>
# Useful info
-cd into the './client' directory and enter

```
yarn run dev
```

into your terminal to enter the local dev environment on port 8080. Hot reloading has been enabled.<br>
-cd into the './client' directory and enter

```
yarn run build
```

to create the build file that will be served on the express server. This will create your build folder under the server directory, so you will not need to move any files to serve your build through express. This shoud also make it easy to move all files under the './server' directory to something such as a EC2 instance and have it ready to go; as long as you ahve set your EC2 up correctly.<br>
-cd into the server directory and enter

```
yarn run start
```

to start the express server and run your app on port 8080.
