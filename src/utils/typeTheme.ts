const typeColor = (type: string): string => {
  if (type === 'Combat') return 'orange'
  if (type === 'Eau') return 'lightblue'
  if (type === 'Electrik') return 'yellow'
  if (type === 'Fée') return 'pink'
  if (type === 'Feu') return '#dd3c3c'
  if (type === 'Insecte') return '#d16a47'
  if (type === 'Plante') return '#a6e963'
  if (type === 'Poison') return '#8c47d1'
  if (type === 'Psy') return '#c763e9'
  if (type === 'Vol') return '#5778db'
  return 'lightgrey'
}

export default typeColor