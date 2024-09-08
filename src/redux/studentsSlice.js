import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    removeStudent: (state, action) => {
      return state.filter((student) => student.id !== action.payload);
    },
  },
});

export const { addStudent } = studentsSlice.actions;
export default studentsSlice.reducer;