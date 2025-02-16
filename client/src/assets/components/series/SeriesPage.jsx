import { useLoadContent } from "../../hooks/useLoadContent";
import { SearchBar } from "../searchBar/SearchBar";
import { SeriesList } from "./SeriesList";

export function SeriesPage(){
  const { movies, searchContent, loading, error } = useLoadContent('tv', []);

  const handleSearch = (query) => {
      searchContent(query);
  };

    return (
        <article>
            <h1>series & TV shows</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <SeriesList movies={movies} />
        </article>
    );
}