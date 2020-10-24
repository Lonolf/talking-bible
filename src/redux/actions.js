import navigation from './slicers/navigation';
import character from './slicers/character';
import texts from './slicers/texts'

export default {
  ...navigation.actions,
  ...character.actions,
  ...texts.actions,
}