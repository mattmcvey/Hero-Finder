const cleanData = (data) => {
  data.forEach(hero => {
    if(hero.appearance.height[0] === '-'){
      hero.appearance.height[0] = 'unknown'
    }

    if(hero.appearance.weight[0] === '- lb'){
      hero.appearance.weight[0] = 'unknown'
    }

    if(hero.biography.fullName === ''){
      hero.biography.fullName = hero.name
    }

    if(hero.connections.groupAffiliation === '-'){
      hero.connections.groupAffiliation = 'unknown'
    }
    hero.favorited = false
  })
  return data.filter(hero => hero.biography.alignment === 'good')
}

export { cleanData }
