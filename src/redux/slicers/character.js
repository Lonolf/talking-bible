import { createSlice } from '@reduxjs/toolkit'

import charactersLists from 'assets/characters'
import { findDefaultCharacter } from 'redux/logic/charactersLogic'

export const characters = createSlice({
  name: 'characters',
  initialState: {
    character: null,
    charactersList: null,
    charactersListsNames: Object.keys(charactersLists),
  },
  reducers: {
    characters_setCharacter: (state, { payload }) => {
      state.character = state.charactersList[payload]
    },
    characters_setCharactersList: (state, { payload }) => {
      try {
        if (charactersLists[payload] != null) {
          state.charactersList = charactersLists[payload]
          state.character = findDefaultCharacter(charactersLists[payload])
        } else {
          throw new Error('Characters List "' + String(payload) + '" not found')
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
})

export default characters
