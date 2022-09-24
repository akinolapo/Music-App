import { create}

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '845ea87b68msh2742d9894fde6ebp1789ccjsn64ee6e16e934',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi =