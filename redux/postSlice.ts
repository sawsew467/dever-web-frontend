// redux/postSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface Post {
  id: string;
  content: string;
}

const initialState: Post[] = [];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
