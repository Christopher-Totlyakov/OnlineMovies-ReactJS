import "./MoviePage.css";

import { SearchBar } from "../searchBar/SearchBar";
import { MovieList } from "./MovieList";
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
