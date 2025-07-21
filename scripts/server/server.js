// Seems not to work well.
//const dotenv = require('dotenv');

// works all right, but then doesn't like to import to script.js
// Update - I think dotenv may have a compatability issue with HTML.  It'll work with Node, but something like HTML works off document. and Node works off process.  At any rate, apparently Express may be used to resolved, perhaps.
//import dotenv from 'dotenv';

// hm.
// import * as dotenv from 'dotenv';

//dotenv.config();

/**
 * Trying to use express with node
 * After writing .env file and installing express with npm install express
 * https://expressjs.com/en/starter/installing.html
 * 
 * using as guide
 * https://medium.com/@tony.infisical/stop-using-dotenv-in-node-js-v20-6-0-8febf98f6314
 * node --env-file=.env app.js in bash?
 * Considering current file structure
 * node --env-file=.env scripts/server/server.js
 * OR
 * node --env-file=.env scripts/server/server.mjs
 * 'App listening on port 3000' displayed in console.
 * In browser, http://localhost:3000/ shows '
 * Hello! My name is Cinderella.
 * (process.env successfully recovered.  Will this cause app to crash?)
 * Also, it seems the user MUST probably use Node or something.  Hm.  Note to include instructionrs for use!
 */


//import express from "express";
// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/", async (req, res) => {
//   res.send(`Hello! My name is ${process.env.NAME}.`);
// });

// app.listen(PORT, async () => {
//   console.log(`App listening on port ${PORT}`);
// });

//export const API_KEY = process.env.API_KEY;
//export const API_KEY = `at_dygXiAyAFC60JTbZW0qdTK0u2On7f`;

export const fetchIPAddress = async (ipaddress = null, domain = null) => {
  //const API_KEY = process.env.API_KEY;
  //const API_KEY = 'at_dygXiAyAFC60JTbZW0qdTK0u2On7f';

  //leave to monitor invocations; each uses up 2 points.a
  console.log(`fetchIPAddress invoked with ipaddress ${ipaddress}, domain ${domain}`);

  /**
   * https://geo.ipify.org/docs
   * sample fetch GET
   * https://geo.ipify.org/api/v2/country?apiKey=at_dygXiAyAFC60JTbZW0qdTK0u2On7f&ipAddress=8.8.8.8
   * ipAddress Optional. IPv4 or IPv6 to search location by.  If the parameter is not specified, then it defaults to client request's public IP address.
   */

  /**
   * https://perscholas.instructure.com/courses/2754/pages/module-6-typescript-and-advanced-javascript?module_item_id=2196288
   */


  // Level 1 (lacks lat/long)
  // {
  //   ip: '71.183.93.127',
  //     location: { country: 'US', region: 'New York', timezone: '-04:00' },
  //   as: {
  //     asn: 701,
  //       name: 'UUNET',
  //         route: '71.183.0.0/17',
  //           domain: 'https://www.verizon.com/business/',
  //             type: 'NSP'
  //   },
  //   isp: 'Verizon'
  // }

  // Level 2 (with lat/long)
  //   {
  //   ip: '71.183.93.127',
  //   location: {
  //     country: 'US',
  //     region: 'New York',
  //     city: 'New York City',
  //     lat: 40.71427,
  //     lng: -74.00597,
  //     postalCode: '10001',
  //     timezone: '-04:00',
  //     geonameId: 5128581
  //   },
  //   as: {
  //     asn: 701,
  //     name: 'UUNET',
  //     route: '71.183.0.0/17',
  //     domain: 'https://www.verizon.com/business/',
  //     type: 'NSP'
  //   },
  //   isp: 'Verizon'
  // }


  //console.log(API_KEY);
  try {
    /**
     * Restore below section of code when pushing to production.
     */
    
    // let unprocessedIPData;
    // if (ipaddress) {
    //   console.log(`fetchIPAddress fetching with ip address argument. ${typeof(ipaddress)} ${ipaddress}`);
    //   unprocessedIPData = await fetch(`https://geo.ipify.org/api/v2/country,city?ipAddress=${ipaddress}&apiKey=${API_KEY}`)
    // } else if (domain) {
    //   console.log(`fetchIPAddress fetching with domain argument. ${typeof(domain)} ${domain}`);
    //   unprocessedIPData = await fetch(`https://geo.ipify.org/api/v2/country,city?domain=${domain}&apiKey=${API_KEY}`)
    // } else {
    //   unprocessedIPData = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`);
    // }
    // const data = await unprocessedIPData.json();

    /**
     * Take dataPromise and the const data below out when pushing to production.
     * https://ps-lms.vercel.app/curriculum/se/413/lesson-6
     */

    const dataPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ip: '71.183.93.127',
          location: {
            country: 'US',
            region: 'New York',
            city: 'New York City',
            lat: 40.71427,
            lng: -74.00597,
            postalCode: '10001',
            timezone: '-04:00',
            geonameId: 5128581
          },
          as: {
            asn: 701,
            name: 'UUNET',
            route: '71.183.0.0/17',
            domain: 'https://www.verizon.com/business/',
            type: 'NSP'
          },
          isp: 'Verizon'
        }, 0);
      })
    })
    const data = await dataPromise;

    // above through dataPromise to be removed when pushing to production.  Re-activate the fetch.
    console.log(`Data received from server: ${JSON.stringify(data)} with arguments ipaddress ${ipaddress}, domain ${domain}`);
    //When attempting to do nonexistent domain ("DomainHamsteR", get {"code":422,"messages":"Input correct domain."} as data.
    return data;

  } catch (error) {
    console.error('error in server.js', error);
  }
  // console.log(data);
}

export const server = () => {
  return 'server test';
}

fetchIPAddress();