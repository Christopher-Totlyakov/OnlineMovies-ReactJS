async function DataRequest(type, name, year, page) {
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY; // Взимаме API ключа от .env файла

    const currentYear = new Date().getFullYear();

    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&type=${type}&s=${name}&page=${page}`;

    if (year >= 1900 && year <= currentYear) {
        url += `&y=${year}`;
    }

    const response = await fetch(url);
    const result = await response.json(); // Изчакваме да се парсне като JSON

    return result;
}

export const getMovies = DataRequest.bind(null, 'movie');
export const getSeries = DataRequest.bind(null, 'series');
