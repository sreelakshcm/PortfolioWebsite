import { createSlice } from '@reduxjs/toolkit';

interface NavbarState {
  isOpen: boolean;
}

const initialState: NavbarState = {
  isOpen: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeNavbar: (state) => {
      state.isOpen = false;
    },
    openNavbar: (state) => {
      state.isOpen = true;
    },
  },
});

export const { toggleNavbar, closeNavbar, openNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
