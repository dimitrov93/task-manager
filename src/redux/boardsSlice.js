import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const boardsSlice = createSlice({
  name: "boards",
  initialState: data.boards,
  reducers: {
    addTask: (state, action) => {
      const { title, description, status } = action.payload;
      const board = state.find((board) => board.isActive == false);
      const column = board.columns.find((col, index) => col.name == status);
      column.tasks.push({title,description, status})

    },
  },
});

export const { addTask } = boardsSlice.actions;

export default boardsSlice;
