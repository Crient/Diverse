// this from "POSTMAN" and divide it into part -> easier to use when making function
const baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = '4113f3ad734e747a5b463cde8c55de42'
const page = 1
const basePath = 'https://image.tmdb.org/t/p/w440_and_h660_face'

// trending movie card

const renderToCard = (data, renderArea) => { 
    let renderToUI = document.querySelector(renderArea)
    data.map(movie => renderToUI.innerHTML  += `
    <div class="col-4 col-sm-4 col-md-3 col-lg-2">
            <a href="movies-details.html?${movie.id}" class="text-decoration-none">
             <div class="card h-100 shadow">
              <img src="${basePath}${movie.poster_path}" class="card-img-top"
                  alt="moviesposter">
                  <div class="pick film-poster-quality">HD</div>
             <div class="card-body">
                <h4> <b> ${movie.title}</b></h4>
                <h5> <span> <i class="calendar-logo fa-regular fa-calendar"></i></span> ${movie.release_date} </h5>
                <p> Rating: ${movie.vote_average}/10 </p>

            </div>
            </div>
          </a>
        </div>
        `
    )}

    const fetchTrendingMovies = () => {
        fetch(`${baseURL}movie/now_playing?api_key=${API_KEY}&page=${page}`)
        .then(resp => resp.json())
        .then(movies => renderToCard(movies.results, ".trending-movies"))
    }
// ---- no need to call this method twice ---
// fetchPopularMovies();

let totalPages,
    currentPage = 1,
    loadMoreBtn = document.getElementById("load");

// bind load more button
loadMoreBtn.addEventListener("click", getUSerInfo);

 function getUSerInfo() {
    // ignore if all data has been loaded
    if(currentPage >= totalPages) return
    
    const nextPage = currentPage + 1;
    console.log("load more")
    console.log(`${baseURL}movie/now_playing?api_key=${API_KEY}&page=${nextPage}`)
    fetch(`${baseURL}movie/now_playing?api_key=${API_KEY}&page=${nextPage}`)
    .then(resp => resp.json())
    .then(movies => {renderToCard(movies.results, ".trending-movies");
             totalPages = movies.total_pages;

             // hide load more button
             if(totalPages == nextPage) loadMoreBtn.style.visibility = 'hidden';

             currentPage = nextPage;
            })
            .catch(function (error) {
                 console.log(error);
            });
        };    
    fetchTrendingMovies()