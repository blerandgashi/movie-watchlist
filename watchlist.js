const watchlistMovie = document.querySelector(".movieWatchList")
console.log(watchlistMovie);

const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

if (watchlist.length === 0) {
  watchlistMovie.innerHTML = `<p class="selectMovie">No movies selected!</p>`
}else{
  watchlist.forEach(movie => {
    watchlistMovie.innerHTML += `
        <div id="showMovie">
          <img src="${movie.Poster}" alt="">
          <div class="description">
            <h2 id="movie-title">${movie.Title}</h2>

            <div class="shortDesc">
              <span>${movie.Year}</span>
              <span>Type: ${movie.Type}</span>
              <span><button class="remove" onclick="removeFromWatchlist('${movie.imdbID}')">-</button>Remove</span>
            </div>
          </div>
        </div>
        <hr>
    `
  });
}

function removeFromWatchlist(id){
  const updated = watchlist.filter(movie => movie.imdbID !== id);
  localStorage.setItem("watchlist", JSON.stringify(updated));
  location.reload();
}