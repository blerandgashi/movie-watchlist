const searchBtn = document.querySelector('#searchBtn');
const movieContainer = document.querySelector("#movieResults");


searchBtn.addEventListener("click", async function(){
  const searchedMovie = document.querySelector("input").value;
  const apiKey = 'd577378e'

  const response = await fetch(`https://www.omdbapi.com/?s=${searchedMovie}&apikey=${apiKey}`)
  const data = await response.json()
      console.log(data);
      
      movieContainer.innerHTML = "";
      data.Search.forEach(movie => {
        movieContainer.innerHTML += `
        <div id="showMovie">
          <img src="${movie.Poster}" alt="">
          <div class="description">
            <h2 id="movie-title">${movie.Title}</h2>

            <div class="shortDesc">
              <span>${movie.Year}</span>
              <span>Type: ${movie.Type}</span>
              <span><button class="add" data-id="${movie.imdbID}">+</button>Watchlist</span>
            </div>
          </div>
        </div>
        <hr>
        `

        document.querySelectorAll(".add").forEach(button => {
          button.addEventListener("click", function(){
            const movieId = this.dataset.id;
            const movieToAdd = data.Search.find(m => m.imdbID == movieId)
            console.log(movieToAdd);

            addToWatchlist(movieToAdd);
          })
        })
      })
    })

function addToWatchlist(movie){
  let watchlist = JSON.parse(localStorage.getItem("watchlist") || '[]')

  if (!watchlist.some(m => m.imdbID === movie.imdbID)) {
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }
}