import { configureStore } from '@reduxjs/toolkit'
import navigation from './slicers/navigation'
import character from './slicers/character'
import texts from './slicers/texts'

export default configureStore({
  reducer: {
    navigation: navigation.reducer,
    characters: character.reducer,
    texts: texts.reducer,
  },
})
