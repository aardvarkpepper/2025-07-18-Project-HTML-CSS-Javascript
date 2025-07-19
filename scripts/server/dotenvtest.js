/**
 * Initial dotenv test
 */ 
console.log(`Your port is ${process.env.PORT}`); // undefined
const dotenv = require('dotenv');
// or import dotenv from 'dotenv'; if require isn't accepted.
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); // 8626

// Load API key from environment variables
const API_KEY = process.env.API_KEY;
console.log(API_KEY);

/**
 * dotenv documentation base
 * Note:  Ctrl-C to break out in bash.
 * Unused, as I think this sets up a server.  Don't know if this may cause issues.
 * in .env would have
 * HELLO="World"
 * See https://www.dotenv.org/docs/quickstart for details.
 */

// require('dotenv').config()
// const PORT = process.env.PORT || 3000
// const http = require('http')
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end(`Hello ${process.env.HELLO}`)
// })

// server.listen(PORT, () => {
//   console.log(`Server running on port:${PORT}/`)
// })

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
