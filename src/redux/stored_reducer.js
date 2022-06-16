import { createSlice } from "@reduxjs/toolkit";

export const stored_reducer = createSlice({
  name: "admin",
  initialState: {
    values: {
      users: [{}, {}, {}, {}],
    },
    currentPage: {},
    loading: false,
  rowId: 0,
  },
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setUser: (state, { payload }) => {
      state.values.users = payload;
    },
    setIsOpenModal: (state, { payload }) => {
      state.currentPage.isOpenModal = payload;
    },
    setRowId: (state, { payload }) => {
      state.rowId = payload;
    },
  },
});

export const { setCurrentPage, setUser, setIsOpenModal, setRowId } =
  stored_reducer.actions;
export default stored_reducer.reducer;
