import { MovieElement } from "./MovieElement";


export function MovieList({ movies }){

    return(
        <>
             {movies.length > 0 ? (
                movies.map((x) => <MovieElement key={x.imdbID} img={x.Poster} title={x.Title} year={x.Year} />)
            ) : (
                <p>No results found.</p>
            )}
        </>
    );
}