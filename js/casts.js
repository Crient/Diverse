const baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = "4113f3ad734e747a5b463cde8c55de42"
const basePath = 'https://image.tmdb.org/t/p/w440_and_h660_face'

const fetchTopCast = () => {
    let TopPeople = document.querySelector(".top-cast")
    console.log(`${baseURL}movie/${movieID}/credits?api_key=${API_KEY}`)
    fetch(`${baseURL}movie/${movieID}/credits?api_key=${API_KEY}&page=1`)
    .then(resp => resp.json())
    .then(people => people.cast.map(person => TopPeople.innerHTML += `
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-2">
            <div class="card h-100 border-0 shadow">
                <img src=${basePath}${person.profile_path} class="card-img-top" alt="movies">
                <div class="card-body">
                <a href="#" class="text-decoration-none">
                    <h5 class="card-title">
                        ${person.name}
                    </h5>
                    <p>${person.character}</p>
                </a>
                </div>
            </div>
    </div>
    `))
}


fetchTopCast()
