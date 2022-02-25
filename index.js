const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch');
const axios = require('axios');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (request, response) => {
  response.send("hello")
//   response.json(Prod)
});

// app.get('/test', async (request, response) => {
 
  // response.send(request.params.name)
// });

// app.post('/add', (req, res) => {
//   console.log(req.body.title);
//   res.sendStatus(200)
// })


app.listen(port, () => {
    console.log(`Starting server at ${port}`);
  });