import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetailsByID } from "../../../api/dataMovies"

import style from "./MovieDetails.module.css"
import StarRating from "../shared/StarRating";

export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                const response = await movieDetailsByID(controller.signal, id);
                setMovieDetails(response);
                console.log(response);
            } catch (error) {
                if (error.name !== "AbortError") {
                    console.error("Грешка при зареждането на филма:", error);
                }
            }
        })();

        return () => controller.abort();
    }, [id]);


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


        </>

    );
}