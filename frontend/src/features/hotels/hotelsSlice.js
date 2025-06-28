import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHotelsByCity = createAsyncThunk(
    'hotels/fetchHotelsByCity',
    async (city) => {
        const response = await fetch(`http://localhost:3000/api/hotels?city=${city}`);
        return await response.json();
    }
);

const hotelsSlice = createSlice({
    name: 'hotels',
    initialState: {
        hotels: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHotelsByCity.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHotelsByCity.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.hotels = action.payload;
            })
            .addCase(fetchHotelsByCity.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default hotelsSlice.reducer;
