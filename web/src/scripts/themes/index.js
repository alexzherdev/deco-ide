import * as dark from './dark'
import * as light from './light'

const themes = [
  dark,
  light,
]

export default themes

export const getThemeById = (id) => {
  return themes.find(theme => id === theme.id)
}
