const express = require('express');
require('dotenv').config();
const fetch = require('node-fetch');
const axios = require('axios');
const cors = require('cors');




const app = express();
const port = process.env.PORT || 4000;
// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.get('/', async (request, response) => {

//   try{
//     const api_res = await axios.post(
//       route,
//       {
//         "appid": id,
//         "sec": secret
//       },
//     ).then(res => {
//       console.log(`statusCode: ${res.statusCode}`)
//       // console.log(res.)
  
  
//     }).catch(error => {
//       console.error(error)
//     })
   
    
//     response.send(null)
//    }catch(e){
 
//    }
// });

// const apikey = process.env.
// const apiSecret = process.env.

const options ={
  method: 'GET',
  url: 'https://api.',
  headers: {'Content-Type': 'application/json'}
}
// axios.request(options)

app.get('/news', async (request, response) => {

  try{
    const api_res = await axios.post(
     ' route', option
    ).then(res => {
      console.log(`statusCode: ${res.statusCode}`)
  
    }).catch(error => {
      console.error(error)
    })
   
    
    response.send(null)
   }catch(e){
 
   }
});

app.get('/', async (request, response) => {

  try{
    const api_res = await axios.post('route', option)
    let data = await api_res.json()

    response.send(null)
   }catch(e){
 
   }
});



app.listen(port, () => {
    console.log(`Starting server at ${port}`);
  });