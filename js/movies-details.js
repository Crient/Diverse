// this from "POSTMAN" and divide it into part -> easier to use when making function
const baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = '4113f3ad734e747a5b463cde8c55de42'
const page = 1
const basePath = 'https://image.tmdb.org/t/p/w440_and_h660_face'

let movieID = location.search.substring(1) //get id from browser bar
console.log(movieID)
let movieDetails = document.querySelector(".banner")
const fetchDetails = (movieID) => {
    fetch(`${baseURL}movie/${movieID}?api_key=${API_KEY}`)
        .then(resp => resp.json())
        .then(movie => movieDetails.innerHTML +=
            `   
        <section class="datails-movies">
        <section class="container-fluid " style="background-image: url(${basePath}${movie.backdrop_path}); height: 85vh" >
        <div class="shadow-on-banner"
        <div class="container">
        <div class="row detail" class"text-banner-adjust">
            
            <div class="col-12  col-md-9" class"text-banner-adjust">
                <h5 style="color: white; margin-top: 125px; margin-left: 60px; font-family: Bold"> DIVERSE <span style="color: #ff2e2e;">STREAM</span> </h5>
                <h1 style="color: white; font-size: 60px; font-family: Sharp_Sans; margin-bottom: 35px; margin-left: 60px;">${movie.original_title}</h1>
                <p style="color: white; font-size: 15px; font-family: Sharp_Sans; margin-left: 40px;  margin-bottom: -2px;">${movie.status}: ${movie.release_date}&nbsp; &nbsp; | Duration: ${movie.runtime} mn </p>
                <p style="color: white; font-size: 15px; font-family: Sharp_Sans; margin-left: 40px;  margin-bottom: 10px;">Genre: &nbsp; ${movie.genres[0].name}, &nbsp;  ${movie.genres[1].name}, &nbsp;   ${movie.genres[2].name}</p>
                <p style="color: white; font-size: 17px; font-family: Sharp_Sans; margin-left: 40px; margin-right: 100px;">${movie.overview}</p>
                <div class="d-flex flex-row ">
                    <div class="d-flex flex-column" style="margin-top: -48px; margin-left: 50px">
                        <button type="button" id="btnTrailer" class="btn btn-primary mt-5" data-bs-toggle="modal" data-bs-target="#trailerModal" style="background-color: red; border-color: red; border-radius: 3px; margin-right: 15px; font-family: Bold;" ><i  class="fa-solid fa-play"></i> Play Trailer</button>
    
                        <!-- Modal -->
                        <div class="modal fade" id="trailerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                           <div class="modal-dialog modal-dialog-centered modal-xl">
                           <div class="modal-content">
                              <iframe id="trailerPlayer" width="1223" height="687" title="Marvel Studios’ Ant-Man and The Wasp: Quantumania | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <!-- get id and set value to attr src when call modal -->
                          </div>
                         </div>
                        </div>
                    </div>
                
                    <div class="d-flex flex-column">
                    <button type="button" style="font-family: Bold;" class="btn btn-outline-light"><b><i class="fa-solid fa-plus fa-md"></i></b>Watch List</button>
                    </div>

                    <div class="d-flex flex-column">
                       <a><p style="font-size:20px; margin-left: 15px; margin-top: 3px;"><i class="fa-regular fa-thumbs-up"></i>
                       <i class="fa-regular fa-thumbs-down fa-regular"></i></p></a>
                    </div>
              </div>
                    
           
        
             

                </div>
            </div>
        </div> 
    </div>
            </div>      
            </section>
            </section>
  
     

        `
        )
}
// const movieBackdrop = document.querySelector("background-image")
//   movieBackdrop.style.backgroundImage = `url(${${baseURL}${movie.backdrop_path}})`

// fetch movies trailer

// let movieID = location.search.substring(1) //get id from browser bar
// console.log(movieID)

let key = "" //an open box to get data from 'key'
const fetchTrailer = (movieID) => {
    fetch(`${baseURL}movie/${movieID}/videos?api_key=${API_KEY}`)
        .then(resp => resp.json())
        .then(movie => key = movie.results[movie.results.length - 1].key) //you put 'movie.results.length - 1' because you only want to get the last object in the 55 objcts in one array.
}

// jQuery Code
$(document).on("click", "#btnTrailer", function () {
    $('#trailerModal').modal('show')
    $("#trailerPlayer").attr("src", `https://www.youtube.com/embed/${key}`)
})
fetchTrailer(movieID)
fetchDetails(movieID)





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

fetchPopularMovies()


// ===== MOVIE CASTS AND REVIEWS =====






// // CASTS
// const renderToCasts = (data, renderArea) => {
//     let renderToUI = document.querySelector(renderArea)
//     console.log("cast", data);
//     console.log("render in cast", renderToUI);
//     data.map(Casts => renderToUI.innerHTML +=
//         `


//         `
//     )
// }
// // REVIEWS
// const renderToReviews = (data, renderArea) => {
//     let renderToUI = $(renderArea)

//     console.log("render to ui", data);
//     let reviewCard = ""
//     data.map(Reviews => reviewCard +=  `
//     <div class="swiper-slide">
//     <p style="color: white;">Hi</p>
//     </div>
//     `)

//     renderToUI.html(`

//     `)

//     console.log("review card", reviewCard);
       
    
// }

// // fetching casts movies (jab kata)
// const fetchCasts = (data) => {
//     fetch(`${baseURL}movie/${movieID}/credits?api_key=${API_KEY}`)
//         .then(resp => resp.json())
//         .then(movies => renderToCasts(movies.cast, ".movie-casts"))
// }


// // fetch review
const fetchReviews = () => {
    fetch(`${baseURL}movie/${movieID}/reviews?api_key=${API_KEY}`)
        .then(resp => resp.json())
        .then(movies => renderToReviews(movies.results, ".movie-reviews"))
}
// fetchCasts()
fetchReviews()

// //. teacher function
// const renderToCasts1 = (data, renderArea) => {
//     let renderToUI = $(renderArea)
//     // console.log("cast", data);
//     // console.log("render in cast", renderToUI);
//     let card = "";
//     data.map(Casts => card +=    `
//     <div class="swiper-slide-cast">
//     <a href="#">
//         <div class="movie-image">
//           <img src="${basePath}${Casts.profile_path}" class="card-img-top" alt="...">
//         </div>

//         <div class="movie-body">
//         <p class="movie-title">${Casts.name}</p>
//         <p class="movie-title">${Casts.character}</p>
//       </div>
//       </a>
//   </div>

//         `
      
//     )
//     renderToUI.html(card)
//     // console.log(card);
// }


// $(document).ready(function(){
//     fetchReviews()
//     console.log($('.movie-casts'));
//     fetch(`${baseURL}movie/${movieID}/credits?api_key=${API_KEY}`)
//         .then(resp => resp.json())
//         .then(movies => renderToCasts1(movies.cast, ".movie-casts"))
// })



