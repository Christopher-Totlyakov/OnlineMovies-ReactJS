export async function DataRequest(tupe, signal, year = '', gteYear = '', lteYear = '', page = 1, gteVote = '', lteVote = '',name ='') {

    //const currentYear = new Date().getFullYear();

    let url = `https://online-movie-worker.laminex0622.workers.dev/${tupe}?year=${year}&gteYear=${gteYear}&lteYear=${lteYear}&page=${page}&gteVote=${gteVote}&lteVote=${lteVote}&name=${name}`;

    const response = await fetch(url, { signal });
    const result = await response.json();

    return result;
}

export async function movieDetailsByID(tupe, signal, movieId, language = "en-US") {

    let url = `https://online-movie-worker.laminex0622.workers.dev/${tupe}/details?id=${movieId}&language=${language}`;

    const response = await fetch(url, { signal });
    const result = await response.json();

    return result;
}

export async function movieTrending(tupe, signal) {

    let url = `https://online-movie-worker.laminex0622.workers.dev/${tupe}/trending?time=day`;

    const response = await fetch(url, { signal });
    const result = await response.json();

    return result;
}

export async function movieRecommendations(tupe, signal, movieId) {

    let url = `https://online-movie-worker.laminex0622.workers.dev/${tupe}/recommendations?id=${movieId}`;

    const response = await fetch(url, { signal });
    const result = await response.json();

    return result;
}

export async function fetchGenres(tupe, signal) {

    let url = `https://online-movie-worker.laminex0622.workers.dev/${tupe}/genres`;

    const response = await fetch(url, { signal });
    const result = await response.json();

    return result;
}

export const getMovies = DataRequest.bind(null, 'movies');
export const getSeries = DataRequest.bind(null, 'tv');

export const getMoviesByID = movieDetailsByID.bind(null, 'movies');
export const getSeriesByID = movieDetailsByID.bind(null, 'tv');