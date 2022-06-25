import { createSlice } from "@reduxjs/toolkit";

export const stored_reducer = createSlice({
  name: "admin",
  initialState: {
    values: {
      users: [],
    },
    value: [],
    currentPage: {},
    user: [],
    loading: false,
    rowId: 0,
  },
  reducers: {
    setUsers: (state, { payload }) => {
      state.values.users = payload;
    },
    setValue: (state, { payload }) => {
      state.value = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setIsOpenModal: (state, { payload }) => {
      state.currentPage.isOpenModal = payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    setRowId: (state, { payload }) => {
      state.rowId = payload;
    },
  },
});

export const {
  setUsers,
  setValue,
  setCurrentPage,
  setUser,
  setIsOpenModal,
  startLoading,
  stopLoading,
  setRowId,
} = stored_reducer.actions;
export default stored_reducer.reducer;
