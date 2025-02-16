import { MovieElement } from "../shared/MovieElement";


export function SeriesList({ movies }){
    return(
        <div className="movieConteiner">
             {movies.length > 0 ? (
                movies.map((x) => <MovieElement key={x.id} id={x.id} img={x.poster_path} title={x.name} year={x.first_air_date} />)
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}