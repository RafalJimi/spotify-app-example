## About this app

The client side of app-spotify was created in the Create-React-App and the server side was created in node.js with Fastify.

My main goal during creating this app was to build simple version of the spotify web app with basic functions like:<br />
• registration, 
• account login created during registration or login via gmail, 
• possibility of creating own playlists by user, renaming playlists, adding and removing tracks from playlists, deleting playlists,
• adding and removing tracks from favorites,
• searching tracks by genre, album or artist.


## Technologies and libraries

**On the client side of my app I used the following technologies:**<br />
• iTunes api to fetch data about songs, albums and artists,
• redux to manage state,
• redux-saga to handle asynchronous actions (i.e. data fetching),
• react-router and react-router-dom to navigate components,
• axios to fetch data,
• styled components to design layout,
• react-player to play the songs,
• Firebase to add authenticate using Google Sign-In,
• dotenv to load environment variables from .env file,
• query-string to parse query string into an object,
• react-reveal to add basic animations,
• react-toastify to add notifications to the app,
• react-indiana-drag-scroll to add possibility of horizontal scrolling sections, i.e. albums section,
• react-loader-spinner to add spinner animation while loading.

**On server side I used:**
• fastify,
• fastify-cors,
• fastify-plugin,
• jsonwebtoken,
• mongoose.


## How to run this app?
On the beginning - send me a message and then I'll send you file with env variables.<br /><br />
Clone repository with `git clone https://github.com/rafalzzz/spotify-app-example.git`<br />
Fetch all dependencies on the server side using `npm install` or `yarn install` and then go to the client client - `./client` and fetch all dependiences using also `npm` or `yarn`.<br />
Paste .env files on server and client side.<br />
Run app using `npm run start` or `yarn start`.<br />
Open http://localhost:3000 to view it in the browser.<br />
