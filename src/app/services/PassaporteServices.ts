import chaves from "../configs/chaves";
const fetch = require('node-fetch');

class PassaporteServices {
  async AutorizarApp() {
    const response = await fetch(chaves.PassaporteApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idoperacao: '1',
        clientkey: chaves.PassaporteToken,
      }),
    });

    return response.json();
  }
}

export default new PassaporteServices();