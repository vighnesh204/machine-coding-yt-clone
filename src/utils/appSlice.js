import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isOpen: true,
    },
    reducers: {
        toggleOpen: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})

export default appSlice.reducer;
export const { toggleOpen } = appSlice.actions;