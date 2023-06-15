import { createSlice } from "@reduxjs/toolkit";
import data from "../../../utils/constant/data";

const movieSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {},
  },
});

// generate action dan reducers
const { addMovie } = movieSlice.actions;
const moviesReducers = movieSlice.reducers;

export { addMovie };
export default moviesReducers;
