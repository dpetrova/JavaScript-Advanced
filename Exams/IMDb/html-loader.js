var imdb = imdb || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
			moviesContainer = document.getElementById('movies'),
			detailsContainer = document.getElementById('details'),
			genresUl = loadGenres(data);

		container.appendChild(genresUl);

		genresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var genreId,
					genre,
					moviesHtml;

				genreId = parseInt(ev.target.getAttribute('data-id'));
				genre = data.filter(function (genre) {
					return genre._id === genreId;
				})[0];

				moviesHtml = loadMovies(genre.getMovies());
				moviesContainer.innerHTML = moviesHtml.outerHTML;
				moviesContainer.setAttribute('data-genre-id', genreId);


				// Task 2 - Add event listener for movies boxes
				var infoFragment = document.createDocumentFragment(),
					moviesLi = Array.prototype.slice.call(moviesContainer.querySelectorAll("LI")); //get all li(movies) as array
				moviesLi.forEach(function(li){
					li.addEventListener('click', function(){
						//to remove old information and leave only for film been clicked
						while(detailsContainer.firstChild){
							detailsContainer.removeChild(detailsContainer.firstChild);
						}

						var movieId = li.getAttribute('data-id'),
							movie = genre.getMovies().filter(function(currMovie){
								return currMovie._id == movieId;
							})[0]; //because filter returns array

						var actorInfo = loadActors(movie),
							movieReviews = loadReviews(movie);

						detailsContainer.appendChild(actorInfo);
						detailsContainer.appendChild(movieReviews);
					})
				})
			}
		});
	}


	function loadGenres(genres) {
		var genresUl = document.createElement('ul');
		genresUl.setAttribute('class', 'nav navbar-nav');
		genres.forEach(function (genre) {
			var liGenre = document.createElement('li');
			liGenre.innerHTML = genre.name;
			liGenre.setAttribute('data-id', genre._id);
			genresUl.appendChild(liGenre);
		});

		return genresUl;
	}

	function loadMovies(movies) {
		var moviesUl = document.createElement('ul');
		movies.forEach(function (movie) {
			var liMovie = document.createElement('li');
			liMovie.setAttribute('data-id', movie._id);

			liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
			liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
			liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
			liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
			liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
			liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
			
			moviesUl.appendChild(liMovie);
		});

		return moviesUl;
	}

	function loadActors(movie){
		var actors = movie._actors,
			actorsUl = document.createElement('ul');
			actorsUl.innerHTML = '<h3>Actors:</h3>';

		actors.forEach(function(actor){
			var liActor = document.createElement('li');
			liActor.setAttribute('actor-id', actor._id);
			liActor.innerHTML = '<h4>' + actor.name + '</h4>' +
								'<div><strong>Bio:</strong>' + actor.bio + '</div>' +
								'<div><strong>Born:</strong>' + actor.born + '</div>';

			actorsUl.appendChild(liActor);
		});

		return actorsUl;
	}

	function loadReviews(movie){
		var reviews = movie._reviews,
			reviewsUl = document.createElement('ul');
		reviewsUl.innerHTML = '<h3>Reviews:</h3>';

		reviews.forEach(function(review){
			var liReview = document.createElement('li');
				liReview.setAttribute('review-id', review._id);
				liReview.innerHTML = '<h4>' + review.author + '</h4>' +
									 '<div><strong>Content:</strong>' + review.content + '</div>' +
									 '<div><strong>Date:</strong>' + review.date + '</div>' +
									 '<button>Delete review</button>';

			// Task 3 - Add event listener for delete button (delete movie button or delete review button)
			var button = liReview.getElementsByTagName('button')[0];
				button.addEventListener('click', function(){
					movie.deleteReview(review);
					reviewsUl.removeChild(liReview);
				});
			reviewsUl.appendChild(liReview);
		});

		return reviewsUl;
	}

	scope.loadHtml = loadHtml;
}(imdb));