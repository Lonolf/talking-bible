import { createSlice } from '@reduxjs/toolkit';

export const navigation = createSlice({
  name: 'navigation',
  initialState: {
    pages: ['character'],
  },
  reducers: {
    navigationNavigate: (state, { type, payload }) => {
      state.pages.push(payload);
    },
    navigationGoBack: (state, {type, payload}) => {
      if (state.pages.length > 1)
        state.pages.pop()
      else
        state.pages = ['character']
    }
  },
});

export default navigation
