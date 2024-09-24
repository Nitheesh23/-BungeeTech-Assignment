import React, { useEffect, useState } from "react";
import genreids from "../utils/utility";

function WatchList() {
  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  // Load watchlist from localStorage
  useEffect(() => {
    const moviesFromLS = localStorage.getItem("watchlist");
    if (moviesFromLS) {
      setWatchlist(JSON.parse(moviesFromLS)); 
    }
  }, []);

  // Update genre list based on watchlist content
  useEffect(() => {
    if (watchlist.length > 0) {
      const tempGenres = watchlist.map((movie) => genreids[movie.genre_ids[0]]);
      const uniqueGenres = [...new Set(tempGenres)];
      setGenreList(["All Genres", ...uniqueGenres]);
    }
  }, [watchlist]);

  const handleAscendingRatings = () => {
    const sortedAscending = [...watchlist].sort(
      (m1, m2) => m1.vote_average - m2.vote_average
    );
    setWatchlist(sortedAscending);
  };

  const handleDescendingRatings = () => {
    const sortedDescending = [...watchlist].sort(
      (m1, m2) => m2.vote_average - m1.vote_average
    );
    setWatchlist(sortedDescending);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const removeFromWatchList = (id) => {
    const restOfTheMovies = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(restOfTheMovies);
    localStorage.setItem("watchlist", JSON.stringify(restOfTheMovies));
  };

  return (
    <>
      {/* Genre Filter Buttons */}
      <div className="flex flex-wrap justify-center m-4">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={
              genre === currGenre
                ? "mx-2 my-2 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
                : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-2 my-2"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex justify-center mb-4">
        <input
          className="h-[3rem] w-[19rem] bg-gray-200 px-4 outline-none border border-slate-600"
          placeholder="Search Movies"
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </div>

      {/* Watchlist as a responsive table */}
      <div className="overflow-auto rounded-lg border border-gray-200 shadow-md m-5">
        <table className="min-w-full bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th className="hidden sm:table-cell px-6 py-4">Ratings</th>
              <th className="hidden sm:table-cell px-6 py-4">Popularity</th>
              <th className="hidden lg:table-cell px-6 py-4">Genre</th>
              <th className="px-6 py-4">Delete</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {watchlist
              .filter((movie) => {
                if (currGenre === "All Genres") return true;
                else return genreids[movie.genre_ids[0]] === currGenre;
              })
              .filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
              )
              .map(({ id, poster_path, title, vote_average, popularity, genre_ids }) => (
                <tr key={id} className="hover:bg-gray-50">
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                    <img
                      className="h-[6rem] w-[10rem] object-cover"
                      src={`https://image.tmdb.org/t/p/original${poster_path}`}
                      alt={title}
                    />
                    <div className="ml-4">
                      <div className="font-medium text-gray-700">{title}</div>
                      <div className="text-sm text-gray-500 sm:hidden">
                        Rating: {vote_average}
                      </div>
                      <div className="text-sm text-gray-500 sm:hidden">
                        Popularity: {popularity}
                      </div>
                    </div>
                  </td>
                  <td className="hidden sm:table-cell px-6 py-4">{vote_average}</td>
                  <td className="hidden sm:table-cell px-6 py-4">{popularity}</td>
                  <td className="hidden lg:table-cell px-6 py-4">{genreids[genre_ids?.[0]]}</td>
                  <td
                    className="px-6 py-4 text-red-500 cursor-pointer"
                    onClick={() => removeFromWatchList(id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
