import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import { addNowPlayingMovies } from "../slices/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS
    )
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));
  }

  useEffect(() =>{
    // memoization to prevent multiple API calls
    if(nowPlayingMovies === null){
      getNowPlayingMovies();
    }
  }, []);
}

export default useNowPlayingMovies;