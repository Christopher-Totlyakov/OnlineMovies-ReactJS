import { useLoadContent } from "../../hooks/useLoadContent";
import { SearchBar } from "../searchBar/SearchBar";
import { SeriesList } from "./SeriesList";

export function SeriesPage() {
    const { movies, searchContent, loading, error, page, setPage, totalPages, genres } = useLoadContent('tv', []);

    const handleSearch = (query) => {
        searchContent(query);
    };
    
    return (
        <article>
            <h1>series & TV shows</h1>
            <SearchBar onSearch={handleSearch} genres={genres} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <SeriesList movies={movies} page={page} setPage={setPage} totalPages={totalPages} />
        </article>
    );
}