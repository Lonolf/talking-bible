import { createSlice, nanoid } from '@reduxjs/toolkit';

export const texts = createSlice({
  name: 'texts',
  initialState: {},
  reducers: {
    texts_createText: (state, { type, payload: { text, texter } }) => {
      const textId = nanoid()
      state[textId] = { text: String(text), textId, texter };
    },
  },
});

export default texts
