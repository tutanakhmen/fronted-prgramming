import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/constant/data";
// import Counter from "../components/Counter";

/**
 * Membuat Component Home.
 * Menampilka Halaman Home.
 * Menampung Navbar, Main, dan Footer Components.
 * 
 */
function Home() {
    const [movies, setMovies] = useState(data);
    return (
        <>
        <Hero />
        <Movies movies={movies} setMovies={setMovies} />
        <AddMovieForm movies={movies} setMovies={setMovies}/>
        </>
    );

    // return (
    //     <Counter />
    // )
}

export default Home;