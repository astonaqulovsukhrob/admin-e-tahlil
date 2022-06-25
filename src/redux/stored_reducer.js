import { createSlice } from "@reduxjs/toolkit";

export const stored_reducer = createSlice({
  name: "admin",
  initialState: {
    values: {
      users: [
        {
          id: "1",
          region_name: "Fergana",
          name_1: "sukhrob",
          name_2: "sukhrob",
          name_3: "sukhrob",
          name_4: "sukhrob",
        },
        {
          id: "2",
          region_name: "Fergana",
          name_1: "sukhrob",
          name_2: "sukhrob",
          name_3: "sukhrob",
          name_4: "sukhrob",
        },
        {
          id: "3",
          region_name: "Fergana",
          name_1: "sukhrob",
          name_2: "sukhrob",
          name_3: "sukhrob",
          name_4: "sukhrob",
        },
        {
          id: "3",
          region_name: "Fergana",
          name_1: "sukhrob",
          name_2: "sukhrob",
          name_3: "sukhrob",
          name_4: "sukhrob",
        },
      ],
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
