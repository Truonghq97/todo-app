import { createSlice } from "@reduxjs/toolkit";

const reminderSlice = createSlice({
  name: "reminder",
  initialState: {
    data: [
      { id: 0, name: "Lời nhắc", listTasks: ["Lời nhắc 1", "Lời nhắc 2"] },
      { id: 1, name: "Planning", listTasks: ["Planning 1", "Planning 2"] },
      { id: 2, name: "Việc nhà", listTasks: ["Việc nhà 1", "Việc nhà 2"] },
    ],
    filteredCategory: {
      id: 1,
      name: "Lời nhắc",
      listTasks: ["Lời nhắc 1", "Lời nhắc 2"],
    },
    isShowListCategories: true,
  },
  reducers: {
    addCategory: (state, action) => {
      state.data = state.data.concat(action.payload);
    },
    filteredCategory: (state, action) => {
      state.filteredCategory = state.data[action.payload];
    },
    showListCategories: (state, action) => {
      state.isShowListCategories = action.payload;
    },
    addTask: (state, action) => {
      let { data } = state;
      data[action.payload.idx].listTasks = data[
        action.payload.idx
      ].listTasks.concat(action.payload.value);
      state.filteredCategory = data[action.payload.idx];
    },
    deleteTask: (state, action) => {
      let { data } = state;
      data[action.payload.categoryId].listTasks = data[
        action.payload.categoryId
      ].listTasks.filter((item, index) => index !== action.payload.idx);
      state.filteredCategory = data[action.payload.categoryId];
    },
    editTask: (state, action) => {
      let { data } = state;
      let newListTasks = data[action.payload.categoryId];
      newListTasks.listTasks[action.payload.idx] = action.payload.value;
      data[action.payload.categoryId] = newListTasks;
      state.filteredCategory = data[action.payload.categoryId];
    },
  },
});

const { reducer, actions } = reminderSlice;
export const {
  addCategory,
  filteredCategory,
  showListCategories,
  addTask,
  deleteTask,
  editTask,
} = actions;
export default reducer;
