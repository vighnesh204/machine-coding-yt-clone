import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isOpen: true,
    },
    reducers: {
        toggleOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
         closeMenu: (state) => {
        state.isOpen = false;
    }
    }
   
})

export default appSlice.reducer;
export const { toggleOpen, closeMenu } = appSlice.actions;