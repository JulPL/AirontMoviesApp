const APIURL2 = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH2 = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI2 =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const SEARCHAPI3 = "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=thor"

const mainContent = document.getElementById('maincontent');



// initially get Avatar2 movies
getMovies2(SEARCHAPI3);

    async function getMovies2(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies2(respData.results);
}

//function mainMovie(movies)

function showMovies2(movies2) {
    // clear main
    
    mainContent.innerHTML = "";




    movies2.forEach((movie1) => {
        const { poster_path, title, vote_average, overview } = movie1;
      

     



       
       

        mainContent.innerHTML = `
            <img class="mainimage" 
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info2">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview2">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

       
    });
}
