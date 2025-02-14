import "./MoviePage.css";

import { SearchBar } from "../SearchBar";
import { MovieList } from "./shared/MovieList";
import { useLoadContent } from "../../hooks/useLoadContent";

export function MoviePage(){
    const { movies, searchContent, loading, error } = useLoadContent('movies', []);

    const handleSearch = (query) => {
        searchContent(query);
    };

    return (
        <article>
            <h1>Movies</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <MovieList movies={movies} />
        </article>
    );
}
