const cleanData = (data) => {
  return data.filter(hero => hero.biography.alignment === 'good')
}

export { cleanData }
