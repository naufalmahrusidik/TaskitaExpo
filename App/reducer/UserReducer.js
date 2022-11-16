import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        id: '',
        nama: '',
        email: ''
    },
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
        },
        setNama: (state, action) => {
            state.nama = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
    }
})