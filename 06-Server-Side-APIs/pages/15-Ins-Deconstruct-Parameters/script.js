fetch('https://rickandmortyapi.com/api/character?gender=male&status=Alive&species=Alien')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

  // 'https://api.github.com/gists/public?since=2020-06-01&per_page=100'