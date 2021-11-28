

const BASE_URL = 'https://api-devs-maycry.herokuapp.com/';


async function handleGetUsuario(token) {

  const bearerToken = `Bearer ${token}`;
  const resource = 'usuario';
  const response = await fetch(BASE_URL + resource, {
    method: 'GET',
    headers: {
      'Authorization': bearerToken,
    }
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data);
  }
  console.log(data);
  return data;
}

async function handleRegister(resource, data) {
  try {
    const response = await fetch(BASE_URL + resource, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const dados = await response.json();

    console.log(response);
    if (!response.ok) {
      throw new Error(data)
    }

    return dados;
  } catch (error) {
    console.log('catch');
    return console.log(error.message);
  }
}



export { handleGetUsuario, handleRegister, BASE_URL };
