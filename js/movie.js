// this from "POSTMAN" and divide it into part -> easier to use when making function
const baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = '4113f3ad734e747a5b463cde8c55de42'
const page = 1
const basePath = 'https://image.tmdb.org/t/p/w440_and_h660_face'

// popular movie card
const renderToCard = (data, renderArea) => {
    let renderToUI = document.querySelector(renderArea)
    data.map(movie => renderToUI.innerHTML += `
    <div class="card swiper-slide">
        <a href="movies-details.html?${movie.id}">
            <div class="movie-image">
             <img src="${basePath}${movie.poster_path}" class="card-img-top">
            </div>

            <div class="movie-body">
            <h5 class="movie-title">${movie.title}</h5>
        </div>
        </a>
    </div>
        `
    )
}

// fetching popular movies (jab kata)
const fetchPopularMovies = () => {
    fetch(`${baseURL}movie/popular?api_key=${API_KEY}&page=${page}`)
        .then(resp => resp.json())
        .then(movies => renderToCard(movies.results, ".popular-movies"))
}
const fetchPlayingMovies = () => {
    fetch(`${baseURL}movie/now_playing?api_key=${API_KEY}&page=${page}`)
    .then(resp => resp.json())
    .then(movies => renderToCard(movies.results, ".trending-movies"))
}
fetchPopularMovies()
fetchPlayingMovies()