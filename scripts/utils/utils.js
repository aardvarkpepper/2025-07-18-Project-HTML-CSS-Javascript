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

export const getStateAbbreviationOrDefault = (stringInput) => {
  const data = new Map([
    ['Arizona', 'AZ'],
    ['Alabama', 'AL'],
    ['Alaska', 'AK'],
    ['American Samoa', 'AS'],
    ['Arkansas', 'AR'],
    ['California', 'CA'],
    ['Colorado', 'CO'],
    ['Connecticut', 'CT'],
    ['Delaware', 'DE'],
    ['District of Columbia', 'DC'],
    ['Florida', 'FL'],
    ['Georgia', 'GA'],
    ['Guam', 'GU'],
    ['Hawaii', 'HI'],
    ['Idaho', 'ID'],
    ['Illinois', 'IL'],
    ['Indiana', 'IN'],
    ['Iowa', 'IA'],
    ['Kansas', 'KS'],
    ['Kentucky', 'KY'],
    ['Louisiana', 'LA'],
    ['Maine', 'ME'],
    ['Maryland', 'MD'],
    ['Massachusetts', 'MA'],
    ['Michigan', 'MI'],
    ['Minnesota', 'MN'],
    ['Mississippi', 'MS'],
    ['Missouri', 'MO'],
    ['Montana', 'MT'],
    ['Nebraska', 'NE'],
    ['Nevada', 'NV'],
    ['New Hampshire', 'NH'],
    ['New Jersey', 'NJ'],
    ['New Mexico', 'NM'],
    ['New York', 'NY'],
    ['North Carolina', 'NC'],
    ['North Dakota', 'ND'],
    ['Northern Marina Islands', 'MP'],
    ['Ohio', 'OH'],
    ['Oklahoma', 'OK'],
    ['Oregon', 'OR'],
    ['Pennsylvania', 'PA'],
    ['Puerto Rico', 'PR'],
    ['Rhode Island', 'RI'],
    ['South Carolina', 'SC'],
    ['South Dakota', 'SD'],
    ['Tennessee', 'TN'],
    ['Texas', 'TX'],
    ['Trust Territories', 'TT'],
    ['Utah', 'UT'],
    ['Vermont', 'VT'],
    ['Virgin Islands', 'VI'],
    ['Virginia', 'VA'],
    ['Washington', 'WA'],
    ['West Virginia', 'WV'],
    ['Wisconsin', 'WI'],
    ['Wyoming', 'WY'],
  ])
  if (data.has(stringInput)) {
    return data.get(stringInput);
  } else {
    return stringInput;
  }
}

// console.log(getStateAbbreviationOrDefault('California') === "CA");
// console.log(getStateAbbreviationOrDefault('New York') === "NY");
// console.log(getStateAbbreviationOrDefault('Great Britain') === "Great Britain");
// console.log(getStateAbbreviationOrDefault('Guam') === "GU");
// console.log(getStateAbbreviationOrDefault('Californya') === "Californya");