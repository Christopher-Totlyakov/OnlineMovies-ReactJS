import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieByID } from "../../../api/dataMovies"

export default function MovieDetails() {
    const [movieDetails, setMovieDetails] = useState({});
    const { id } = useParams();

    useEffect(() => {

        (async () => {
            const response = await movieByID(id);
            setMovieDetails(response);
        })()
    }, [])


    return (
        <h1>{movieDetails.Title}</h1>
    );
}