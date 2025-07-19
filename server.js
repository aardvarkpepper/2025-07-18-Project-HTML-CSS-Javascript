// require('dotenv').config();
// const express = require('express');
// const axios = require('axios');
// const app = express();
// const PORT = 3000;

// server.js
console.log(`Your port is ${process.env.PORT}`); // undefined
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); // 8626

// // Load the API key from environment variables
const API_KEY = process.env.API_KEY;
console.log(API_KEY);

// app.get('/api/data', async (req, res) => {
//     try {
//         const response = await axios.get(`https://thirdpartyapi.com/data?key=${API_KEY}`);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).send('Error fetching data');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
