import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useLoadeRecommendations } from "../../hooks/useLoadeRecommendations";
import { Slider } from "../shared/Slider";

import style from "../movies/MovieDetails.module.css"
import StarRating from "../shared/StarRating";
import TrailerButton from "../movies/TrailerButton";
import MoviePlayer from "../shared/MoviePlayer";

export default function SeriesDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { movieDetails, loading, error } = useMovieDetails("tv", id);
    const { movie, loadingRecommendations, errorRecommendations } = useLoadeRecommendations("tv", id);
       useEffect(() => {
            if (error) {
                navigate("/404");
            }
        }, [error, navigate]);

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <div className={style['imgBackdropConteiner']} >
                <div
                    className={style['imgBackdrop']}
                    style={{ '--backdrop-img': `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})` }}>

                </div>
            </div>
            <div className={style['shadowContainer']}>
                <div className={style['movieInofConteiner']}>
                    <h1 className={style['title']}>{movieDetails.original_name}</h1>

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
                            <p>Release date: {movieDetails.first_air_date}</p>
                            <p>Seasens: {movieDetails.number_of_seasons}</p>
                            <p>Episodes: {movieDetails.number_of_episodes}</p>
                        </div>

                    </div>
                </div>
            </div>

            <TrailerButton trailerId={movieDetails.trailers?.length > 0 ? movieDetails.trailers[0].key : null} />

            <MoviePlayer type="tv" movieId={movieDetails.id} />

            <div className={style['recommendationsBox']}>
                <h1 className={style['recommendationsTitle']}>Recommendations:</h1>
                {movie && <Slider details={movie} isReverse={false} />}
            </div>
        </>
    );
}