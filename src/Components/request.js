
const movieRequests = {
    fetchNowPlaying: "https://api.themoviedb.org/3/movie/now_playing?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&page=1",

    fetchUpComing: "https://api.themoviedb.org/3/movie/upcoming?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&page=6",

    fetchTopRated: "https://api.themoviedb.org/3/movie/top_rated?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&page=1",

    fetchHorror: "https://api.themoviedb.org/3/discover/movie?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27&with_watch_monetization_types=flatrate",

    fetchAction: "https://api.themoviedb.org/3/discover/movie?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=28&with_watch_monetization_types=flatrate",

    fetchAnimation: "https://api.themoviedb.org/3/discover/movie?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=16&with_watch_monetization_types=flatrate",

    fetchMusic: "https://api.themoviedb.org/3/discover/movie?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=10402&with_watch_monetization_types=flatrate",

    fetchScienceFiction: "https://api.themoviedb.org/3/discover/movie?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=878&with_watch_monetization_types=flatrate",

    fetchComedy: "https://api.themoviedb.org/3/discover/movie?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=35&with_watch_monetization_types=flatrate",

    fetchMystery: "https://api.themoviedb.org/3/discover/movie?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=9648&with_watch_monetization_types=flatrate", 

    fetchRomance: "https://api.themoviedb.org/3/discover/movie?api_key=2aa22b6ed5c335cc3e1c4433263150f1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=15&with_genres=10749&with_watch_monetization_types=flatrate"

}

export default movieRequests