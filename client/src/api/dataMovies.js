export async function DataRequest(tupe, signal, prYear='', gteYear='', lteYear='', page = 1, gteVote='', lteVote='') {

    //const currentYear = new Date().getFullYear();

    let url = `https://online-movie-worker.laminex0622.workers.dev/${tupe}?prYear=${prYear}&gteYear=${gteYear}&lteYear=${lteYear}&page=${page}&gteVote=${gteVote}&lteVote=${lteVote}`;

    const response = await fetch(url,{ signal });
    const result = await response.json();
    return result;
}

export async function movieByID(id) {
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;


    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;

    const response = await fetch(url);
    const result = await response.json();

    return result;
}

export const getMovies = DataRequest.bind(null, 'movies');
export const getSeries = DataRequest.bind(null, 'tv');
