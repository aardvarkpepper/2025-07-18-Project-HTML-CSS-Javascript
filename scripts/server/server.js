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


  //console.log(API_KEY);
  try {
    /**
     * Restore below two lines of code when pushing to production.
     */

    // const unprocessedIPData = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}`);
    // const data = await unprocessedIPData.json();

    /**
     * Take dataPromise and the const data below out when pushing to production.
     * https://ps-lms.vercel.app/curriculum/se/413/lesson-6
     */
    const dataPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ip: '71.183.93.127',
          location: { country: 'US', region: 'New York', timezone: '-04:00' },
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
    //console.log(data);
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