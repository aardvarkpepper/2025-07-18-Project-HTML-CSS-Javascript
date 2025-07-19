//const dotenv = require('dotenv');
import dotenv from 'dotenv';
dotenv.config();

export const fetchIPAddress = async () => {
  const API_KEY = process.env.API_KEY;
  /**
   * https://geo.ipify.org/docs
   * sample fetch GET
   * https://geo.ipify.org/api/v2/country?apiKey=at_dygXiAyAFC60JTbZW0qdTK0u2On7f&ipAddress=8.8.8.8
   * ipAddress Optional. IPv4 or IPv6 to search location by.  If the parameter is not specified, then it defaults to client request's public IP address.
   */

  /**
   * https://perscholas.instructure.com/courses/2754/pages/module-6-typescript-and-advanced-javascript?module_item_id=2196288
   */

  console.log(API_KEY);

  // const unprocessedIPData = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`);
  // const data = await unprocessedIPData.json();
  // console.log(data);

}

fetchIPAddress();