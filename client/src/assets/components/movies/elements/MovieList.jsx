import { MovieElement } from "./MovieElement";
import "./MovieList.css"

export function MovieList({ movies }){

    return(
        <div className="movieConteiner">
             {movies.length > 0 ? (
                movies.map((x) => <MovieElement key={x.imdbID} id={x.imdbID} img={x.Poster} title={x.Title} year={x.Year} />)
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}