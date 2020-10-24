import { createSlice } from '@reduxjs/toolkit';

export const character = createSlice({
  name: 'character',
  initialState: {
    name: null,
  },
  reducers: {
    character_setCharacter: (state, { type, payload }) => {
      return payload
    },
  },
});

export default character
