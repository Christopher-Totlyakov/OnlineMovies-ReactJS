import { MovieElement } from "./MovieElement";
import "./MovieList.css"

export function MovieList({ movies }){
    console.log("''''''''''''''''''''");
    console.log(movies[0].release_date);

    return(
        <div className="movieConteiner">
             {movies.length > 0 ? (
                movies.map((x) => <MovieElement key={x.id} id={x.id} img={x.poster_path} title={x.original_title} year={x.release_date} />)
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}