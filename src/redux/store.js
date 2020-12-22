import { configureStore } from '@reduxjs/toolkit'
import errors from './slicers/errors'
import loading from './slicers/loading'
import navigation from './slicers/navigation'
import character from './slicers/character'
import texts from './slicers/texts'

export default configureStore({
  reducer: {
    errors: errors.reducer,
    loading: loading.reducer,
    navigation: navigation.reducer,
    characters: character.reducer,
    texts: texts.reducer,
  },
})
