import { useEffect, useState } from "react";
import { movieDetailsByID } from "../../api/dataMovies";

export function useMovieDetails(type, id) {
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                const response = await movieDetailsByID(type, controller.signal, id);
                if (response.success !== undefined) {
                    setError("Not found");
                } 
                setMovieDetails(response);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Грешка при зареждането на филма:", err);
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [id]);

    return { movieDetails, loading, error };
}
