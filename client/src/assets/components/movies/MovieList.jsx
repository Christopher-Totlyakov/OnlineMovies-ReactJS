import { MovieElement } from "../shared/MovieElement";
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
            <div className="pagination">
                <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
                    Предишна
                </button>
                <span>Страница {page} от {totalPages}</span>
                <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
                    Следваща
                </button>
            </div>
        </>
    );
}