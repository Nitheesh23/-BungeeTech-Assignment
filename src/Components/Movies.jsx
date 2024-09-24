import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [watchlist, setWatchlist] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [genres, setGenres] = useState([]);

  const API_KEY = "98ae56fea5657f54a57b581ced0643e0";

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/upcoming",
      params: { language: "en-US", page: pageNo, api_key: API_KEY },
    };

    axios
      .request(options)
      .then(async (response) => {
        const movieData = response.data.results;
        const moviesWithRevenue = await Promise.all(
          movieData.map(async (movie) => {
            const movieDetails = await fetchMovieDetails(movie.id);
            return { ...movie, revenue: movieDetails.revenue };
          })
        );
        setMovies(moviesWithRevenue);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pageNo]);

  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list", {
        params: { api_key: API_KEY },
      })
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => console.error(error));
  }, []);

  const fetchMovieDetails = async (movieId) => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}`,
      params: { api_key: API_KEY },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error("Error fetching movie details: ", error);
      return { revenue: "N/A" };
    }
  };

  const addToWatchlist = (movie) => {
    const existingMovie = watchlist.find((item) => item.id === movie.id);
    if (!existingMovie) {
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    }
  };

  const removeFromWatchlist = (movie) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== movie.id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  const handlePrevious = () => {
    if (pageNo === 1) return;
    setPageNo(pageNo - 1);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesYear = selectedYear
      ? movie.release_date.includes(selectedYear)
      : true;
    const matchesGenre =
      selectedGenre === "All Genres"
        ? true
        : movie.genre_ids.includes(
            genres.find((genre) => genre.name === selectedGenre)?.id
          );
    return matchesYear && matchesGenre;
  });

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <input
          type="text"
          className="border p-2"
          placeholder="Filter by Year (e.g., 2023)"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        />
        <select
          className="border p-2"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="All Genres">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movieObj) => (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              addToWatchlist={addToWatchlist}
              removeFromWatchlist={removeFromWatchlist}
              watchlist={watchlist}
              genres={genres}
            />
          ))
        ) : (
          <div className="text-center text-xl font-bold mt-4">
            No movies found for the selected filters.
          </div>
        )}
      </div>

      <div className="flex justify-center gap-2 bg-gray-400 p-4 h-[50px] w-full mt-8">
        <div onClick={handlePrevious} className="px-8 cursor-pointer">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className="px-8 cursor-pointer">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Movies;

