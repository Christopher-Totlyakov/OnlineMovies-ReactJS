import { MovieElement } from "../shared/MovieElement";
import Pagination from "../shared/Pagination";

import "./MovieList.css";

export function MovieList({ movies, page, setPage, totalPages }) {
    return (
        <>
            <div className="movieConteiner">
                {movies.length > 0 ? (
                    movies.map((x) => <MovieElement type="movies" key={x.id} id={x.id} img={x.poster_path} title={x.original_title} year={x.release_date} />)
                ) : (
                    <p>No results found.</p>
                )}
            </div>
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
    );
}