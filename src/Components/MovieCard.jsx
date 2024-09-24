import React from "react";

function MovieCard({ movieObj, addToWatchlist, removeFromWatchlist, watchlist }) {
  const isInWatchlist = watchlist.some((movie) => movie.id === movieObj.id);

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4">
      <img
        className="w-full object-cover"
        src={`https://image.tmdb.org/t/p/original${movieObj.poster_path}`}
        alt={movieObj.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movieObj.title}</div>
        <p className="text-gray-700 text-base">Rating: {movieObj.vote_average}</p>
        <p className="text-gray-700 text-base">Year: {movieObj.release_date.split("-")[0]}</p>
        {isInWatchlist ? (
          <div className="text-green-500 font-bold mt-2">Added to Watchlist</div>
        ) : null}
      </div>

      <div className="px-6 py-4 flex justify-between">
        {isInWatchlist ? (
          <button
            onClick={() => removeFromWatchlist(movieObj)}
            className="bg-red-500 text-white rounded p-2"
          >
            Remove from Watchlist
          </button>
        ) : (
          <button
            onClick={() => addToWatchlist(movieObj)}
            className="bg-blue-500 text-white rounded p-2"
          >
            Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
