const express = require('express');
const artistControllers = require('./controllers/artists');
const albumControllers = require('./controllers/albums');

const app = express();

/* Below, express.json() returns a parser that is provided by express library,
 to parse only JSON requests.
With app.use, we add it as a middleware in our application. */

app.use(express.json());

module.exports = app;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
/* Below, instead of defining the content of the controller for the specified
route directly in the app.js file, we specify a controller function.
It is better this way, because concerns are separated in different files:
 one file for the routing, one file (or several files) for the controller. */

// artists

app.post('/artists', artistControllers.create);

app.get('/artists', artistControllers.list);

app.get('/artists/:id', artistControllers.getArtistById);

app.patch('/artists/:id', artistControllers.updateArtist);

app.delete('/artists/:id', artistControllers.deleteArtist);

// albums

app.post('/artists/:artistId/albums', albumControllers.create);
