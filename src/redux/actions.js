import character from './slicers/character'
import errors from './slicers/errors'
import loading from './slicers/loading'
import navigation from './slicers/navigation'
import texts from './slicers/texts'

export default {
  ...errors.actions,
  ...character.actions,
  ...loading.actions,
  ...navigation.actions,
  ...texts.actions,
}
