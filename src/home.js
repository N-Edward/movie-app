import React, { useEffect, useState } from "react";
import axios from 'axios';
import './home.css';


const Home = () => {
    const [movies, setMovies] = useState([])
    const [title, setTitle] =  useState("cars")
    const [networkerr, Setnetworkerr] = useState(false)
    console.log("more money");

    const fetch_movies = (title) => {
         axios.get(`${process.env.REACT_APP_MOVIE_URL}?apikey=${process.env.REACT_APP_API}&s=${title}`).then((response) =>{
            setMovies(response.data.Search);
            console.log(response.data);
        }).catch((error)=> Setnetworkerr(true))
        console.log("test");
    };
    useEffect(() => {
        fetch_movies(title);
    },[]);
    console.log("more money");

   const handleSearch = (e) => {
    e.preventDefault();
    fetch_movies(title)
   }

    return(
        <>
        <div className="top-bar">
        <h3> Movie Search</h3>
        <div>
            <form  onSubmit={handleSearch}>
            <input type="text" value={title} name="movieTitle" onChange={(e) => setTitle(e.target.value)} />
            <button type="submit" >Search</button>

        </form>
        </div>
        </div>
        <div className="space"></div>


        <div className="movie-cont" >
            {
                !networkerr? (
                    <div className="movie-list">
        {movies? (
            movies.map((movie,index) =>(
                <>
               <div className="movie-card">
                <p>{movie.Title}</p>
                <img src= {movie.Poster} alt={movie.Title}/>
                <p>Year: {movie.Year}</p>
               </div>
                </>
            ) )
        ):(<p className="nomovie">movie doesn't esxist</p>)}
        </div>
                ):(
                    <div className="network-error">
                        <div>
                        <p>no internet connection!</p>
                        <p>check your network</p>
                       </div>
                    </div>
                )
            }
        </div>
        </>
    )
}

export default Home;