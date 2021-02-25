
// *******************************json convert part************************


	function displayMovies() {

		let movieContent ='';

		for ( let i in movieData.movies) {
		
			movieContent += (`

			<div class ="col-sm-5 col-md-5 bg-dark my-1 back" id="items${movieData.movies[i].id}">
				<div class= "row">
					<div class=" col-sm-6 col">
						<img src="${movieData.movies[i].image}" class=" w-100 rounded float-left m-1" alt=".">
					</div> 
					<div class=" col-sm-6  text-light text-center">
						<h3 >${movieData.movies[i].name}</h3>
						<div class="container">
							<img id="artist_img" src="${movieData.movies[i].artist_img}" class= "w-50" alt=".">
							<h4>${movieData.movies[i].artist_name}</h4>
							<div class="col-sm-10  my-2 ml-auto">
								<div class="row justify-content-around">
									<button id="likeButton" type="button" class="btn button " name="blabutton" target="bo">Like</button>
									<div class="likecounter">
										<p id="bo" class="  m-2  bo">${movieData.movies[i].likes}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			`);
		};

		$('#movie-box').replaceWith(`<div class="row justify-content-between back" id="movie-box">${movieContent}</div>`);

		var button = document.getElementsByClassName("button");

		for (let y = 0; y < button.length; y ++){

			button[y].addEventListener("click", function(){
				likeIt(y);
				
			});
		};

	};

// *********************************** like button counter****************


	var count = 0;
	
	function likeIt(val){
		movieData.movies[val].likes ++;
		var likes = count * 1 + 1;

  		document.getElementsByClassName("bo")[val].innerHTML = likes;

	}

	//**************************sort function*******************************

	document.getElementById("sortButton").addEventListener("click",function(){
	     sorting();
	     displayMovies();
	});


	function sorting(){
		movieData.movies.sort(function(a,b){ return b.likes - a.likes });
	   // console.log(movieData.movies);

	};








// ********************file system checking part******************************
if (typeof jQuery == "undefined"){
	console.log("nicht installiert");
}else{
	console.log("installiert");
};





