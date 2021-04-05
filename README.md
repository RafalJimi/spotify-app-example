## About this app

The client side of app-spotify was created in the Create-React-App and the server side was created in node.js with Fastify.

My main goal during creating this app was to build simple version of the spotify web app with basic functions like:<br /><br />
• registration,<br />
• account login created during registration or login via gmail,<br />
• possibility of creating own playlists by user, renaming playlists, adding and removing tracks from playlists, deleting playlists,<br />
• adding and removing tracks from favorites,<br />
• searching tracks by genre, album or artist.<br />
<br />

## Technologies and libraries

**On the client side of my app I used the following technologies:**<br /><br />
• iTunes api to fetch data about songs, albums and artists,<br />
• redux to manage state,<br />
• redux-saga to handle asynchronous actions (i.e. data fetching),<br />
• react-router and react-router-dom to navigate components,<br />
• axios to fetch data,<br />
• styled components to design layout,<br />
• react-player to play the songs,<br />
• Firebase to add authenticate using Google Sign-In,<br />
• dotenv to load environment variables from .env file,<br />
• query-string to parse query string into an object,<br />
• react-reveal to add basic animations,<br />
• react-toastify to add notifications to the app,<br />
• react-indiana-drag-scroll to add possibility of horizontal scrolling sections, i.e. albums section,<br />
• react-loader-spinner to add spinner animation while loading.<br />
<br /><br />
**On server side I used:**<br />
• fastify,<br />
• fastify-cors,<br />
• fastify-plugin,<br />
• jsonwebtoken,<br />
• mongoose.
<br /><br />

## How to run this app?
1. Send me a message and then I'll send you file with env variables.<br /><br />
2. Clone repository with `git clone https://github.com/rafalzzz/spotify-app-example.git`<br />
3. Fetch all dependencies on the server side using `npm install` or `yarn install` and then go to the client client - `./client` and fetch all dependiences using also `npm` or `yarn`.<br />
4. Paste .env files on server and client side.<br />
5. Run app using `npm run start` or `yarn start`.<br />
6. Open http://localhost:3000 to view it in the browser.<br />
