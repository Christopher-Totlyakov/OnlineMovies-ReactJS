import { MovieElement } from "../shared/MovieElement";
import Pagination from "../shared/Pagination";


export function SeriesList({ movies, page, setPage, totalPages }) {
    return (
        <>
            <div className="movieConteiner">
                {movies.length > 0 ? (
                    movies.map((x) => <MovieElement type="series" key={x.id} id={x.id} img={x.poster_path} title={x.name} year={x.first_air_date} />)
                ) : (
                    <p>No results found.</p>
                )}
            </div>

            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
    );
}