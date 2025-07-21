export const isLegalIPAddress = (inputString) => {
  const ip6Test = /^[0-9a-f]{4}/;
  // ^ start of string
  // {4} look for this four times.
  //ip4 0.0.0.0 to 255.255.255.255
  //ip6 eight groups of four hexadecimals
  const inputStringSplit = inputString.split(".");
  if (inputStringSplit.length === 4) {
    for (let i = 0; i < inputString.length; i++) {
      const convertToNumber = Number(inputStringSplit[i]);
      if (convertToNumber < 0 || convertToNumber > 255) {
        //console.log('ip4 false');
        return false;
      }
    }
    //console.log('ip4 true');
    return true; // all elements are numbers between 0 and 255 inclusive
  } // inputStringSplit.length === 4
  if (inputStringSplit.length === 8) {
    let isIP6 = false;
    for (const section of inputStringSplit) {
      if (!ip6Test.test(section)) {
        //console.log(`section fail ${section}, ip6 false`);
        return false;
      };
    }
    //console.log(`ip6 true`);
    return true;
  }
  return false; // if it's not ip4 or ip6 then it's not an IP address.
}

// console.log(isLegalIPAddress('000.11.2.255') === true);
// console.log(isLegalIPAddress('000.111.222.256') === false);
// console.log(isLegalIPAddress('0000.ffff.0000.1111.2222.3333.4444.5555') === true);
// console.log(isLegalIPAddress('0000.ffff.000g.1111.2222.3333.4444.5555') === false);