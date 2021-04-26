const getHeroes = () => {
  return fetch('https://akabab.github.io/superhero-api/api/all.json')
    .then(response => {
      if(!response.ok) {
        return response.error
      }
    return response.json()
  })
}

export { getHeroes }
