export async function DataRequest(tupe, signal, prYear='', gteYear='', lteYear='', page = 1, gteVote='', lteVote='') {

    //const currentYear = new Date().getFullYear();

    let url = `https://online-movie-worker.laminex0622.workers.dev/${tupe}?prYear=${prYear}&gteYear=${gteYear}&lteYear=${lteYear}&page=${page}&gteVote=${gteVote}&lteVote=${lteVote}`;

    const response = await fetch(url,{ signal });
    const result = await response.json();
    return result;
}

export async function movieDetailsByID(signal, movieId, language="en-US") {

    let url = `https://online-movie-worker.laminex0622.workers.dev/movie/details?id=${movieId}&language=${language}`;

    const response = await fetch(url, { signal });
    const result = await response.json();

    return result;
}

export const getMovies = DataRequest.bind(null, 'movies');
export const getSeries = DataRequest.bind(null, 'tv');
