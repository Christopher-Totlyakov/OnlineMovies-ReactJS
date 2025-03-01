import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";

import style from "../movies/MovieDetails.module.css"
import StarRating from "../shared/StarRating";
import TrailerButton from "../movies/TrailerButton";
import MoviePlayer from "../shared/MoviePlayer";

export default function SeriesDetails() {
    const { id } = useParams();
    const { movieDetails, loading, error } = useMovieDetails("tv", id);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading movie details.</p>;

    return (
        <>
            <div className={style['imgBackdropConteiner']} >
                <div
                    className={style['imgBackdrop']}
                    style={{ '--backdrop-img': `url(https://image.tmdb.org/t/p/w1920${movieDetails.backdrop_path})` }}>

                </div>
            </div>
            <div className={style['shadowContainer']}>
                <div className={style['movieInofConteiner']}>
                    <h1 className={style['title']}>{movieDetails.title}</h1>

                    <div className={style['headDetails']}>

                        <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt="movie poster" className={style['moviePoster']} />
                        <div className={style['movieOverview']}>
                            <span>
                                <span className={style['rating']}>rating {movieDetails.vote_average?.toFixed(1)} by 10 </span>
                                <StarRating rating={movieDetails.vote_average} />
                                <span className={style['rating']}> from {movieDetails.vote_count} votes</span>
                            </span>
                            <p>{movieDetails.overview}</p>
                            <div className={style['ganres']}>
                                <span>Ganres: </span>
                                {movieDetails.genres?.map((x) => <span key={x.id}>{x.name.replace(" ", "-")} </span>)}
                            </div>
                            <p>Release date: {movieDetails.release_date}</p>
                            <p>Duration: {movieDetails.runtime}m</p>
                        </div>

                    </div>
                </div>
            </div>

            <TrailerButton trailerId={movieDetails.trailers?.length > 0 ? movieDetails.trailers[0].key : null} />

            <MoviePlayer movieId={movieDetails.id} />
        </>
    );
}