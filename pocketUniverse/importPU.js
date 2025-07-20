export const importExportTest = async () => {
  try {
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
    return data;
  } catch (error) {
    console.error('Error in importExportTest', error);
  }

}