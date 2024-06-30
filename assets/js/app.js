const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');


//Juro que lo intenté, pero no pude hacer que funcionara :(
const displayUser = async(username) => {
  $n.textContent = ("cargando...");
  try {
    
      const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
  } catch (exception) {
      console.error('OH NO!', exception);

}
      n.textContent = `Algo salió mal: ${err}`

}

displayUser('stolinski');