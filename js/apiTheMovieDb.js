
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=es-ES&api_key=bd551351d613eae72b5219e295facfeb&page1"

fetch(API_URL)
.then(res=>res.json())
.then(data =>{
	console.log(data);
	data.results.forEach((movie) => {
		let movieCard = `
        <div class="col-md-6" style="padding:15px;" >
          <div class="card h-100">
                <img class="card-img-top" style='height: 190px; object-fit: contain' src='https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}' alt="Card image cap">
                <div class="card-body d-flex flex-column">
                <h2 class="card-title">${movie.original_title}</h2>
                    <div class="mt-auto">                    
                    
                    <p class="card-text">${movie.overview}</p>
                    <span class="btn btn-primary">Rates: ${movie.vote_average}</span>
                    </div>
                </div>
          </div>
        </div> 
		`;
		result.innerHTML += movieCard;
 	// console.log(movieCard);
	
	});
})
