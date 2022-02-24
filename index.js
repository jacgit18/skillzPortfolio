const express = require('express');
require('dotenv').config();

// const axios = require('axios');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.get('/', (request, response) => {
  response.send("hello")
//   response.json(Prod)
});

// app.get('/',(request, response) => {
//   response.json(Prod.find((prod)=>{
//     return request.params.name === prod.name;
//   }))
//   // response.send(request.params.name)
// });

// app.post('/add', (req, res) => {
//   console.log(req.body.title);
//   res.sendStatus(200)
// })


app.listen(port, () => {
    console.log(`Starting server at ${port}`);
  });