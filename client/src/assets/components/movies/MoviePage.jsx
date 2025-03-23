import "./MoviePage.css";
import { SearchBar } from "../searchBar/SearchBar";
import { MovieList } from "./MovieList";
import { useLoadContent } from "../../hooks/useLoadContent";

export function MoviePage() {
    const { movies, searchContent, loading, error, page, setPage, totalPages, genres } = useLoadContent('movies', []);

    return (
        <article>
            <h1>Movies</h1>
            <SearchBar onSearch={searchContent} genres={genres} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <MovieList movies={movies} page={page} setPage={setPage} totalPages={totalPages} />
        </article>
    );
}